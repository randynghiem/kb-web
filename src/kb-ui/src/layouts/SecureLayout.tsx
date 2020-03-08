import './SecureLayout.css';
import React from "react";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import {
    CarryOutOutlined,
    HomeOutlined,
    SettingOutlined,
    YoutubeOutlined,
    CommentOutlined,
    ReadOutlined,
    LoginOutlined,
    UserOutlined
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

class SecureLayout extends React.Component {
    state = {
        collapsed: true,
        logoText: "DEU"
    };

    onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed, logoText: collapsed ? "DEU" : "DEUTSCH LERNEN" });

    }

    render() {
        return (
            <Layout className="secure-layout">
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo">{this.state.logoText}</div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode='inline'>
                        <Menu.Item key="1">
                            <HomeOutlined />
                            <span>Home</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <CarryOutOutlined />
                            <span>Tasks</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <YoutubeOutlined />
                            <span>YouTube Search</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <CommentOutlined />
                            <span>Chat</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <ReadOutlined />
                            <span>Notes</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <SettingOutlined />
                            <span>Settings</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="layout-header">
                        <Avatar className="header-item" icon={<UserOutlined /> } />
                    </Header>
                    <Content className="layout-content">
                        {this.props.children}
                    </Content>
                    <Footer className="layout-footer">
                        &copy;2020 Developed by Randy Nghiem
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default SecureLayout;