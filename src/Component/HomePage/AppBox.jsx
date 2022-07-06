import React from "react";
import { Col, Row } from "antd";
import appBox from "./../../assets/appBox.png";
import appStore from "./../../assets/appStore.png";
import googleplay from "./../../assets/googlePlay.png";
import "./home.scss";
const AppBox = () => {
   return (
      <div className="appBox">
         <div className="container">
            <Row gutter={[16, 16]} className="row">
               <Col span={8}>
                  {" "}
                  <div className="appBox__iphone">
                     <img src={appBox} alt="" />
                  </div>
               </Col>
               <Col span={16}>
                  {" "}
                  <div className="appBox__content">
                     <h2 className="bold">
                        Du lịch dễ dàng với một ứng dụng duy nhất.
                     </h2>
                     <p>
                        Dùng ứng dụng để đặt vé máy bay, khách sạn chỉ trong vài
                        giây cùng với thông tin cập nhật về chuyến bay theo thời
                        gian thực.
                     </p>
                     <div className="appBox__logo">
                        <a
                           href="https://itunes.apple.com/us/app/vntrip-at-phong-khach-san/id1046183734?ls=1&amp;mt=8"
                           rel="noopener noreferrer"
                           target="_blank"
                        >
                           <img src={appStore} alt="" />
                        </a>
                        <a
                           href="https://play.google.com/store/apps/details?id=vn.vntrip.hotel"
                           rel="noopener noreferrer"
                           target="_blank"
                        >
                           <img src={googleplay} alt="" />
                        </a>
                     </div>
                  </div>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default AppBox;
