import React, { useEffect, useState } from "react";
import { ProductType } from "../../interfaces/product";
import ProductItem from "../client/productItem";
import { CategoryType } from "../../interfaces/category";
import { GetAllCategory } from "../../services/category";

type Props = { products: ProductType[] };
const Products = ({ products }: Props) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await GetAllCategory();
        setCategories(data);
      } catch (error) {
        console.error("Không thể tải danh mục");
      }
    };
    fetchCategories();
  }, []);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCheckboxChange = (categoryId: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(categoryId)
        ? prevSelectedCategories.filter((id) => id !== categoryId)
        : [...prevSelectedCategories, categoryId]
    );
  };

  const filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(product.categoryId._id as any)
      )
    : products;
  return (
    <>
      <div className=" backgound-two">
        <div className="relative bg-gradient-to-r from-[#B5DCB0] to-[#FFFFFF] w-full h-[150px] flex items-center font-bold text-[30px] pl-[150px] text-[#505F4E]">
          Danh sách sản phẩm
        </div>

        <div className="flex items-center justify-center p-10">
          <div className="flex items-center bg-[#D2E8CD] w-[200px] h-[65px] pl-4 pt-2">
            <img
              src="src/assets/image/p1-removebg-preview.png"
              alt=""
              className="mr-2 border-0"
            />
            <p>Chậu vuông</p>
          </div>

          <div className="flex items-center ml-24 bg-[#D2E8CD] w-[200px] h-[65px] pl-4 pt-2 ">
            <img
              src="src/assets/image/p2-removebg-preview.png"
              alt=""
              className="mr-2 border-0"
            />
            <p>Chậu tròn</p>
          </div>

          <div className="flex items-center ml-24 bg-[#D2E8CD] w-[200px] h-[65px] pl-4 pt-2">
            <img
              src="src/assets/image/p3.png"
              alt=""
              className="mr-2 border-0"
            />
            <p>Đế chậu</p>
          </div>

          <div className="flex items-center ml-24 bg-[#D2E8CD] w-[200px] h-[65px] pl-4 pt-2">
            <img
              src="src/assets/image/p4-removebg-preview.png"
              alt=""
              className="mr-2 border-0"
            />
            <p>Đĩa cây</p>
          </div>
        </div>

        <div className="flex mb-10">
          <div className="ml-[140px]">
            Sắp xếp theo:
            <input
              type="text"
              placeholder="Mới nhất"
              className="border-2 w-[200px] h-[40px] rounded-lg pl-5 ml-5 bg-transparent"
            />
          </div>
          <div className="ml-20">
            Hiển thị:
            <input
              type="text"
              placeholder="Mặc định"
              className="border-2 w-[200px] h-[40px] rounded-lg pl-5 ml-5 bg-transparent"
            />
          </div>
        </div>

        <div className="w-[1300px] mx-auto">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-4">
              {/* Phần sản phẩm */}
              <div className="p-4 rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductItem key={product._id} product={product} />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className=" p-4 rounded-md">
                <div>
                  <p className="mb-4 text-[30px] font-bold text-[#505F4E]">
                    Danh mục
                  </p>
                  <div className="mb-2">
                    {categories.map((category) => (
                      <div key={category._id} className="mb-2">
                        <input
                          type="checkbox"
                          id={`checkbox-${category._id}`}
                          className="mr-2"
                          onChange={() =>
                            handleCheckboxChange(category._id as any)
                          }
                        />
                        <label htmlFor={`checkbox-${category._id}`}>
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="relative mb-4">
                    <img
                      src="src/assets/image/bn_r.png"
                      alt=""
                      className="w-auto h-auto filter brightness-50 mt-10"
                    />
                    <div className="absolute top-0 left-0 p-4">
                      <p className="text-white text-lg font-bold mb-1">
                        Tự trồng
                      </p>
                      <p className="text-white">cây yêu thích của bạn</p>
                    </div>
                  </div>

                  <p className=" text-[#333333] font-bold">Lọc theo giá</p>
                  <img src="src/assets/image/p.png" alt="" />
                  <p className="text-[#1E1E1E]">Từ $0 đến $8000</p>
                  <p className="text-[#333333] font-bold mt-5">
                    Lọc theo kích thước
                  </p>
                  <img src="src/assets/image/p.png" alt="" />
                  <p className="text-[#1E1E1E]">2 mm x 50</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-10 pl-[100px] pb-10">
          <div className="w-2/5 p-4 pl-[200px]">
            <p className="text-[40px] font-bold text-[#505F4E]">
              Đăng ký nhận tin*
            </p>
            <p className="text-[40px] font-bold text-[#505F4E]">
              _ Bản tin của chúng tôi
            </p>
            <div className="pl-[90px] mt-10 text-[#555555]">
              <span className="text-[14px]">
                Nhận cập nhật hàng tuần về sản phẩm của chúng tôi <br /> qua
                email, không spam <br />
                đảm bảo chúng tôi hứa ✌️
              </span>
            </div>
          </div>

          <div className="relative mt-[185px] mb-12">
            <input
              type="text"
              placeholder="youremail123@gmail.com"
              className="p-2 border border-gray-300 mb-2 w-[508px] h-[62px]"
            />
            <button className="absolute top-0 right-0 mt-8 p-2 bg-[#656C66] text-white w-[180px] h-[56px]">
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
