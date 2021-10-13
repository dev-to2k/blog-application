import React from 'react'
import { IBlog } from '../../utils/TypeScript'

interface IProps {
  blog: IBlog
}

const DisplayBlog: React.FC<IProps> = ({ blog }) => {
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
    </div>
  )
}

export default DisplayBlog
