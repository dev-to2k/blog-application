import React from 'react'

const Hero = () => {
  return (
    <div className="bg-white py-5 sm:pb-8 lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
            <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
              Very proud to introduce
            </p>

            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
              Blog TO2K
            </h1>

            <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
              Don’t focus on having a great blog. Focus on producing a blog
              that’s great for your readers.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
              <a
                href="#"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Start now
              </a>

              <a
                href="#"
                className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Take tour
              </a>
            </div>
          </div>
          <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
            <img
              src="https://cdn.dribbble.com/users/870476/screenshots/11226950/media/9630cdb5a4e7a93677aba8db2043bae5.jpg?compress=1&resize=1600x1200"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
