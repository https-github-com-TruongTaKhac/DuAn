import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProductsByCategory } from "../../services/product";
import ProductItem from "../client/productItem";
import { ProductType } from "../../interfaces/product";

const ProductsByCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>(); // Lấy categoryId từ URL
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        if (categoryId) {
          const data = await GetProductsByCategory(categoryId);
          setProducts(data);
        } else {
          setProducts([]); // Nếu không có categoryId, đặt sản phẩm thành rỗng
        }
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]); // Fetch products khi categoryId thay đổi

  return (
    <>
     <div className=" backgound-two">
      <div className="relative bg-gradient-to-r from-[#B5DCB0] to-[#FFFFFF] w-full h-[150px] flex items-center font-bold text-[30px] pl-[150px] text-[#505F4E]">
        Töpfe & Behälter
      </div>

      <div className="flex items-center justify-center p-10"> 
        <div className="flex items-center bg-[#D2E8CD] w-[200px] h-[65px] pl-4 pt-2">
          <img
            src="/src/assets/image/p1-removebg-preview.png"
            alt=""
            className="mr-2 border-0"
          />
          <p>Eckige Töpfe</p>
        </div>

        <div className="flex items-center ml-24 bg-[#D2E8CD] w-[200px] h-[65px] pl-4 pt-2 ">
          <img
            src="/src/assets/image/p2-removebg-preview.png"
            alt=""
            className="mr-2 border-0"
          />
          <p>Runde Töpfe</p>
        </div>

        <div className="flex items-center ml-24 bg-[#D2E8CD] w-[200px] h-[65px] pl-4 pt-2">
          <img src="/src/assets/image/p3.png" alt="" className="mr-2 border-0" />
          <p>Untersetzer</p>
        </div>

        <div className="flex items-center ml-24 bg-[#D2E8CD] w-[200px] h-[65px] pl-4 pt-2">
          <img
            src="/src/assets/image/p4-removebg-preview.png"
            alt=""
            className="mr-2 border-0"
          />
          <p>Pflanzschalen</p>
        </div>
      </div>

      <div className="flex mb-10">
        <div className="ml-[140px]">
          Sort By:
          <input
            type="text"
            placeholder="Newest"
            className="border-2 w-[200px] h-[40px] rounded-lg pl-5 ml-5 bg-transparent"
          />
        </div>
        <div className="ml-20">
          Show:
          <input
            type="text"
            placeholder="Default"
            className="border-2 w-[200px] h-[40px] rounded-lg pl-5 ml-5 bg-transparent"
          />
        </div>
      </div>

        <div className="w-[1300px] mx-auto">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-4">
              {/* Display products */}
              <div className="p-4 rounded-md">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {products.length > 0 ? (
                      products.map((product) => (
                        <ProductItem key={product._id} product={product} />
                      ))
                    ) : (
                      <p>No products found</p>
                    )}
                  </div>
                )}
              </div>
            </div>

           
          <div className="col-span-1">
            <div className=" p-4 rounded-md">
              <div>
                <p className="mb-4 text-[30px] font-bold text-[#505F4E]">
                  Kategorien
                </p>
                <div className="mb-2">
                  <input type="checkbox" id="checkbox1" className="mr-2" />
                  <label htmlFor="checkbox1">Eckige Töpfe</label>
                </div>
                <div className="mb-2">
                  <input type="checkbox" id="checkbox2" className="mr-2" />
                  <label htmlFor="checkbox2">Runde Töpfe</label>
                </div>
                <div className="mb-2">
                  <input type="checkbox" id="checkbox3" className="mr-2" />
                  <label htmlFor="checkbox3">Untersetzer</label>
                </div>
                <div className="mb-2">
                  <input type="checkbox" id="checkbox4" className="mr-2" />
                  <label htmlFor="checkbox4">Pflanzschalen</label>
                </div>

                <div className="relative mb-4">
                  <img
                    src="/src/assets/image/bn_r.png"
                    alt=""
                    className="w-auto h-auto filter brightness-50 mt-10"
                  />
                  <div className="absolute top-0 left-0 p-4">
                    <p className="text-white text-lg font-bold mb-1">
                      Grow your own
                    </p>
                    <p className="text-white">favourite plant</p>
                  </div>
                </div>

                <p className=" text-[#333333] font-bold">Filter By Price</p>
                <img src="/src/assets/image/p.png" alt="" />
                <p className="text-[#1E1E1E]">From $0 to $8000</p>
                <p className="text-[#333333] font-bold mt-5">Filter By Size</p>
                <img src="/src/assets/image/p.png" alt="" />
                <p className="text-[#1E1E1E]">2 mm by 50</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-10 pl-[100px] pb-10">
        <div className="w-2/5 p-4 pl-[200px]">
          <p className="text-[40px] font-bold text-[#505F4E]">
            Etwas abonnieren*
          </p>
          <p className="text-[40px] font-bold text-[#505F4E]">
            _ Unser Newsletter
          </p>
          <div className="pl-[90px] mt-10 text-[#555555]">
            <span className="text-[14px]">
              Get weekly update about our <br /> product on your email, no spam{" "}
              <br />
              guaranteed we promise ✌️
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
            ABONNIEREN
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProductsByCategory;
