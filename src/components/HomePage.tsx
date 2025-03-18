import { motion } from "framer-motion";
import Footer from "./ui/footer";
import {
  BookOpen,
  Calculator,
  ChevronDown,
  Menu,
  Search,
  X,
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/random/1600x900/?education)",
        }}
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Trẻ Điếc cần được học Ngôn ngữ sớm
          </h1>
          <p className="text-xl">Để phát triển tư duy, nhận thức và hòa nhập cộng đồng</p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Giới thiệu dự án</h2>
          <p className="text-gray-600 mb-4">
            Dự án nhằm nâng cao chất lượng giáo dục cho học sinh khiếm thính cấp tiểu học thông qua ngôn ngữ ký hiệu (QIPEDC), do Quỹ Hợp tác Toàn cầu tài trợ.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Xem thêm
          </button>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="bg-blue-500 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Cùng có kiến thức
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white text-blue-400 p-6 rounded-lg text-center"
              >
                <BookOpen className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">
                  100 bài giảng Tiếng Việt
                </h3>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white text-blue-400 p-6 rounded-lg text-center"
              >
                <Calculator className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">50 bài giảng Toán</h3>
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
