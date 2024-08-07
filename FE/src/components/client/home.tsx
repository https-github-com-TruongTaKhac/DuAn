import { useEffect, useState } from "react";
import { ProductType } from "../../interfaces/product";
import ProductItem from "../client/productItem";
import { HashLink as Link } from "react-router-hash-link";
import { GetAllCategory } from "../../services/category";
import { GetProductsByCategory } from "../../services/product";

type Props = {
  products: ProductType[];
};
interface CategoryWithProducts {
  id: string | undefined;
  name: string;
  productCount: number;
  image: string;
}
const Home = ({ products }: Props) => {
  if (!products) {
    return <div>Đang tải...</div>;
  }
  const [categoriesWithProductCounts, setCategoriesWithProductCounts] =
    useState<CategoryWithProducts[]>([]);

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const categories = await GetAllCategory();
        const data = await Promise.all(
          categories.map(async (category) => {
            const products = await GetProductsByCategory(category._id);
            return {
              id: category._id,
              name: category.name,
              productCount: products.length,
              image: category.image,
            };
          })
        );
        setCategoriesWithProductCounts(data);
      } catch (error) {
        console.error("Lỗi khi lấy danh mục hoặc sản phẩm:", error);
      }
    };

    fetchCategoriesAndProducts();
  }, []);
  return (
    <>
      <div className="backgound-one">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#B5DCB0] to-[#FFFFFF] w-full h-[600px] flex items-center">
          <img
            src="/src/assets/image/banner.png"
            alt=""
            className="absolute right-0 h-full w-auto object-cover"
          />
          <div className="absolute left-10 top-1/4 text-[#505F4E] z-10 ml-[120px]">
            <div className="mb-4">
              <p className="text-[55px] font-bold">Chúng tôi chăm sóc cho</p>
              <p className="text-[55px] font-bold">vườn và nhà của bạn</p>
            </div>
            <div className="mb-8">
              <p className="text-[15px]">
                Lorem Ipsum chỉ là văn bản giả định của ngành in ấn và
              </p>
              <p className="text-[15px]">
                ngành chế bản. Lorem Ipsum đã là văn bản giả định của ngành
              </p>
              <p className="text-[15px]">kể từ thế kỷ 1500,</p>
            </div>
            <button className="px-6 py-3 border-2 border-[#505F4E] text-[#505F4E] rounded w-[200px] transition-transform transform hover:scale-110 cursor-pointer duration-500">
              Tìm hiểu thêm
            </button>
          </div>
        </div>

        <div className="text-[30px] font-baloo font-bold text-[#505F4E] ml-20 mt-20 mb-20">
          Sản phẩm bán chạy
        </div>

        <div className="bg-white pb-12">
          <div className="container mx-auto w-[1250px] pt-14">
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-[1000px] mx-auto mt-10">
          <div className="relative overflow-hidden w-1/2 h-auto">
            <img
              src="/src/assets/image/banner1.png"
              alt="Banner 1"
              className="w-full h-full object-cover transition-transform transform hover:scale-110 cursor-pointer duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent h-[70px] mt-10">
              <p className="absolute left-4 top-4 text-black font-bold text-[25px] ml-5">
                Cái xẻng vườn
              </p>
            </div>
          </div>
          <div className="w-1/2 grid grid-cols-2 gap-4 ml-4">
            <div className="relative overflow-hidden h-auto">
              <img
                src="/src/assets/image/banner2.png"
                alt="Banner 2"
                className="w-full h-full object-cover transition-transform transform hover:scale-110 cursor-pointer duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent h-[60px] mt-6">
                <p className="absolute left-4 top-4 text-black font-bold text-[25px]">
                  Cát
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden h-auto">
              <img
                src="/src/assets/image/banner4.png"
                alt="Banner 3"
                className="w-full h-full object-cover transition-transform transform hover:scale-110 cursor-pointer duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent h-[60px] mt-6">
                <p className="absolute left-4 top-4 text-black font-bold text-[25px]">
                  Cây trồng
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden h-auto">
              <img
                src="/src/assets/image/banner3.png"
                alt="Banner 4"
                className="w-full h-full object-cover transition-transform transform hover:scale-110 cursor-pointer duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent h-[60px] mt-6">
                <p className="absolute left-4 top-4 text-black font-bold text-[25px]">
                  Bánh bùn
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden h-auto">
              <img
                src="/src/assets/image/banner5.png"
                alt="Banner 5"
                className="w-full h-full object-cover transition-transform transform hover:scale-110 cursor-pointer duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent h-[60px] mt-6">
                <p className="absolute left-4 top-4 text-black font-bold text-[25px]">
                  Kẹp
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[30px] font-baloo font-bold text-[#505F4E] ml-20 mt-20 mb-20">
          Danh mục
        </div>
        <hr />

        <div className="grid grid-cols-4 gap-4 w-[1400px] mx-auto mt-10">
          {categoriesWithProductCounts.map((category, index) => (
            <div className="h-auto relative overflow-hidden group rounded-sm cursor-pointer">
              <Link
                key={index}
                smooth
                to={`/products/category/${category.id}#top`}
                className=""
              >
                <div>
                  <img
                    src={category.image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute right-6 top-6">
                    <p className=" text-white font-bold text-[18px]">
                      {category.name}
                    </p>
                    <p className=" text-white text-[16px]">
                      {category.productCount} Sản phẩm
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
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
                email của bạn, không spam <br />
                chúng tôi đảm bảo ✌️
              </span>
            </div>
          </div>

          <div className="relative mt-[185px] mb-12">
            <input
              type="text"
              placeholder="youremail123@gmail.com"
              className="p-2 border border-gray-300 mb-2 w-[508px] h-[62px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#656C66]"
            />
            <button className="absolute top-0 right-0 mt-8 bg-[#656C66] text-white w-[180px] h-[56px] flex justify-center items-center">
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
