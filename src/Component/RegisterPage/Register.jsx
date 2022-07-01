import React from "react";
import { Button, Form, Input } from "antd";
import { Layout } from "antd";
import "./register.scss";
import logo from "./../../assets/logo.png";
const Login = () => {
   const { Header, Footer, Content } = Layout;
   return (
      <>
         <Layout>
            <Header id="header">
               <img src={logo} alt="logo" className="header-img" />
               <div className="header-content">
                  <span className="header-content_number">
                     <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M6.62639 9.37493C5.0992 7.84775 4.75437 6.32056 4.67657 5.70869C4.65483 5.53951 4.71305 5.36984 4.83409 5.24965L6.06997 4.01433C6.25176 3.83264 6.28403 3.54949 6.14776 3.33156L4.18002 0.27608C4.02926 0.0347663 3.71972 -0.0523261 3.46525 0.0749739L0.306319 1.56271C0.10054 1.66404 -0.0204963 1.88268 0.00286762 2.11086C0.168387 3.68329 0.853911 7.54871 4.65257 11.3476C8.45123 15.1466 12.3161 15.8318 13.8894 15.9973C14.1175 16.0207 14.3362 15.8997 14.4375 15.6939L15.9252 12.535C16.0521 12.281 15.9655 11.9723 15.7252 11.8213L12.6698 9.85411C12.452 9.7177 12.1688 9.74973 11.987 9.93135L10.7517 11.1672C10.6315 11.2883 10.4618 11.3465 10.2926 11.3247C9.68076 11.247 8.15357 10.9021 6.62639 9.37493Z"
                           fill="#FF8917"
                        ></path>
                        <path
                           d="M12.6907 8.55195C12.3859 8.55195 12.1389 8.30493 12.1389 8.00022C12.1363 5.71595 10.2852 3.86483 8.00095 3.86225C7.69624 3.86225 7.44922 3.61523 7.44922 3.31052C7.44922 3.00581 7.69624 2.75879 8.00095 2.75879C10.8944 2.76198 13.2392 5.10678 13.2424 8.00022C13.2424 8.30493 12.9954 8.55195 12.6907 8.55195Z"
                           fill="#FF8917"
                        ></path>
                        <path
                           d="M15.4493 8.55181C15.1446 8.55181 14.8976 8.3048 14.8976 8.00008C14.8933 4.19295 11.8081 1.10772 8.00095 1.10346C7.69624 1.10346 7.44922 0.856442 7.44922 0.55173C7.44922 0.247018 7.69624 0 8.00095 0C12.4173 0.00486512 15.9962 3.58378 16.001 8.00008C16.001 8.14641 15.9429 8.28675 15.8394 8.39021C15.736 8.49368 15.5956 8.55181 15.4493 8.55181Z"
                           fill="#FF8917"
                        ></path>
                     </svg>
                     096&nbsp;326&nbsp;6688
                  </span>
                  <Button
                     className="form-btn_login"
                     type="primary"
                     htmlType="button"
                  >
                     Đăng nhập
                  </Button>
                  <Button
                     className="form-btn_register"
                     type="primary"
                     htmlType="button"
                  >
                     Đăng ký
                  </Button>
               </div>
            </Header>
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

                  <Form.Item
                     name="password"
                     rules={[
                        {
                           required: true,
                           message: "Please input your password!",
                        },
                     ]}
                  >
                     <Input.Password
                        id="form_input_password"
                        placeholder="Nhập lại mật khẩu"
                     />
                  </Form.Item>
                  <Form.Item
                     name="password"
                     rules={[
                        {
                           required: true,
                           message: "Please input your password!",
                        },
                     ]}
                  >
                     <Input.Password
                        id="form_input_password"
                        placeholder="Mật khẩu"
                     />
                  </Form.Item>
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
                     <a id="register-link" href="/">
                        Đăng nhập
                     </a>
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
            <Footer id="footer">
               <div className="footer-content">
                  <span className="footer__copyright">
                     Bản quyền &copy; 2022 Vntrip.vn
                  </span>
                  <div className="footer__social">
                     <a href="/" className="footer__link">
                        <svg
                           width="18"
                           height="18"
                           viewBox="0 0 512 512"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="white"
                        >
                           <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0"></path>
                        </svg>
                        <span>Facebook</span>
                     </a>
                     <a href="/" className="footer__link">
                        <svg
                           width="18"
                           height="18"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="white"
                        >
                           <path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z"></path>
                           <path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"></path>
                           <circle cx="18.406" cy="5.595" r="1.439"></circle>
                        </svg>
                        <span>Instagram</span>
                     </a>
                     <a href="/" className="footer__link">
                        <svg
                           width="18"
                           height="18"
                           viewBox="0 0 512 512"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="white"
                        >
                           <path d="m162.457 434.408c-23.427 23.444-61.433 23.444-84.861 0-23.075-23.059-23.443-60.249-1.088-83.757l126.465-126.465c-39.112-10.458-82.481-.832-113.748 28.904l-56.231 56.231c-44.711 47.015-43.975 121.395 2.176 167.514 46.855 46.887 122.867 46.887 169.722 0l51.846-51.846c31.425-31.404 41.785-75.905 31.086-115.947z"></path>
                           <path d="m476.835 35.17c-46.119-46.151-120.499-46.887-167.514-2.176l-56.231 56.231c-29.735 31.268-39.361 74.637-28.904 113.748l126.465-126.465c23.508-22.355 60.697-21.987 83.757 1.088 23.444 23.428 23.443 61.433 0 84.861l-125.367 125.367c40.042 10.699 84.543.34 115.947-31.086l51.846-51.846c46.888-46.855 46.888-122.867.001-169.722z"></path>
                           <path d="m164.774 347.228c11.714 11.722 30.717 11.722 42.43 0l140.023-140.023c11.722-11.714 11.722-30.717 0-42.43-11.53-11.538-30.125-11.722-41.878-.544l-141.12 141.12c-11.177 11.752-10.993 30.347.545 41.877z"></path>
                        </svg>
                        <span>Blog du lịch</span>
                     </a>
                  </div>
               </div>
            </Footer>
         </Layout>
      </>
   );
};

export default Login;
