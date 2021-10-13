import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IBlog, IParams, RootStore } from '../../utils/TypeScript'
import { useHistory, useParams } from 'react-router-dom'
import NotFound from '../../components/global/NotFound'
import { getBlogsByCategoryId } from '../../redux/actions/blogAction'
import CardBlog from '../../components/cards/CardBlog'
import Pagination from '../../components/global/Pagination'

const BlogsByCategory = () => {
  const { categories, blogsCategory } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
  const { slug } = useParams<IParams>()

  const [categoryId, setCategoryId] = useState('')
  const [blogs, setBlogs] = useState<IBlog[]>()
  const [total, setTotal] = useState(0)

  const history = useHistory()
  const { search } = history.location

  useEffect(() => {
    const category = categories.find((item) => item.name === slug)
    if (category) setCategoryId(category._id)
  }, [slug, categories])

  useEffect(() => {
    if (!categoryId) return

    if (blogsCategory.every((item) => item.id !== categoryId)) {
      dispatch(getBlogsByCategoryId(categoryId, search))
    } else {
      const data = blogsCategory.find((item) => item.id === categoryId)
      if (!data) return
      setBlogs(data.blogs)
      setTotal(data.total)

      if (data.search) history.push(data.search)
    }
  }, [categoryId, blogsCategory, dispatch, search, history])

  const handlePagination = (num: number) => {
    const search = `?page=${num}`
    dispatch(getBlogsByCategoryId(categoryId, search))
  }

  if (!blogs) return <NotFound />

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Category
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            <span className="text-xs px-2 uppercase font-medium bg-indigo-500 text-white rounded py-0.5">
              {slug.toString()}
            </span>
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
          {blogs.map((blog) => (
            <CardBlog key={blog._id} blog={blog} />
          ))}
        </div>
        {total > 1 && <Pagination total={total} callback={handlePagination} />}
      </div>
    </div>
  )
}

export default BlogsByCategory
