import React from 'react'
import { RootStore } from '../utils/TypeScript'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CardBlog from '../components/cards/CardBlog'
import { ChevronDoubleRightIcon } from '@heroicons/react/outline'
import Hero from '../components/Hero'
import Spinner from '../components/global/Spinner'

const Home = () => {
  const { homeBlogs } = useSelector((state: RootStore) => state)

  if (homeBlogs.length === 0) return <Spinner />
  return (
    <>
      <Hero />
      <div className="bg-gray-50 rounded-lg py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Blog
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <>
            {homeBlogs.map((homeBlog) => (
              <div key={homeBlog._id} className="group_category">
                {homeBlog.count > 0 && (
                  <>
                    <div className="flex items-center mb-5">
                      <span className="text-4xl font-semibold">Category:</span>
                      <Link
                        to={`/blogs/${homeBlog.name.toLowerCase()}`}
                        className="text-xs px-2 ml-3 mt-3.5 font-medium bg-indigo-600 text-white rounded py-0.5"
                      >
                        {homeBlog.name}
                      </Link>
                      {homeBlog.count > 4 && (
                        <Link
                          className="flex items-center w-36 ml-auto w- px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
                          to={`/blogs/${homeBlog.name}`}
                        >
                          <span className="mx-1">Read more</span>
                          <ChevronDoubleRightIcon className="w-5 h-5 mx-1" />
                        </Link>
                      )}
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 mb-10">
                      {homeBlog.blogs.map((blog) => (
                        <CardBlog key={blog._id} blog={blog} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </>
        </div>
      </div>
    </>
  )
}

export default Home
