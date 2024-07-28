import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GetAllCategory } from "../../services/category";
import { CategoryType } from "../../interfaces/category";

type Props = {};

const Header = (props: Props) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await GetAllCategory();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories');
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#4E7C32] to-[#abaf98] py-4 px-6">
      <div className="flex justify-center items-center mb-4 flex-wrap">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm, thương hiệu và hơn thế nữa"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 w-[500px]"
          />
          <div className="text-white pl-20 pr-[150px] flex cursor-pointer">
            <span>En</span>
            <img
              src="/src/assets/image/mui_ten_xuong.png"
              alt="Dropdown"
              className="w-auto h-2 mt-[10px] ml-2"
            />
          </div>
          <div className="flex">
            <Link to="#" className="text-gray-50 hover:text-white pl-1 flex gap-1">
              <img
                src="/src/assets/image/icon_user.png"
                alt="Account"
                className="w-[25px]"
              />
              <p>Tài khoản</p>
            </Link>
          </div>
          <div className="flex pl-14">
            <Link to="#" className="text-gray-50 hover:text-white pl-1 flex gap-1">
              <img
                src="/src/assets/image/icon_cart.png"
                alt="Cart"
                className="w-[25px]"
              />
              <p>Giỏ hàng</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white w-full max-w-screen-xl mx-auto mb-4"></div>

      <div className="flex justify-center items-center space-x-4">
        <div className="flex items-center space-x-6">
          {categories.map(category => (
            <Link
              key={category._id}
              to={`/products/category/${category._id}`}
              className="text-gray-50 hover:text-white px-4"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
