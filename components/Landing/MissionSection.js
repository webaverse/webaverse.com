export default function MissionSection() {
  return (
      <div className="relative py-16 sm:py-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
              <div className="relative sm:py-16 lg:py-0">
                  <div
                    aria-hidden="true"
                    className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
                  >
                      <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl lg:right-72" />
                      <svg
                        className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                        width={404}
                        height={392}
                        fill="none"
                        viewBox="0 0 404 392"
                      >
                          <defs>
                              <pattern
                                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                              >
                                  <rect
                                    x={0}
                                    y={0}
                                    width={4}
                                    height={4}
                                    className="text-gray-200"
                                    fill="currentColor"
                                  />
                              </pattern>
                          </defs>
                          <rect
                            width={404}
                            height={392}
                            fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                          />
                      </svg>
                  </div>
                  <div className="relative  w-full px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                      {/* Testimonial card */}
                      <div className="relative pt-36 pb-10 rounded-2xl shadow-xl overflow-hidden">
                          <img
                            className="absolute inset-0 h-full w-full object-cover"
                            src="https://pbs.twimg.com/media/E0_U-kwXsAEG_sQ?format=jpg&name=medium"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-indigo-500 mix-blend-overlay" />
                          <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-80" />
                          <div className="relative px-8">
                              <div>
                                  <img className="h-12" src="" alt="" />
                              </div>
                              <blockquote className="mt-8">
                                  <div className="relative text-lg font-medium text-white md:flex-grow">
                                      <svg
                                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                      >
                                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                      </svg>
                                      <p className="relative">
                                          We have enough interesting ingredients we can weave
                                          together into a cinematic universe that we all have shared
                                          ownership of.
                                      </p>
                                  </div>

                                  <footer className="mt-4">
                                      <p className="text-base font-semibold text-indigo-200">
                                          Jin, CGO at Webaverse
                                      </p>
                                  </footer>
                              </blockquote>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="relative w-full px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                  {/* Content area */}
                  <div className="pt-12 sm:pt-16 lg:pt-20 prose prose-lg mx-auto">
                      <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-3xl">
                          On a mission to connect virtual worlds
                      </h2>
                      <div className="mt-6 text-gray-500 space-y-6">
                          <p className="text-lg">
                              Webaverse is an open source project to manifest the best version
                              of the Metaverse. One which meets users where they are, requires
                              no installs, and supports self expression to the max. We want to
                              make the web fun again while enabling users to take back control
                              of their data.
                          </p>
                          <p className="text-base leading-7">
                              Sometime this decade a good pair of glasses will come out and
                              forever change computing as we know it. The future is spatial,
                              but it risks being owned by a small handful of companies. We
                              want the future successor to the Internet and sum of all virtual
                              worlds to evolve more like the web and less like an app store.
                              Hence the name Webaverse. We aim to build something that's fun
                              to use first.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
