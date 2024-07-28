import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import Home from "./components/client/home";
import Detail from "./components/client/detail";
import Dashboard from "./layout/dashboard";
import Products from "./components/client/products";
import Client from "./layout/client";
import { GetAllProduct } from "./services/product";
import ListProduct from "./components/dashboard/ListProduct";
import AddProduct from "./components/dashboard/AddProduct";
import UpdateProduct from "./components/dashboard/UpdateProduct";
import ListCategory from "./components/dashboard/ListCategory";
import AddCategory from "./components/dashboard/AddCategory";
import UpdateCategory from "./components/dashboard/UpdateCategory";
import { ProductType } from "./interfaces/product";
import ProductList from "./components/client/productsBycategory";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetAllProduct();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Data is not an array", data);
        }
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchData();
  }, []);

  const routes = useRoutes([
    {
      path: "",
      element: <Client />,
      children: [
        { path: "/", element: <Home products={products} /> },
        { path: "products", element: <Products products={products} /> },
        { path: "products/:id", element: <Detail /> },
        { path: "products/category/:categoryId", element: <ProductList/> },
      ],
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        { path: "", element: <ListProduct /> },
        { path: "products", element: <ListProduct /> },
        { path: "products/add", element: <AddProduct /> },
        { path: "products/update/:id", element: <UpdateProduct /> },
        { path: "categories", element: <ListCategory /> },
        { path: "categories/add", element: <AddCategory /> },
        { path: "categories/update/:id", element: <UpdateCategory /> },
      ],
    },
  ]);

  return routes;
}

export default App;
