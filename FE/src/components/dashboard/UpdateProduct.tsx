import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, message, Card, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { GetProductByID, UpdateProduct } from "../../services/product";
import { GetAllCategory } from "../../services/category";
import { ProductType } from "../../interfaces/product";
import { CategoryType } from "../../interfaces/category";

const { Option } = Select;
const { Title } = Typography;

const UpdateProductComponent = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    fetchCategories();
    if (id) fetchProduct(id);
  }, [id]);

  const fetchCategories = async () => {
    try {
      const data = await GetAllCategory();
      setCategories(data);
    } catch (error) {
      message.error("Failed to fetch categories");
    }
  };

  const fetchProduct = async (productId: string) => {
    try {
      const data = await GetProductByID(productId);
      form.setFieldsValue({
        ...data,
        categoryId: data.categoryId._id,
      });
    } catch (error) {
      message.error("Failed to fetch product");
    }
  };

  const onFinish = async (values: ProductType) => {
    try {
      if (id) {
        await UpdateProduct(id, values);
        message.success("Product updated successfully");
        navigate("/dashboard/products");
      }
    } catch (error) {
      message.error("Failed to update product");
    }
  };

  return (
    <Card>
      <Title level={2}>Update Product</Title>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            { required: true, message: "Please input the product name!" },
            { min: 3, message: "Name must be at least 3 characters long." },
          ]}
        >
          <Input autoComplete="on" />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image"
          rules={[
            { required: true, message: "Please input the product image!" },
          ]}
        >
          <Input autoComplete="on" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: "Please input the product description!" },
          ]}
        >
          <Input autoComplete="on" />
        </Form.Item>
        <Form.Item
          name="about"
          label="About"
          rules={[
            { required: true, message: "Please input the product about!" },
          ]}
        >
          <Input autoComplete="on" />
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
          <Select>
            {categories.map((category: CategoryType) => (
              <Option key={category._id} value={category._id}>
                {category.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Product
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UpdateProductComponent;
