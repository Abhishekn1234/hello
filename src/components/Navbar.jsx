
import React from 'react';
import { Button, Layout, Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { DownOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import LocationPicker from './LocationPicker';

const { Header } = Layout;

const MyNavbar = () => {
  const navigate = useNavigate();

  const Login = () => {
    navigate('/login');
  };

  const SignUp = () => {
    navigate('/register');
  };

  const handleProductClick = ({ key }) => {
    console.log('Selected Product:', key);
  };

  const productMenu = (
    <Menu onClick={handleProductClick}>
      <Menu.Item key="product1">Hospital Management System</Menu.Item>
      <Menu.Item key="product2">Medical Resources</Menu.Item>
      <Menu.Item key="product3">Business Hospital Management System</Menu.Item>
     
    </Menu>
  );

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />

        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['10']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/department">Department</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Dropdown overlay={productMenu}>
              <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                Products <DownOutlined />
              </a>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/services">Services</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/news">News</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <PhoneOutlined /> Call
            <a href="tel:+123456789"></a>
          </Menu.Item>
          <Menu.Item key="7">
            <MailOutlined /> Email
            <a href="mailto:your-email@example.com"></a>
          </Menu.Item>
          <Menu.Item key="8">
            <LocationPicker />
          </Menu.Item>
          <Menu.Item key="9">
            <Button className="btn btn-danger" onClick={Login} style={{margin:"20px"}}>
              Log in
            </Button>
          </Menu.Item>
          <Menu.Item key="10">
            <Button className="btn btn-success" onClick={SignUp}>
              Sign Up
            </Button>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default MyNavbar;
