import React, { Component } from "react";
import "./Login.css";
import { Form, Input, Button, Checkbox, Modal, Avatar } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import img from "../Assets/frog.png";

export default class Login extends Component {
  state = {
    user: {
      username: "student000",
      password: "123456",
      remember: false,
    },
    teach:{
      username: "teacher000",
      password: "123456",
      remember: false,
    },
    user_nm: "",
    user_pw: "",
    visible: false,
    input_clear: false,
  };
  Warning = () => {
    Modal.warning({
      title: "帳號密碼錯誤，請重新輸入",
    });
    this.setState({
      input_clear: true,
    });
  };
  render() {
    const { user,teach, user_nm, user_pw } = this.state;
    const NormalLoginForm = () => {
      const onFinish = (values) => {
        console.log("Received values of form: ", values);
        if (
          (values.username === user.username &&
          values.password === user.password)||(values.username === teach.username &&
            values.password === teach.password)
        ) {
          if(values.username === user.username){
            this.props.history.push("/Subject");
          }
          else{
            this.props.history.push("/Teacher");
          }
        } else {
          this.Warning();
        }
      };
      return (
        <Form
          name="normal_login"
          className="login-form"
          size="large"
          initialValues={{
            username: user_nm,
            password: user_pw,
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "請輸入帳號!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="帳號"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "請輸入密碼!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密碼"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>記住我</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login_form_btn">
              登入
            </Button>
          </Form.Item>
        </Form>
      );
    };
    return (
      <div className="login_wrap">
        <Avatar
          size={{ xs: 200, sm: 200, md: 240, lg: 240, xl: 280, xxl: 280 }}
          src={img}
          className="login_img"
        />
        <NormalLoginForm />
      </div>
    );
  }
}
