import React from "react";
import { ShoppingCart, User, Phone } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold text-blue-600">PC Store</span>
        </Link>

        {/* Menu + Search */}
        <div className="flex-1 mx-8 hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6 text-gray-700 font-medium">
            <NavLink
              to="/laptop"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              Laptop
            </NavLink>
            <NavLink
              to="/pc"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              PC
            </NavLink>
            <NavLink
              to="/linh-kien"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              Linh kiện
            </NavLink>
            <NavLink
              to="/man-hinh"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              Màn hình
            </NavLink>
            <NavLink
              to="/phu-kien"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              Phụ kiện
            </NavLink>
            <NavLink
              to="/khuyen-mai"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-semibold" : "hover:text-blue-600"
              }
            >
              Khuyến mãi
            </NavLink>
          </nav>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Tìm sản phẩm..."
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </Link>

          <Link to="/login">
            <User className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            <span >Login</span>
          </Link>
          
          <a
            href="tel:0123456789"
            className="flex items-center space-x-1 text-blue-600 font-semibold"
          >
            <Phone className="w-5 h-5" />
            <span>0123 456 789</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
