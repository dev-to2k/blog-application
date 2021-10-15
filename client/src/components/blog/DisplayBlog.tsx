import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createComment } from '../../redux/actions/commentAction'

import { IBlog, RootStore, IUser, IComment } from '../../utils/TypeScript'

import Input from '../comments/Input'
import Comments from '../comments/Comments'

interface IProps {
  blog: IBlog
}

const DisplayBlog: React.FC<IProps> = ({ blog }) => {
  const { authReducer, comments } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()

  const [showComments, setShowComments] = useState<IComment[]>([])

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
    if (comments.data.length === 0) return
    setShowComments(comments.data)
  }, [comments.data])

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
        <h5>
          Please <Link to={`/login?blog/${blog._id}`}>login</Link> to comment.
        </h5>
      )}

      {showComments?.map((comment, index) => (
        <Comments key={index} comment={comment} />
      ))}
    </div>
  )
}

export default DisplayBlog
