import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { createComment, getComments } from '../../redux/actions/commentAction'

import { IBlog, RootStore, IUser, IComment } from '../../utils/TypeScript'

import Input from '../comments/Input'
import Comments from '../comments/Comments'
import Spinner from '../global/Spinner'
import Pagination from '../global/Pagination'

interface IProps {
  blog: IBlog
}

const DisplayBlog: React.FC<IProps> = ({ blog }) => {
  const { authReducer, comments } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()

  const [showComments, setShowComments] = useState<IComment[]>([])
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  const handleComment = (body: string) => {
    if (!authReducer.user || !authReducer.access_token) return

    const data = {
      content: body,
      user: authReducer.user,
      blog_id: blog._id as string,
      blog_user_id: (blog.user as IUser)._id,
      createdAt: new Date().toISOString(),
    }

    setShowComments([data, ...showComments])
    dispatch(createComment(data, authReducer.access_token))
  }

  useEffect(() => {
    setShowComments(comments.data)
  }, [comments.data])

  const fetchComments = useCallback(
    async (id: string, num = 1) => {
      setLoading(true)
      await dispatch(getComments(id, num))
      setLoading(false)
    },
    [dispatch]
  )

  useEffect(() => {
    if (!blog._id) return
    const num = history.location.search.slice(6) || 1
    fetchComments(blog._id, num)
  }, [blog._id, fetchComments, history])

  const handlePagination = (num: number) => {
    if (!blog._id) return
    fetchComments(blog._id, num)
  }

  return (
    <div className="blog-details">
      <h2 className="text-center text-8xl font-bold">{blog.title}</h2>
      <div className="flex items-center mt-10 mb-5">
        {typeof blog.user !== 'string' && (
          <>
            <img
              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              src={blog.user.avatar}
              alt="avatar"
            />
            <span className="font-semibold mr-3">By {blog.user.name}</span>
          </>
        )}
        {new Date(blog.createdAt).toLocaleString()}
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: blog.content,
        }}
      />

      <h3 className="font-semibold text-2xl mb-3">Comments</h3>

      {authReducer.user ? (
        <Input callback={handleComment} />
      ) : (
        <h5 className="mb-6 text-center text-2xl">
          Please{' '}
          <Link
            to={`/login?blog/${blog._id}`}
            className="text-indigo-600 font-semibold hover:underline"
          >
            login
          </Link>{' '}
          to comment.
        </h5>
      )}

      {loading ? (
        <Spinner />
      ) : (
        showComments?.map((comment, index) => (
          <Comments key={index} comment={comment} />
        ))
      )}

      {comments.total > 1 && (
        <Pagination total={comments.total} callback={handlePagination} />
      )}
    </div>
  )
}

export default DisplayBlog
