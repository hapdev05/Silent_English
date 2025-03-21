import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-gray-800 py-4 text-gray-400">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            {/* Logo and description */}
            <div className="px-4 my-4 w-full xl:w-1/5">
              <a href="/" className="block w-56 mb-10">
                <svg
                  version="1.1"
                  viewBox="0 0 3368 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(0 -75)">
                      <g transform="translate(0 75)">
                        <rect
                          width="512"
                          height="512"
                          rx="128"
                          fill="#3D5AFE"
                        ></rect>
                        <rect
                          x="149"
                          y="176"
                          width="220"
                          height="220"
                          fill="#fff"
                        ></rect>
                        <circle cx="259" cy="156" r="40" fill="#fff"></circle>
                        <circle cx="369" cy="286" r="40" fill="#2962FF"></circle>
                      </g>
                      <text
                        fill="white"
                        fontFamily="Nunito-Bold, Nunito"
                        fontSize="512"
                        fontWeight="bold"
                      >
                        <tspan x="654" y="518">
                          EngSlient
                        </tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </a>
              <p className="text-justify">
                Our platform provides English learning resources for people with hearing impairments, including captioned videos, sign language support, and interactive lessons to make learning more accessible and enjoyable.
              </p>
            </div>

            {/* About Our Mission */}
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  About Our Mission
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Our Vision
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Accessible Learning Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    How We Support the Deaf Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  Resources
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Captioned Videos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Sign Language Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Community Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Learn Sign Language
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  Connect With Us
                </h2>
              </div>
              <div>
                {["facebook", "twitter", "instagram", "youtube"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M..."></path>
                      </svg>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
