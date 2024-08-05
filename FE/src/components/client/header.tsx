import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetAllCategory } from "../../services/category";
import { CategoryType } from "../../interfaces/category";
import { message } from "antd";
import { useForm } from "react-hook-form";

const Header = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await GetAllCategory();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories");
      }
    };
    fetchCategories();
  }, []);

  const handleSearchChange = (event: any) => {
    const term = event.target.value;
    setSearchTerm(term);
    navigate(`/search?q=${term}`);
  };

  const handleSearchClick = () => {
    if (searchTerm) {
      navigate(`/search?q=${searchTerm}`);
    }
    if (searchTerm.length == 0) {
      message.error("Vui lòng nhập dữ liệu vào ô tìm kiếm");
    }
  };
  const onSubmit = () => {
    handleSearchClick();
  };
  return (
    <div className="bg-gradient-to-r from-[#4E7C32] to-[#abaf98] py-4 px-6">
      <div className="flex justify-center items-center mb-4 flex-wrap">
        <div className="flex items-center space-x-4 relative">
          <Link to={""}>
            <div className="absolute left-[-128px] top-[15px] opacity-75 hover:opacity-100 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
          </Link>
          <div className="relative">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Suchen Sie nach Produkten, Marken und mehr"
                value={searchTerm}
                onChange={handleSearchChange}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 w-[500px]"
              />
            </form>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 absolute left-[470px] top-[10px] cursor-pointer "
              onClick={handleSearchClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="text-white pl-20 pr-[150px] flex cursor-pointer">
            <span>En</span>
            <img
              src="/src/assets/image/mui_ten_xuong.png"
              alt=""
              className="w-auto h-2 mt-[10px] ml-2"
            />
          </div>
          <div className="flex">
            <img
              src="/src/assets/image/icon_user.png"
              alt="Account"
              className="w-[25px]"
            />
            <a href="#" className="text-gray-50 hover:text-white pl-1">
              Account
            </a>
          </div>
          <div className="flex pl-14 relative">
            <div className="absolute w-3 h-3 rounded-full flex justify-center items-center bg-[#F80808] text-white right-[28px] top-[-3px]">
              <p className="text-[6px]">3</p>
            </div>
            <img
              src="/src/assets/image/icon_cart.png"
              alt="Cart"
              className="w-[25px]"
            />
            <a href="#" className="text-gray-50 hover:text-white pl-1">
              Cart
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white w-full max-w-screen-xl mx-auto mb-4"></div>

      <div className="flex justify-center items-center space-x-4">
        <div className="flex items-center space-x-6">
          <Link className="text-gray-50 hover:text-white px-4" to="products">
            Shop
          </Link>
        </div>
        <div className="relative menu-item">
          <a
            href="#"
            className="text-gray-50 hover:text-white px-4 flex justify-center items-end gap-1 "
          >
            Growbox
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="mb-[1px] size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
          <ul className="w-[100px] bg-white text-[#665345] absolute left-4 top-6 z-10 hidden">
            <li className="flex gap-2 justify-start items-center px-2 cursor-pointer">
              <div className="w-1 h-1 rounded-full bg-[#665345] dotted-menu"></div>
              HTML
            </li>
            <li className="flex gap-2 justify-start items-center px-2 cursor-pointer">
              <div className="w-1 h-1 rounded-full bg-[#665345] dotted-menu"></div>
              React
            </li>
            <li className="flex gap-2 justify-start items-center px-2 cursor-pointer">
              <div className="w-1 h-1 rounded-full bg-[#665345] dotted-menu"></div>
              Angular
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-6">
          {categories.map((category) => (
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
