import { motion } from "framer-motion";
import Footer from "./ui/footer";
import bgImage from "@/assets/imgs/trediec.jpg";

import {
  BookOpen, Calculator, ChevronDown, Menu, Search, X, Users, Heart, 
} from "lucide-react";
import React, { useState } from "react";

// HomePage Component
const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-blue-500 shadow-md transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-white">SILENT ENGLISH</div>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-white hover:text-blue-200">
                Trang chủ
              </a>
              <a href="#" className="text-white hover:text-blue-200">
                Giới thiệu
              </a>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-white hover:text-blue-200 flex items-center"
                >
                  Bài tập
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <a
                      href="/let-go-3"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Level 2
                    </a>
                    <a
                      href="/let-go-4"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Let’s go 4
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="text-white hover:text-blue-200">
                Liên hệ
              </a>
            </nav>
            <div className="hidden md:flex items-center">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="bg-white/10 text-white placeholder-white/70 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="ml-2 text-white">
                <Search className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-blue-500 ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4 p-4">
          <a href="#" className="text-white text-lg">
            Trang chủ
          </a>
          <a href="#" className="text-white text-lg">
            Giới thiệu
          </a>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white hover:text-blue-200 flex items-center"
          >
            Bài tập
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <a
                href="/let-go-3"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Let’s go 3
              </a>
              <a
                href="/let-go-4"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Let’s go 4
              </a>
            </div>
          )}
          <a href="#" className="text-white text-lg">
            Liên hệ
          </a>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="bg-white/10 text-white placeholder-white/70 rounded-md px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/70"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-white mb-10 md:mb-0"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block bg-blue-500 px-4 py-1 rounded-full text-sm font-medium mb-4"
              >
                Dự án giáo dục đặc biệt
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              >
                Trẻ Điếc cần được học <p><span className="text-blue-300">Ngôn ngữ sớm</span></p>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl md:text-2xl mb-8 text-blue-100"
              >
                Để phát triển tư duy, nhận thức và hòa nhập cộng đồng
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Tìm hiểu thêm
                </a>
                <a
                  href="#"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-all duration-300"
                >
                  Xem video
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl"></div>
                <img
                  src={bgImage}
                  alt="Trẻ học ngôn ngữ ký hiệu"
                  className="relative z-10 rounded-2xl shadow-2xl"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">1000+</p>
                      <p className="text-xs text-gray-500">Học sinh đã tham gia</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="absolute -top-5 -right-5 bg-white p-4 rounded-xl shadow-lg z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Heart className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">100%</p>
                      <p className="text-xs text-gray-500">Sự hài lòng</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-16"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Về chúng tôi
            </span>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Giới thiệu dự án</h2>
            <p className="text-gray-600 text-lg">
              Dự án nhằm nâng cao chất lượng giáo dục cho học sinh khiếm thính cấp tiểu học thông qua ngôn ngữ ký hiệu
              (QIPEDC), do Quỹ Hợp tác Toàn cầu tài trợ.
            </p>
          </div>
          <div className="text-center">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg font-medium">
              Xem thêm
            </button>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Cùng có kiến thức</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white text-blue-600 p-8 rounded-xl shadow-lg text-center"
              >
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                  <BookOpen className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">100 bài giảng Tiếng Việt</h3>
                <p className="text-gray-600">Phát triển kỹ năng ngôn ngữ và giao tiếp hiệu quả</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white text-blue-600 p-8 rounded-xl shadow-lg text-center"
              >
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                  <Calculator className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">50 bài giảng Toán</h3>
                <p className="text-gray-600">Phát triển tư duy logic và kỹ năng giải quyết vấn đề</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
