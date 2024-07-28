import React from "react";
import { ProductType } from "../../interfaces/product";
import { Link } from "react-router-dom";

type ProductProps = {
  product: ProductType;
};

const ProductItem = ({ product }: ProductProps) => {
  return (
    <div
      key={product._id}
      className="relative flex flex-col justify-between p-4 rounded-md bg-white group"
    >
        <div className="absolute top-2 left-3 text-[11px] text-white bg-[#1E2832] w-[47px] h-[22px] flex justify-center items-center rounded-md">
          SALE
        </div>


      {/* Product Image */}
      <Link to={`/products/${product._id}`} className="z-10">
        <div className="flex justify-center mb-4 min-h-[250px] items-center">
          <img
            className="w-auto transition-transform duration-500 transform group-hover:scale-110"
            src={product.image}
            alt={product.name}
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="flex flex-col">
        <Link to={`/products/${product._id}`} className="z-10">
          <div className="mb-2 font-bold text-gray-900">
            {product.name}
          </div>
        </Link>
        <div className="flex justify-between text-gray-700">
          <div>{product.categoryId.name}</div>
          <div className="font-semibold">$ {product.price}</div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 transition-opacity rounded-md">
        <div className="flex space-x-2 z-20">
          <img
            src="/src/assets/image/doi.png"
            alt="Icon 1"
            className="w-8 h-8 bg-white cursor-pointer hover:border-2 hover:border-green-700"
          />
          <img
            src="/src/assets/image/Tote.png"
            alt="Icon 2"
            className="w-8 h-8 bg-white cursor-pointer hover:border-2 hover:border-green-700"
          />
          <img
            src="/src/assets/image/tim.png"
            alt="Icon 3"
            className="w-8 h-8 bg-white cursor-pointer hover:border-2 hover:border-green-700"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
