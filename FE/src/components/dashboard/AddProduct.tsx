import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, message, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { AddProduct } from "../../services/product";
import { GetAllCategory } from "../../services/category";
import { ProductType } from "../../interfaces/product";
import { CategoryType } from "../../interfaces/category";

const { Title } = Typography;

const AddProductComponent = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await GetAllCategory();
        setCategories(data);
      } catch (error) {
        message.error("Failed to fetch categories");
      }
    })();
  }, []);
  const onFinish = async (values: ProductType) => {
    try {
      console.log("Form values:", values);
      if (!values.categoryId) {
        message.error("Category is required");
        return;
      }
      await AddProduct(values);
      message.success("Product added successfully");
      navigate("/dashboard/products");
    } catch (error) {
      // Hiển thị thông báo lỗi chi tiết
      message.error("Failed to add product: " + (error as Error).message);
    }
  };

  return (
    <Card>
      <Title level={2}>Add Product</Title>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            { required: true, message: "Please input the product name!" },
            { min: 3, message: "Name must be at least 3 characters long." },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image"
          rules={[
            { required: true, message: "Please input the product image!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              validator: (_, value) => {
                // Kiểm tra nếu giá trị nhập vào là trống
                if (value === undefined || value === null || value === "") {
                  return Promise.reject(
                    new Error("Please input the product price!")
                  );
                }

                // Kiểm tra nếu giá trị nhập vào là số
                if (isNaN(value)) {
                  return Promise.reject(new Error("Price must be a number."));
                }

                // Kiểm tra nếu giá trị nhỏ hơn 0
                if (Number(value) < 0) {
                  return Promise.reject(
                    new Error("Price must be a non-negative number.")
                  );
                }

                // Nếu tất cả các kiểm tra đều qua, trả về thành công
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input type="text" step="0.01" />
        </Form.Item>

        <Form.Item
          name="categoryId"
          label="Category"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select
            options={categories.map((category) => ({
              label: category.name,
              value: category._id,
            }))}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddProductComponent;
