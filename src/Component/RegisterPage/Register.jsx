import React from "react";
import { Button, Form, Input } from "antd";
import { Layout } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./register.scss";

const Login = () => {
   const { Content } = Layout;
   return (
      <>
         <Layout>
            <Header />
            <Content id="content">
               <Form id="form-wrap" name="basic">
                  <h1 className="heading">Đăng ký</h1>
                  <Form.Item
                     name="username"
                     rules={[
                        {
                           required: true,
                           message: "Please input your username!",
                        },
                     ]}
                  >
                     <Input
                        id="form_input_email"
                        placeholder="Email hoặc số điện thoại"
                     />
                  </Form.Item>
                  <Input.Password
                     placeholder="Mật khẩu"
                     className="form-input__password"
                  />
                  <Input.Password
                     className="form-input__password"
                     placeholder="Nhập lại mật khẩu"
                     iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                     }
                  />
                  <div className="block_message">
                     <p className="message">
                        Chúng tôi sẽ gửi mã xác thực cho bạn để đăng ký tài
                        khoản
                     </p>
                  </div>
                  <Form.Item>
                     <Button id="form-btn" type="primary" htmlType="button">
                        Tiếp tục
                     </Button>
                  </Form.Item>
                  <div className="text-dashed-textCenter">
                     <span>Hoặc</span>
                  </div>
                  <div className="social-connect">
                     <Form.Item>
                        <Button
                           className="form-btn-connect"
                           type="primary"
                           htmlType="button"
                        >
                           <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M15.3333 16C15.5101 16 15.6797 15.9298 15.8047 15.8047C15.9298 15.6797 16 15.5101 16 15.3333V0.666667C16 0.489856 15.9298 0.320286 15.8047 0.195262C15.6797 0.0702379 15.5101 0 15.3333 0L0.666667 0C0.489856 0 0.320286 0.0702379 0.195262 0.195262C0.0702379 0.320286 0 0.489856 0 0.666667L0 15.3333C0 15.5101 0.0702379 15.6797 0.195262 15.8047C0.320286 15.9298 0.489856 16 0.666667 16H15.3333Z"
                                 fill="#39579A"
                              ></path>
                              <path
                                 d="M8.50671 16.0003V9.66699H6.33337V7.33366H8.50671V5.60866C8.50671 3.54199 9.76871 2.41699 11.612 2.41699C12.4954 2.41699 13.254 2.48266 13.4754 2.51199V4.67199L12.1967 4.67233C11.194 4.67233 11 5.14899 11 5.84799V7.33366H13.3334L13 9.66699H11V16.0003H8.50671Z"
                                 fill="white"
                              ></path>
                           </svg>
                           <span>Đăng nhập bằng Facebook</span>
                        </Button>
                     </Form.Item>
                     <Form.Item>
                        <Button
                           className="form-btn-connect"
                           type="primary"
                           htmlType="button"
                        >
                           <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M7.99991 3.66703C9.01809 3.66641 10.0036 4.02621 10.7819 4.6827L12.9619 2.6067C12.1251 1.83506 11.1199 1.2691 10.0261 0.95372C8.9324 0.638342 7.7802 0.582233 6.66099 0.789847C5.54178 0.99746 4.48636 1.46308 3.5785 2.14976C2.67064 2.83643 1.93532 3.72526 1.43091 4.7457L3.88858 6.64003C4.1752 5.77573 4.72649 5.02351 5.46438 4.48993C6.20226 3.95635 7.08932 3.66846 7.99991 3.66703Z"
                                 fill="#D94F3D"
                              ></path>
                              <path
                                 d="M3.66662 8.00076C3.66724 7.53835 3.7422 7.07904 3.88862 6.64043L1.43096 4.74609C0.928241 5.75739 0.666626 6.8714 0.666626 8.00076C0.666626 9.13012 0.928241 10.2441 1.43096 11.2554L3.88862 9.36109C3.7422 8.92248 3.66724 8.46317 3.66662 8.00076Z"
                                 fill="#F2C042"
                              ></path>
                              <path
                                 d="M15.0333 6.66699H8.03333V9.66699H12C11.764 10.5152 11.2234 11.2466 10.4817 11.721L12.9203 13.601C14.4787 12.2023 15.3943 9.92799 15.0333 6.66699Z"
                                 fill="#5085ED"
                              ></path>
                              <path
                                 d="M10.4806 11.7207C9.72692 12.152 8.86773 12.3642 7.99991 12.3334C7.08932 12.3319 6.20226 12.044 5.46438 11.5105C4.72649 10.9769 4.1752 10.2247 3.88858 9.36035L1.43091 11.2547C2.03796 12.4784 2.97439 13.5084 4.13489 14.229C5.29539 14.9495 6.63391 15.332 7.99991 15.3333C9.79736 15.3822 11.5494 14.7648 12.9192 13.6L10.4806 11.7207Z"
                                 fill="#57A75C"
                              ></path>
                           </svg>
                           <span>Đăng nhập bằng Google</span>
                        </Button>
                     </Form.Item>
                  </div>
                  <p className="register-account">
                     Bạn đã có tài khoản? &nbsp;
                     <Link id="register-link" to="/login">
                        Đăng nhập
                     </Link>
                  </p>
                  <p className="register-account">
                     Tiếp tục nghĩa là bạn đồng ý với các&nbsp;
                     <a className="register-link" href="/">
                        Điều khoản và điều kiện
                     </a>
                     ,&nbsp;cũng như các&nbsp;
                     <a className="register-link" href="/">
                        Chính sách bảo mật
                     </a>
                     &nbsp;của VNTRIP
                  </p>
               </Form>
            </Content>
            <Footer />
         </Layout>
      </>
   );
};

export default Login;
