import React from 'react';
import { Form, Input, Button, message, Card, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AddCategory } from '../../services/category';
import { CategoryType } from '../../interfaces/category';

const { Title } = Typography;

const AddCategoryComponent = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values:CategoryType) => {
    try {
      await AddCategory(values);
      message.success('Category added successfully');
      navigate('/dashboard/categories');
    } catch (error) {
      message.error('Failed to add category');
    }
  };

  return (
    <Card>
    <Title level={2}>Add Category</Title>
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          { required: true, message: 'Please input the category name!' },
          { min: 3, message: "Name must be at least 3 characters long." },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Category
        </Button>
      </Form.Item>
    </Form>
  </Card>
  );
};

export default AddCategoryComponent;
