import React, { useState, useEffect } from "react";
import { Table, Button, message, Popconfirm, Card, Typography } from "antd";
import { Link } from "react-router-dom";
import { GetAllCategory, DeleteCategory } from "../../services/category";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { CategoryType } from "../../interfaces/category";

const { Title } = Typography;

const ListCategory = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await GetAllCategory();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      message.error("Failed to fetch categories");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await DeleteCategory(id);
      message.success("Category deleted and products reassigned");

      // Tải lại danh mục
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
      message.error("Failed to delete category");
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Actions",
      key: "actions",
      render: (text: string, record: CategoryType) => (
        <>
          {record._id !== "66a775db0a0df019f00cd713" && (
            <>
              <Link to={`/dashboard/categories/update/${record._id}`}>
                <Button icon={<EditOutlined />} style={{ marginRight: 8 }} />
              </Link>
              <Popconfirm
                title="Are you sure to delete this category?"
                onConfirm={() => handleDelete(record._id as string)}
                okText="Yes"
                cancelText="No"
              >
                <Button icon={<DeleteOutlined />} />
              </Popconfirm>
            </>
          )}
        </>
      ),
    },
  ];

  return (
    <Card>
      <Title level={2}>Category List</Title>
      <Link to="/dashboard/categories/add">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ marginBottom: 16 }}
        >
          Add Category
        </Button>
      </Link>
      <Table columns={columns} dataSource={categories} rowKey="_id" />
    </Card>
  );
};

export default ListCategory;
