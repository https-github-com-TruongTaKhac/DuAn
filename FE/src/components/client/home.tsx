import React from "react";
import { ProductType } from "../../interfaces/product";
import ProductItem from "../client/productItem";

type Props = {
  products: ProductType[];
}; 

const Home = ({ products }: Props) => {
  if (!products) {
    return <div>Loading...</div>;
  }

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
            <p className="text-[55px] font-bold">Wir kümmern uns um Ihre</p>
            <p className="text-[55px] font-bold">schöner Garten und Haus</p>
          </div>
          <div className="mb-8">
            <p className="text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
            <p className="text-[15px]">
              typesetting industry. Lorem Ipsum has been the industry's
            </p>
            <p className="text-[15px]">
              standard dummy text ever since the 1500s,
            </p>
          </div>
          <button className="px-6 py-3 border-2 border-[#505F4E] text-[#505F4E] rounded w-[200px] transition-transform transform hover:scale-110 cursor-pointer duration-500">
            Lern mehr
          </button>
        </div>
      </div>

      <div className="text-[30px] font-baloo font-bold text-[#505F4E] ml-20 mt-20 mb-20">
        Best sellers
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
              Garten Spaten
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
                Sand
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
                Pflanzer
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
                Schlammkuchen
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
                Klemmen
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[30px] font-baloo font-bold text-[#505F4E] ml-20 mt-20 mb-20">
        Kategorien
      </div>
      <hr />

      <div className="grid grid-cols-4 gap-4 w-[1400px] mx-auto mt-10">
        <div className="h-auto relative overflow-hidden group rounded-sm cursor-pointer">
          <img
            src="/src/assets/image/b1.png"
            alt="Image 1"
            className="w-full h-auto object-cover transition-transform transform group-hover:scale-110 duration-500"
          />
         <div className="absolute right-6 top-6">
            <p className=" text-white font-bold text-[18px]">
            Beleuchtung 
            </p>
            <p className=" text-white text-[16px]">20 Items</p>
          </div>
        </div>
        <div className="h-auto relative overflow-hidden group rounded-sm cursor-pointer">
          <img
            src="/src/assets/image/b2.png"
            alt="Image 2"
            className="w-full h-auto object-cover transition-transform transform group-hover:scale-110 duration-500"
          />
          <div className="absolute right-6 top-6">
            <p className=" text-white font-bold text-[18px]">
              Dünger 
            </p>
            <p className=" text-white text-[16px]">20 Items</p>
          </div>
        </div>
        <div className="h-auto relative overflow-hidden group rounded-sm cursor-pointer">
          <img
            src="/src/assets/image/b3.png"
            alt="Image 3"
            className="w-full h-auto object-cover transition-transform transform group-hover:scale-110 duration-500"
          />
          <div className="absolute right-6 top-6">
            <p className=" text-white font-bold text-[18px]">
            Erde & Substrate 
            </p>
            <p className=" text-white text-[16px]">20 Items</p>
          </div>
        </div>
        <div className="h-auto relative overflow-hidden group rounded-sm cursor-pointer">
          <img
            src="/src/assets/image/b4.png"
            alt="Image 4"
            className="w-full h-auto object-cover transition-transform transform group-hover:scale-110 duration-500"
          />
         <div className="absolute right-6 top-6">
            <p className=" text-white font-bold text-[18px]">
            Bewässerung 
            </p>
            <p className=" text-white text-[16px]">20 Items</p>
          </div>
        </div>
        <div className="h-auto relative overflow-hidden group rounded-sm cursor-pointer">
          <img
            src="/src/assets/image/b7.png"
            alt="Image 5"
            className="w-full h-auto object-cover transition-transform transform group-hover:scale-110 duration-500"
          />
          <div className="absolute right-6 top-6">
            <p className=" text-white font-bold text-[18px]">
            Töpfe & Behälter 
            </p>
            <p className=" text-white text-[16px]">20 Items</p>
          </div>
        </div>
        <div className="h-auto relative overflow-hidden group rounded-sm cursor-pointer">
          <img
            src="/src/assets/image/b5.png"
            alt="Image 6"
            className="w-full h-auto object-cover transition-transform transform group-hover:scale-110 duration-500"
          />
          <div className="absolute right-6 top-6">
            <p className=" text-white font-bold text-[18px]">
            Growbox 
            </p>
            <p className=" text-white text-[16px]">20 Items</p>
          </div>
        </div>
        <div className="h-auto relative overflow-hidden group rounded-sm cursor-pointer">
          <img
            src="/src/assets/image/b8.png"
            alt="Image 7"
            className="w-full h-auto object-cover transition-transform transform group-hover:scale-110 duration-500"
          />
          <div className="absolute right-6 top-6">
            <p className=" text-white font-bold text-[18px]">
            Pflanzen & Gärtnern 
            </p>
            <p className=" text-white text-[16px]">20 Items</p>
          </div>
        </div>
        <div className="h-auto relative overflow-hidden group rounded-sm cursor-pointer">
          <img
            src="/src/assets/image/b1.png"
            alt="Image 8"
            className="w-full h-auto object-cover transition-transform transform group-hover:scale-110 duration-500"
          />
          <div className="absolute right-6 top-6">
            <p className=" text-white font-bold text-[18px]">
            Lüftung & Klimaanlage 
            </p>
            <p className=" text-white text-[16px]">20 Items</p>
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
            className="p-2 border border-gray-300 mb-2 w-[508px] h-[62px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#656C66]"
          />
          <button className="absolute top-0 right-0 mt-8 bg-[#656C66] text-white w-[180px] h-[56px] flex justify-center items-center">
            ABONNIEREN
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
