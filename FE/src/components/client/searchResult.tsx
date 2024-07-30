import { ProductType } from "../../interfaces/product";
import ProductItem from "../client/productItem";
import { useSearchParams } from "react-router-dom";

type Props = { products: ProductType[] };
const SearchResults = ({ products }: Props) => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className=" backgound-two">
        <div className="relative bg-gradient-to-r from-[#B5DCB0] to-[#FFFFFF] w-full h-[150px] flex items-center font-bold text-[30px] pl-[150px] text-[#505F4E] gap-2">
          <span>Search Results</span>
        </div>
        {/* 
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
            <img
              src="/src/assets/image/p3.png"
              alt=""
              className="mr-2 border-0"
            />
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
        </div> */}

        <div className="w-[1300px] mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4">
              {/* Display products */}
              <div className="p-4 rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <ProductItem key={product._id} product={product} />
                    ))
                  ) : (
                    <p className="text-xl font-bold text-[#505F4E]">
                      Không tìm thấy sản phẩm !
                    </p>
                  )}
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
                Get weekly update about our <br /> product on your email, no
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
    </>
  );
};

export default SearchResults;
