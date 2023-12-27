import { Layout, Card, Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import {  Menu, Button } from 'antd';
import {
  UserOutlined,
  ShoppingOutlined,
  SafetyCertificateOutlined,
  FileTextOutlined,
  
  LogoutOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { notification } from 'antd';

import axios from 'axios';
const { Content, Footer,Sider } = Layout;

const Settings = () => {
  const handleDeleteUser = async () => {
    try {
        const userId = '...'; 
        await axios.delete(`http://localhost:3002/login/${userId}`);
        console.log('User deleted successfully');

        notification.success({
            message: 'User Deleted',
            description: 'Your account has been successfully deleted.',
        });

    } catch (error) {
        console.error('Error deleting user:', error);

        notification.error({
            message: 'Error',
            description: 'An error occurred while deleting your account. Please try again.',
        });
    }
};

  const handleLogout = () => {
    
    console.log('Logging out...');
  };

  return (
    <Layout>
      <Card>
        <Content>
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src="https://cdn.pixabay.com/photo/2018/04/04/12/31/tiger-3289665_640.png" 
            icon={<AntDesignOutlined />}
          />
          <h1>Profile Settings</h1>
          <Sider width={200} theme="light">
        <Menu mode="vertical" style={{ height: '100%' }}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            My Products
          </Menu.Item>
          <Menu.Item key="2" icon={<ShoppingOutlined />}>
            My Cart
          </Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />}>
            User Agreement
          </Menu.Item>
          <Menu.Item key="4" icon={<FileTextOutlined />}>
            Policy
          </Menu.Item>
          <Menu.Item key="5" icon={<SafetyCertificateOutlined />}>
            Two-Step Verification
          </Menu.Item>
          <Menu.Item key="6" icon={<QuestionCircleOutlined />}>
            About
          </Menu.Item>
         
        </Menu>
      </Sider>

        </Content>
        <Layout style={{ padding: '24px' }}>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <Card title="Profile Settings">
            
          </Card>
          <div style={{ marginTop: '16px' }}>
            <Button type="primary" icon={<DeleteOutlined />} onClick={handleDeleteUser}>
              Delete User
            </Button>
            <Button type="default" icon={<LogoutOutlined />} onClick={handleLogout} style={{ marginLeft: '8px' }}>
              Logout
            </Button>
          </div>
        </Content>
      </Layout>
       <Footer>

       </Footer>
      </Card>
    </Layout>
  );
};

export default Settings;
