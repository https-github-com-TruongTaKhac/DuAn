import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../../interfaces/product";
import { GetProductByID } from "../../services/product";

const Detail = () => {
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  const param = useParams();
  console.log(param);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await GetProductByID(param.id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [param.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="backgound-two">
        <div className="px-[200px] w-full">
          <div className="flex mt-[100px] gap-6">
            <div className="flex-1 space-y-12 justify-center items-center flex-col flex">
              <img src={product.image} alt="" width={355} />
              <div className="flex justify-center items-center gap-6">
                <img src={product.image} alt="" width={106} />
                <img src={product.image} alt="" width={106} />
                <img src={product.image} alt="" width={106} />
              </div>
            </div>
            <div className="flex-1 flex flex-col space-y-4">
              <p className="text-[#4E7C32] font-bold">PLANT</p>
              <span className="text-[#1D2025] font-bold text-[44px]">
                {product.name}
              </span>
              <span className="text-[#68707D] text-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </span>
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-[#1D2025] font-bold text-[30px]">
                    $ {product.price}
                  </span>
                  <span className="w-[50px] h-[28px] bg-[#FFEDE0] flex justify-center items-center font-bold text-[14px] text-[#505F4E] rounded-md">
                    50%
                  </span>
                </div>
                <span className="text-[16px] font-bold text-[#1D2025] line-through block">
                  $250.00
                </span>
                <div className="flex items-center space-x-4 pt-2">
                  <div className="w-[157px] h-[55px] bg-[#F7F8FD] flex justify-evenly items-center space-x-2">
                    <span className="text-[#505F4E] font-bold cursor-pointer ">
                      -
                    </span>
                    <span className="text-[16px] font-bold">3</span>
                    <span className="text-[#505F4E] font-bold cursor-pointer">
                      +
                    </span>
                  </div>
                  <div className="w-[273px] h-[55px] bg-[#4E7C32] flex justify-center items-center gap-4 rounded-lg hover:opacity-80 cursor-pointer">
                    <img src="/src/assets/image/icon-cart 2.png" alt="" />
                    <p className="text-[16px] font-bold text-white">
                      Add to cart
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <p className="text-[#4E7C32] text-[30px] mt-10">Description</p>
              <span className="text-[#665345]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the <br />
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of <br />
                type and scrambled it.
              </span>
            </div>
            <div>
              <p className="text-[#4E7C32] text-[30px] mt-10">About</p>
              <span className="text-[#665345]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the <br />
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of <br />
                type and scrambled it.
              </span>
            </div>
          </div>

          <div className="flex mx-auto mt-10">
            <div className="w-2/3 flex items-center space-x-8 ml-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-[200px] h-[250px]"
              />
              <div className="flex flex-col items-center">
                <img
                  src="/src/assets/image/sao.png"
                  alt="Rating"
                  className="mb-2"
                />
                <p className="text-[#4E7C32] text-[33px] flex justify-center items-center">
                  5.0{" "}
                  <span className="text-[#665345] text-[16px] ml-2">(388)</span>
                </p>
              </div>
            </div>

            <div className="bg-[#4E7C32] w-[118px] h-[33px] flex items-center justify-center text-white rounded-xl cursor-pointer hover:opacity-80">
              Write reviews
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center space-x-2 ">
              1{" "}
              <img
                src="/src/assets/image/saol.png"
                alt="Star"
                className="ml-2"
              />
              <img src="/src/assets/image/t1.png" alt="Type 1" />
              <p>(388)</p>
            </div>
            <div className="flex items-center space-x-2">
              2{" "}
              <img
                src="/src/assets/image/saol.png"
                alt="Star"
                className="ml-2"
              />
              <img src="/src/assets/image/t2.png" alt="Type 2" />
            </div>
            <div className="flex items-center space-x-2">
              3{" "}
              <img
                src="/src/assets/image/saol.png"
                alt="Star"
                className="ml-2"
              />
              <img src="/src/assets/image/t2.png" alt="Type 2" />
            </div>
            <div className="flex items-center space-x-2">
              4{" "}
              <img
                src="/src/assets/image/saol.png"
                alt="Star"
                className="ml-2"
              />
              <img src="/src/assets/image/t2.png" alt="Type 2" />
            </div>
            <div className="flex items-center space-x-2">
              5{" "}
              <img
                src="/src/assets/image/saol.png"
                alt="Star"
                className="ml-2"
              />
              <img src="/src/assets/image/t2.png" alt="Type 2" />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-4 mt-10">
            <div className="flex items-end">
              <div className="mt-[30px]">
                <div className="flex items-center space-x-2">
                  <p className="text-[#4E7C32] text-[16px]">Aman Gupta</p>
                  <img
                    src="/src/assets/image/sao.png"
                    alt="Rating"
                    className="pl-10 h-3"
                  />
                </div>
                <span className="text-[#665345]  text-[11px]">
                  I've been using this cleanser for about five or six months now
                  and my acne
                  <br />
                  is almost completely gone. I really struggled for years with
                  my skin and tried
                  <br />
                  everything possible but this is the only thing that managed to
                  clear up my
                  <br />
                  skin. 100% recommend and will continue to use it for sure.
                </span>
              </div>
            </div>
            <div>
              <div>
                <div className="mt-[30px]">
                  <div className="flex items-center space-x-2">
                    <p className="text-[#4E7C32] text-[16px]">Aman Gupta</p>
                    <img
                      src="/src/assets/image/sao.png"
                      alt="Rating"
                      className="pl-10 h-3"
                    />
                  </div>
                  <span className="text-[#665345]  text-[11px]">
                    I've been using this cleanser for about five or six months
                    now and my acne
                    <br />
                    is almost completely gone. I really struggled for years with
                    my skin and tried
                    <br />
                    everything possible but this is the only thing that managed
                    to clear up my
                    <br />
                    skin. 100% recommend and will continue to use it for sure.
                  </span>
                </div>
              </div>
              <div>
                <div className="mt-[30px]">
                  <div className="flex items-center space-x-2">
                    <p className="text-[#4E7C32] text-[16px]">Aman Gupta</p>
                    <img
                      src="/src/assets/image/sao.png"
                      alt="Rating"
                      className="pl-10 h-3"
                    />
                  </div>
                  <span className="text-[#665345]  text-[11px]">
                    I've been using this cleanser for about five or six months
                    now and my acne
                    <br />
                    is almost completely gone. I really struggled for years with
                    my skin and tried
                    <br />
                    everything possible but this is the only thing that managed
                    to clear up my
                    <br />
                    skin. 100% recommend and will continue to use it for sure.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10">
            <button className="bg-[#4E7C32] w-[60px] h-[20px] rounded-lg text-white text-[12px]">
              See All
            </button>
          </div>

          <div className="flex mt-10 pb-10 justify-center items-center">
            <div className="w-2/5 p-4">
              <p className="text-[40px] font-bold text-[#505F4E]">
                Etwas abonnieren*
              </p>
              <p className="text-[40px] font-bold text-[#505F4E]">
                _ Unser Newsletter
              </p>
              <div className="pl-[90px] mt-10 text-[#555555]">
                <span className="text-[14px]">
                  Get weekly updates about our <br /> products via email, no
                  spam <br />
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
      </div>
    </>
  );
};

export default Detail;
