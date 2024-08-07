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
import SearchResults from "./components/client/searchResult";
import SignUp from "./components/client/signup";
import SignIn from "./components/client/signin";
import Notfound from "./components/client/notfound";
import ProtectedRoute from "./components/protectedRouter";
import { AuthProvider } from "./contexts/AuthContext";
import Message from "./components/message";
import Cart from "./components/client/cart";

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
        { path: "signup", element: <SignUp /> },
        { path: "signin", element: <SignIn /> },
        { path: "products", element: <Products products={products} /> },
        { path: "products/:id", element: <Detail /> },
        {
          path: "products/category/:categoryId",
          element: <ProductList products={products} />,
        },
        { path: "search", element: <SearchResults products={products} /> },
        { path: "cart", element: <Cart /> },
      ],
    },
    {
      path: "dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
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
    { path: "message", Component: Message },
    { path: "*", element: <Notfound /> },
  ]);

  return <AuthProvider>{routes}</AuthProvider>;
}

export default App;
