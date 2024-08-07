// src/components/SignIn.tsx
import React from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import userService from "../../services/user";
import { useAuth } from "../../contexts/AuthContext";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const onFinish = async (values: any) => {
    try {
      const response = await userService.signin(values);
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.user));
      message.success("Đăng nhập thành công!");
      login(response.user);
      navigate("/");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.messages?.join(" ") ||
        "Đăng nhập thất bại, vui lòng thử lại!";
      message.error(errorMessage);
    }
  };

  return (
    <>
      <div className="my-[110px] mx-auto max-w-[600px] p-8 sign-box backgound-two">
        <h1 className="mb-4 text-xl text-center font-bold text-[#4E7C32]">
          ĐĂNG NHẬP
        </h1>
        <Form name="signin" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập email của bạn!" },
              { type: "email", message: "Email không hợp lệ" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu của bạn!" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-4">
          Bạn chưa có tài khoản?{" "}
          <a href="/signup" className="text-[#4E7C32] underline">
            Đăng ký
          </a>
        </div>
      </div>
    </>
  );
};

export default SignIn;
