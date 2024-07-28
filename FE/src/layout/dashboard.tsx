import React from 'react';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const Dashboard = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header className="header flex items-center ml-[-20px]" style={{ backgroundColor: '#001529' }}>
      <div className="logo" />
      <Title level={3} style={{ color: 'white' }}>Admin Dashboard</Title>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="products">Products</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<LaptopOutlined />}>
            <Link to="categories">Categories</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default Dashboard;
