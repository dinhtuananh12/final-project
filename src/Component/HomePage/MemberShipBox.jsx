import React from "react";
import { Col, Row, Button } from "antd";
import member from "./../../assets/membership.png";
import "./home.scss";
const MemberShipBox = () => {
   return (
      <div className="memberShipBox">
         <div className="container">
            <Row gutter={[48, 48]} className="row">
               <Col span={12}>
                  <div className="membershipBox__img">
                     <img src={member} alt="" />
                  </div>
               </Col>
               <Col span={12}>
                  <div className="memebershipBox_cont">
                     <h2 className="bold">
                        Ưu đãi đặc biệt cho thành viên Vntrip
                     </h2>
                     <p className="semibold">
                        Giảm thêm tối thiểu 10% cho khách hàng là thành viên
                        Vntrip đảm bảo giá tốt nhất.
                     </p>
                     <p className="mb0">
                        Ưu đãi đặc biệt chỉ áp dụng khi đặt phòng tại các khách
                        sạn 4 sao, 5 sao trên Vntrip
                     </p>
                     <div className="membershipBox__btn">
                        <Button type="button" className="ant-btn">
                           <span>Đăng ký thành viên</span>
                        </Button>
                        <div className="block">
                           <p className="semibold">Bạn đã là thành viên?</p>
                           <Button type="button" className="outline-btn">
                              <span>Đăng nhập ngay</span>
                           </Button>
                        </div>
                     </div>
                  </div>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default MemberShipBox;
