import { useEffect } from "react";
import { Form, Input, Button, message, Card, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { GetCategoryByID, UpdateCategory } from "../../services/category";
import { CategoryType } from "../../interfaces/category";

const { Title } = Typography;

const UpdateCategoryComponent = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const data = await GetCategoryByID(id);
      form.setFieldsValue(data.category);
    } catch (error) {
      message.error("Failed to fetch category");
    }
  };

  const onFinish = async (values: CategoryType) => {
    try {
      await UpdateCategory(values, id);
      message.success("Category updated successfully");
      navigate("/dashboard/categories");
    } catch (error) {
      message.error("Failed to update category");
    }
  };

  return (
    <Card>
      <Title level={2}>Update Category</Title>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            { required: true, message: "Please input the category name!" },
            { min: 3, message: "Name must be at least 3 characters long." },
          ]}
        >
          <Input autoComplete="on" />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image"
          rules={[
            { required: true, message: "Please input the category image!" },
          ]}
        >
          <Input autoComplete="on" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Category
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UpdateCategoryComponent;
