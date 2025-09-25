import React from "react";

import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner chính */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Chào mừng đến với TechStore
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Nơi mua sắm laptop, PC, linh kiện và phụ kiện chính hãng
        </p>
        <Link
          to="/laptop"
          className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg shadow hover:bg-yellow-500 transition"
        >
          Mua Ngay
        </Link>
      </section>

      {/* Danh mục sản phẩm */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Danh mục sản phẩm
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { name: "Laptop", link: "/laptop" },
            { name: "PC", link: "/pc" },
            { name: "Linh kiện", link: "/linh-kien" },
            { name: "Màn hình", link: "/man-hinh" },
            { name: "Phụ kiện", link: "/phu-kien" },
          ].map((cat, i) => (
            <Link
              key={i}
              to={cat.link}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center font-medium"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Sản phẩm nổi bật */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Sản phẩm nổi bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={`https://via.placeholder.com/400x250?text=Product+${id}`}
                alt={`Product ${id}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Sản phẩm {id}</h3>
                <p className="text-gray-600 mb-4">
                  Mô tả ngắn gọn sản phẩm {id}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">20.000.000₫</span>
                  <Link
                    to="/cart"
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100"
                  >
                    Thêm vào giỏ
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Khuyến mãi */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <div className="bg-yellow-100 p-10 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">🔥 Khuyến mãi hot tháng 9</h2>
          <p className="mb-6 text-gray-700">
            Giảm giá lên tới <span className="font-bold">30%</span> cho Laptop
            Gaming
          </p>
          <Link
            to="/khuyen-mai"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow"
          >
            Xem ngay
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
