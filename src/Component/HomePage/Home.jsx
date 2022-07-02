import React from "react";
import { Layout } from "antd";
import { Button } from "antd";
import logo from "./../../assets/logo.png";
import banner from "./../../assets/banner.png";
import member from "./../../assets/membership.png";
import appBox from "./../../assets/appBox.png";
import appStore from "./../../assets/appStore.png";
import googleplay from "./../../assets/googlePlay.png";
import "./home.scss";
const Home = () => {
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
               <img src={banner} alt="banner" className="banner" />
               <div className="box-days">
                  <form className="days">
                     <label htmlFor="" className="label">
                        Ngày đến
                     </label>
                     <input type="date" className="choose" />
                     <label htmlFor="" className="label">
                        Ngày đi
                     </label>
                     <input type="date" className="choose" />
                     <input type="button" value="Tìm kiếm" id="btn" />
                  </form>
               </div>
               <div className="why-choose">
                  <h1 className="title">
                     Tại sao chọn <span>COMBO VNTRIP?</span>
                  </h1>
                  <div className="wrap">
                     <div className="details">
                        <svg
                           className="svg-icon"
                           width="46"
                           height="46"
                           viewBox="0 0 46 46"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M10 46H1C0.734784 46 0.48043 45.8946 0.292893 45.7071C0.105357 45.5196 0 45.2652 0 45V27C0 26.7348 0.105357 26.4804 0.292893 26.2929C0.48043 26.1054 0.734784 26 1 26H10C10.2652 26 10.5196 26.1054 10.7071 26.2929C10.8946 26.4804 11 26.7348 11 27V45C11 45.2652 10.8946 45.5196 10.7071 45.7071C10.5196 45.8946 10.2652 46 10 46Z"
                              fill="#FFC069"
                           ></path>
                           <path
                              d="M45 46H36C35.7348 46 35.4804 45.8946 35.2929 45.7071C35.1054 45.5196 35 45.2652 35 45V27C35 26.7348 35.1054 26.4804 35.2929 26.2929C35.4804 26.1054 35.7348 26 36 26H45C45.2652 26 45.5196 26.1054 45.7071 26.2929C45.8946 26.4804 46 26.7348 46 27V45C46 45.2652 45.8946 45.5196 45.7071 45.7071C45.5196 45.8946 45.2652 46 45 46Z"
                              fill="#FFC069"
                           ></path>
                           <path
                              d="M25 0V3H21V0H19V10H21V5H25V10H27V0H25Z"
                              fill="#FFA940"
                           ></path>
                           <path
                              d="M37 46H9V9C9 8.73478 9.10536 8.48043 9.29289 8.29289C9.48043 8.10536 9.73478 8 10 8H36C36.2652 8 36.5196 8.10536 36.7071 8.29289C36.8946 8.48043 37 8.73478 37 9V46Z"
                              fill="#FA8C16"
                           ></path>
                           <path
                              d="M20 18H16C15.7348 18 15.4804 17.8946 15.2929 17.7071C15.1054 17.5196 15 17.2652 15 17V14C15 13.7348 15.1054 13.4804 15.2929 13.2929C15.4804 13.1054 15.7348 13 16 13H20C20.2652 13 20.5196 13.1054 20.7071 13.2929C20.8946 13.4804 21 13.7348 21 14V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18Z"
                              fill="#FFD591"
                           ></path>
                           <path
                              d="M30 18H26C25.7348 18 25.4804 17.8946 25.2929 17.7071C25.1054 17.5196 25 17.2652 25 17V14C25 13.7348 25.1054 13.4804 25.2929 13.2929C25.4804 13.1054 25.7348 13 26 13H30C30.2652 13 30.5196 13.1054 30.7071 13.2929C30.8946 13.4804 31 13.7348 31 14V17C31 17.2652 30.8946 17.5196 30.7071 17.7071C30.5196 17.8946 30.2652 18 30 18Z"
                              fill="#FFD591"
                           ></path>
                           <path
                              d="M20 26H16C15.7348 26 15.4804 25.8946 15.2929 25.7071C15.1054 25.5196 15 25.2652 15 25V22C15 21.7348 15.1054 21.4804 15.2929 21.2929C15.4804 21.1054 15.7348 21 16 21H20C20.2652 21 20.5196 21.1054 20.7071 21.2929C20.8946 21.4804 21 21.7348 21 22V25C21 25.2652 20.8946 25.5196 20.7071 25.7071C20.5196 25.8946 20.2652 26 20 26Z"
                              fill="#FFD591"
                           ></path>
                           <path
                              d="M30 26H26C25.7348 26 25.4804 25.8946 25.2929 25.7071C25.1054 25.5196 25 25.2652 25 25V22C25 21.7348 25.1054 21.4804 25.2929 21.2929C25.4804 21.1054 25.7348 21 26 21H30C30.2652 21 30.5196 21.1054 30.7071 21.2929C30.8946 21.4804 31 21.7348 31 22V25C31 25.2652 30.8946 25.5196 30.7071 25.7071C30.5196 25.8946 30.2652 26 30 26Z"
                              fill="#FFD591"
                           ></path>
                           <path
                              d="M20 34H16C15.7348 34 15.4804 33.8946 15.2929 33.7071C15.1054 33.5196 15 33.2652 15 33V30C15 29.7348 15.1054 29.4804 15.2929 29.2929C15.4804 29.1054 15.7348 29 16 29H20C20.2652 29 20.5196 29.1054 20.7071 29.2929C20.8946 29.4804 21 29.7348 21 30V33C21 33.2652 20.8946 33.5196 20.7071 33.7071C20.5196 33.8946 20.2652 34 20 34Z"
                              fill="#FFD591"
                           ></path>
                           <path
                              d="M30 34H26C25.7348 34 25.4804 33.8946 25.2929 33.7071C25.1054 33.5196 25 33.2652 25 33V30C25 29.7348 25.1054 29.4804 25.2929 29.2929C25.4804 29.1054 25.7348 29 26 29H30C30.2652 29 30.5196 29.1054 30.7071 29.2929C30.8946 29.4804 31 29.7348 31 30V33C31 33.2652 30.8946 33.5196 30.7071 33.7071C30.5196 33.8946 30.2652 34 30 34Z"
                              fill="#FFD591"
                           ></path>
                           <path
                              d="M25 38H21C20.7348 38 20.4804 38.1054 20.2929 38.2929C20.1054 38.4804 20 38.7348 20 39V46H26V39C26 38.7348 25.8946 38.4804 25.7071 38.2929C25.5196 38.1054 25.2652 38 25 38Z"
                              fill="#FFD591"
                           ></path>
                        </svg>
                        <div>
                           <h5>Công nghệ trí tuệ nhân tạo</h5>
                           <p>
                              Tự động tìm vé rẻ nhất để đảm bảo giá thành phù
                              hợp cho ngân sách của bạn.
                           </p>
                        </div>
                     </div>
                     <div className="details">
                        <svg
                           className="svg-icon"
                           width="46"
                           height="47"
                           viewBox="0 0 46 47"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M30.809 29.411C30.712 29.2762 30.5827 29.168 30.433 29.0964C30.2832 29.0247 30.1178 28.9919 29.952 29.001L8.952 30.001C8.69536 30.0133 8.45332 30.124 8.27607 30.31C8.09882 30.496 7.99996 30.7431 8 31C8 39.822 15.178 47 24 47C24.2037 47.0001 24.4026 46.938 24.57 46.8221C24.7375 46.7061 24.8655 46.5417 24.937 46.351L30.937 30.351C31.055 30.036 31.006 29.683 30.809 29.411Z"
                              fill="#FFC069"
                           ></path>
                           <path
                              d="M7 10V6C7 5.60603 7.0776 5.21593 7.22836 4.85195C7.37913 4.48797 7.6001 4.15726 7.87868 3.87868C8.15725 3.6001 8.48797 3.37913 8.85195 3.22836C9.21593 3.0776 9.60603 3 10 3C10.394 3 10.7841 3.0776 11.148 3.22836C11.512 3.37913 11.8427 3.6001 12.1213 3.87868C12.3999 4.15726 12.6209 4.48797 12.7716 4.85195C12.9224 5.21593 13 5.60603 13 6V10"
                              fill="#FFC069"
                           ></path>
                           <path
                              d="M15 10V5C15 4.20435 15.3161 3.44129 15.8787 2.87868C16.4413 2.31607 17.2044 2 18 2C18.7956 2 19.5587 2.31607 20.1213 2.87868C20.6839 3.44129 21 4.20435 21 5V10"
                              fill="#FFC069"
                           ></path>
                           <path
                              d="M31 10V5C31 4.20435 31.3161 3.44129 31.8787 2.87868C32.4413 2.31607 33.2044 2 34 2C34.7957 2 35.5587 2.31607 36.1213 2.87868C36.6839 3.44129 37 4.20435 37 5V10"
                              fill="#FFC069"
                           ></path>
                           <path
                              d="M23 10V3C23 2.20435 23.3161 1.44129 23.8787 0.87868C24.4413 0.31607 25.2044 0 26 0C26.7956 0 27.5587 0.31607 28.1213 0.87868C28.6839 1.44129 29 2.20435 29 3V10"
                              fill="#FFC069"
                           ></path>
                           <path
                              d="M45 34H1C0.734784 34 0.48043 33.8946 0.292893 33.7071C0.105357 33.5196 0 33.2652 0 33V9C0 8.73478 0.105357 8.48043 0.292893 8.29289C0.48043 8.10536 0.734784 8 1 8H45C45.2652 8 45.5196 8.10536 45.7071 8.29289C45.8946 8.48043 46 8.73478 46 9V33C46 33.2652 45.8946 33.5196 45.7071 33.7071C45.5196 33.8946 45.2652 34 45 34Z"
                              fill="#FA8C16"
                           ></path>
                           <path
                              d="M37 11H9C9 12.5913 8.36786 14.1174 7.24264 15.2426C6.11742 16.3679 4.5913 17 3 17V25C4.5913 25 6.11742 25.6321 7.24264 26.7574C8.36786 27.8826 9 29.4087 9 31H37C37 29.4087 37.6321 27.8826 38.7574 26.7574C39.8826 25.6321 41.4087 25 43 25V17C41.4087 17 39.8826 16.3679 38.7574 15.2426C37.6321 14.1174 37 12.5913 37 11Z"
                              fill="#FFD591"
                           ></path>
                           <path
                              d="M23 26C25.7614 26 28 23.7614 28 21C28 18.2386 25.7614 16 23 16C20.2386 16 18 18.2386 18 21C18 23.7614 20.2386 26 23 26Z"
                              fill="#FFF7E6"
                           ></path>
                           <path
                              opacity="0.1"
                              d="M32.0001 23.9502V30.0002C28.8351 30.0002 25.6761 31.4962 23.5601 34.0002H37.7081C37.8941 33.0272 38.0001 32.0262 38.0001 31.0002V17.0622C33.5231 16.5132 32.0001 19.6322 32.0001 23.9512V23.9502Z"
                              fill="black"
                           ></path>
                           <path
                              d="M40 17.0622C35.523 16.5132 34 19.6322 34 23.9512V30.0002C28.5 30.0002 23 34.5002 23 41.0002V45.9812C23 46.5312 23.437 47.0002 23.987 47.0002C32.815 47.0072 40 39.8262 40 31.0002V17.0622Z"
                              fill="#FFC069"
                           ></path>
                        </svg>
                        <div>
                           <h5>Tiết kiệm thời gian</h5>
                           <p>
                              Xác nhận ngay, không cần đợi nhân viên tư vấn tìm
                              phòng và vé mất thời gian.
                           </p>
                        </div>
                     </div>
                     <div className="details">
                        <svg
                           className="svg-icon"
                           xmlns="http://www.w3.org/2000/svg"
                           width="46"
                           height="46"
                           viewBox="0 0 46 46"
                           fill="none"
                        >
                           <path
                              d="M42 19H40V15C40 7.832 34.168 2 27 2H19C11.832 2 6 7.832 6 15V19H4V15C4 6.729 10.729 0 19 0H27C35.271 0 42 6.729 42 15V19Z"
                              fill="#FFA940"
                           ></path>
                           <path
                              d="M10 16.059C9.66801 16.0209 9.33417 16.0012 9 16C6.61305 16 4.32387 16.9482 2.63604 18.636C0.948212 20.3239 0 22.6131 0 25C0 27.3869 0.948212 29.6761 2.63604 31.364C4.32387 33.0518 6.61305 34 9 34C9.338 34 9.671 33.978 10 33.941V16.06V16.059Z"
                              fill="#FFC069"
                           ></path>
                           <path
                              d="M10.5 35C9.83696 35 9.20107 34.7366 8.73223 34.2678C8.26339 33.7989 8 33.163 8 32.5V17.5C8 16.837 8.26339 16.2011 8.73223 15.7322C9.20107 15.2634 9.83696 15 10.5 15C11.163 15 11.7989 15.2634 12.2678 15.7322C12.7366 16.2011 13 16.837 13 17.5V32.5C13 33.163 12.7366 33.7989 12.2678 34.2678C11.7989 34.7366 11.163 35 10.5 35Z"
                              fill="#FF8917"
                           ></path>
                           <path
                              d="M37 16C36.662 16 36.329 16.022 36 16.059V33.94C36.329 33.977 36.662 33.999 37 33.999C38.1819 33.999 39.3522 33.7662 40.4442 33.3139C41.5361 32.8616 42.5282 32.1987 43.364 31.363C44.1997 30.5273 44.8626 29.5351 45.3149 28.4432C45.7672 27.3512 46 26.1809 46 24.999C46 23.8171 45.7672 22.6468 45.3149 21.5549C44.8626 20.4629 44.1997 19.4708 43.364 18.6351C42.5282 17.7993 41.5361 17.1364 40.4442 16.6841C39.3522 16.2318 38.1819 15.999 37 15.999V16Z"
                              fill="#FFC069"
                           ></path>
                           <path
                              d="M35.5 35C34.837 35 34.2011 34.7366 33.7322 34.2678C33.2634 33.7989 33 33.163 33 32.5V17.5C33 16.837 33.2634 16.2011 33.7322 15.7322C34.2011 15.2634 34.837 15 35.5 15C36.163 15 36.7989 15.2634 37.2678 15.7322C37.7366 16.2011 38 16.837 38 17.5V32.5C38 33.163 37.7366 33.7989 37.2678 34.2678C36.7989 34.7366 36.163 35 35.5 35Z"
                              fill="#FF8917"
                           ></path>
                           <path
                              d="M4 35V26C4 25.7348 3.89464 25.4804 3.70711 25.2929C3.51957 25.1054 3.26522 25 3 25C2.73478 25 2.48043 25.1054 2.29289 25.2929C2.10536 25.4804 2 25.7348 2 26V35C2 39.962 6.038 44 11 44V42C7.14 42 4 38.86 4 35Z"
                              fill="#FFA940"
                           ></path>
                           <path
                              d="M17 46H13C12.2044 46 11.4413 45.6839 10.8787 45.1213C10.3161 44.5587 10 43.7956 10 43C10 42.2044 10.3161 41.4413 10.8787 40.8787C11.4413 40.3161 12.2044 40 13 40H17C17.7956 40 18.5587 40.3161 19.1213 40.8787C19.6839 41.4413 20 42.2044 20 43C20 43.7956 19.6839 44.5587 19.1213 45.1213C18.5587 45.6839 17.7956 46 17 46Z"
                              fill="#FF8917"
                           ></path>
                        </svg>
                        <div>
                           <h5>Rẻ nhất thị trường</h5>
                           <p>
                              Giá cuối cùng, không thu thêm phí ngoài như các
                              trang khác. Bán đúng giá để bạn yên tâm lựa chọn.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="popular">
                  <div className="container">
                     <h1 className="title">ĐIỂM ĐẾN VIỆT NAM PHỔ BIẾN</h1>
                     <div className="row">
                        <div className="card">
                           <h3 className="card-title">Hà Nội</h3>
                           <a href="/">
                              <img
                                 src="https://statics.vntrip.vn/website/images/dest.373x181.01.png"
                                 alt=""
                              />
                           </a>
                        </div>
                        <div className="card">
                           <h3 className="card-title">Tp. Hồ Chí Minh</h3>
                           <a href="/">
                              <img
                                 src="	https://statics.vntrip.vn/images/dest/dest.373x181.02.png"
                                 alt=""
                              />
                           </a>
                        </div>
                        <div className="card">
                           <h3 className="card-title">Nha Trang</h3>
                           <a href="/">
                              <img
                                 src="https://statics.vntrip.vn/images/dest/dest.373x181.04.png"
                                 alt=""
                              />
                           </a>
                        </div>
                        <div className="card">
                           <h3 className="card-title">Đà Lạt</h3>
                           <a href="/">
                              <img
                                 src="	https://statics.vntrip.vn/images/dest/dest.373x181.05.png"
                                 alt=""
                              />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="hot-deal">
                  <div className="container">
                     <h1 className="title">Hot deal</h1>
                     <div className="box">
                        <div className="card">
                           <img
                              src="https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20220608_277400_1.jpg"
                              alt=""
                           />
                           <p>
                              [SAPA CAT CAT HILL RESORT & SPA] - HI SUMMER 2022
                           </p>
                           <div>
                              <span>Combo:</span>
                              <span>Khách sạn</span>
                           </div>
                           <span className="price">1.650.000₫</span>
                        </div>
                        <div className="card">
                           <img
                              src="https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20220602_299630_358527881.jpg"
                              alt=""
                           />
                           <p>
                              [SAILING CLUB SIGNATURE RESORT PHÚ QUỐC] ƯU ĐÃI
                              KHAI TRƯƠNG - Miễn phí đón tiễn sân bay
                           </p>
                           <div>
                              <span>Combo:</span>
                              <span>Khách sạn</span>
                           </div>
                           <span className="price">6.400.000₫</span>
                        </div>
                        <div className="card">
                           <img
                              src="https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20220601_352000_4.jpg"
                              alt=""
                           />
                           <p>
                              [VEDANA NINH BÌNH RESORT] - KHUYẾN MÃI DỊP KHAI
                              TRƯƠNG
                           </p>
                           <div>
                              <span>Combo:</span>
                              <span>Khách sạn</span>
                           </div>
                           <span className="price">1.650.000₫</span>
                        </div>
                        <div className="card">
                           <img
                              src="https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20220627_310150_283035863.jpg"
                              alt=""
                           />
                           <p>[ SALINDA RESORT- SUMMER PROMOTION]</p>
                           <div>
                              <span>Combo:</span>
                              <span>Khách sạn</span>
                           </div>
                           <span className="price">2.185.000₫</span>
                        </div>
                        <div className="card">
                           <img
                              src="https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20220603_265170_4D218C95765843419C23_18222553.jpg"
                              alt=""
                           />
                           <p>
                              [ LA SAPINETTE HOTEL DALAT] - PACKAGE 2 NGÀY 1 ĐÊM
                           </p>
                           <div>
                              <span>Combo:</span>
                              <span>Khách sạn</span>
                           </div>
                           <span className="price">1.725.000₫</span>
                        </div>
                        <div className="card">
                           <img
                              src="https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20220603_111450_12051_1529322604_exterior_2_1.jpg"
                              alt=""
                           />
                           <p>[ BOTON BLUE HOTEL & SPA] - MÙA HÈ SIÊU ƯU ĐÃI</p>
                           <div>
                              <span>Combo:</span>
                              <span>Khách sạn</span>
                           </div>
                           <span className="price">920.000₫</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="memberShipBox">
                  <div className="container">
                     <div className="row">
                        <div className="box-left">
                           <img src={member} alt="" />
                        </div>
                        <div className="box-right">
                           <h2 className="title">
                              Ưu đãi đặc biệt cho thành viên Vntrip
                           </h2>
                           <p className="content-bold">
                              Giảm thêm tối thiểu 10% cho khách hàng là thành
                              viên Vntrip đảm bảo giá tốt nhất.
                           </p>
                           <p className="content">
                              Ưu đãi đặc biệt chỉ áp dụng khi đặt phòng tại các
                              khách sạn 4 sao, 5 sao trên Vntrip
                           </p>
                           <div className="membership-btn">
                              <button type="button" className="btn-orange">
                                 Đăng ký thành viên
                              </button>
                              <div className="block">
                                 <p className="semibold">
                                    Bạn đã là thành viên?
                                 </p>
                                 <button type="button" className="bold">
                                    Đăng nhập ngay
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="appbox">
                  <div className="container">
                     <div className="appbox__iphone">
                        <img src={appBox} alt="" />
                     </div>
                     <div className="appbox__content">
                        <h2 className="bold">
                           Du lịch dễ dàng với một ứng dụng duy nhất.
                        </h2>
                        <p>
                           Dùng ứng dụng để đặt vé máy bay, khách sạn chỉ trong
                           vài giây cùng với thông tin cập nhật về chuyến bay
                           theo thời gian thực.
                        </p>
                        <div className="appbox__logo">
                           <a href="/">
                              <img src={appStore} alt="" />
                           </a>
                           <a href="/">
                              <img src={googleplay} alt="" />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </Content>
            <Footer id="footer"></Footer>
         </Layout>
      </>
   );
};

export default Home;
