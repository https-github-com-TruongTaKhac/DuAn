// src/components/SignUp.tsx
import React from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import userService from "../../services/user";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      await userService.signup(values);
      message.success("Đăng ký thành công!");
      navigate("/signin");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.messages?.join(" ") ||
        "Đăng ký thất bại, vui lòng thử lại!";
      message.error(errorMessage);
    }
  };

  return (
    <>
      <div className="my-[40px] mx-auto max-w-[600px] p-8 sign-box backgound-two">
        <h1 className="mb-4 text-xl text-center font-bold text-[#4E7C32]">
          ĐĂNG KÝ TÀI KHOẢN
        </h1>
        <Form name="signup" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="name"
            label="Tên"
            rules={[
              { required: true, message: "Vui lòng nhập tên của bạn!" },
              { min: 3, message: "Tên phải có ít nhất 3 ký tự" },
              { max: 30, message: "Tên không được quá 30 ký tự" },
            ]}
          >
            <Input />
          </Form.Item>
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
              { required: true, message: "Vui lòng nhập mật khẩu!" },
              { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" },
              { max: 30, message: "Mật khẩu không được quá 30 ký tự" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Xác nhận mật khẩu"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận mật khẩu của bạn!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu không khớp!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-4">
          Bạn đã có tài khoản?{" "}
          <a href="/signin" className="text-[#427c1d] underline">
            Đăng nhập
          </a>
        </div>
      </div>
    </>
  );
};

export default SignUp;
