import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  message,
  Popconfirm,
  Card,
  Typography,
  Image,
} from "antd";
import { Link } from "react-router-dom";
import { GetAllProduct, DeleteProduct } from "../../services/product";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { ProductType } from "../../interfaces/product";

const { Title } = Typography;

const ListProduct = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await GetAllProduct();
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        message.error("Data is not an array");
      }
    } catch (error) {
      message.error("Failed to fetch products");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await DeleteProduct(id);
      message.success("Product deleted");
      fetchProducts();
    } catch (error) {
      message.error("Failed to delete product");
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <Image width={100} src={image} alt="Product" />
      ),
    },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Category",
      dataIndex: "categoryId",
      key: "categoryId",
      render: (categoryId: any) => (categoryId ? categoryId.name : "Unknown"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: string, record: ProductType) => (
        <>
          <Link to={`/dashboard/products/update/${record._id}`}>
            <Button icon={<EditOutlined />} style={{ marginRight: 8 }} />
          </Link>
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => handleDelete(record._id as string)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <Card>
      <Title level={2}>Product List</Title>
      <Link to="/dashboard/products/add">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ marginBottom: 16 }}
        >
          Add Product
        </Button>
      </Link>
      <Table columns={columns} dataSource={products} rowKey="_id" />
    </Card>
  );
};

export default ListProduct;
