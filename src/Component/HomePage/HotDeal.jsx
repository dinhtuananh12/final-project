import React from "react";
import { Col, Row } from "antd";
import "./home.scss";
const HotDeal = () => {
   const data = [
      {
         key: "1",
         img: "https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20220608_277400_1.jpg",
         title: "[SAPA CAT CAT HILL RESORT & SPA] - HI SUMMER 2022",
         desc: "Khách sạn",
         price: "1.650.000₫",
      },
      {
         key: "2",
         img: "https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20220602_299630_358527881.jpg",
         title: "[SAILING CLUB SIGNATURE RESORT PHÚ QUỐC] ƯU ĐÃI KHAI TRƯƠNG - Miễn phí đón tiễn sân bay",
         desc: "Khách sạn",
         price: "6.400.000₫",
      },
      {
         key: "3",
         img: "https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20220601_352000_4.jpg",
         title: "[VEDANA NINH BÌNH RESORT] - KHUYẾN MÃI DỊP KHAI TRƯƠNG         ",
         desc: "Khách sạn",
         price: "1.650.000₫",
      },
      {
         key: "4",
         img: "https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20220627_310150_283035863.jpg",
         title: "[ SALINDA RESORT- SUMMER PROMOTION]         ",
         desc: "Khách sạn",
         price: "2.185.000₫",
      },
      {
         key: "5",
         img: "https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20220603_265170_4D218C95765843419C23_18222553.jpg",
         title: "[ LA SAPINETTE HOTEL DALAT] - PACKAGE 2 NGÀY 1 ĐÊM         ",
         desc: "Khách sạn",
         price: "1.725.000₫",
      },
      {
         key: "6",
         img: "https://i.vntrip.vn/260x150/smart/https://statics.vntrip.vn/uploads/deal/20220603_111450_12051_1529322604_exterior_2_1.jpg",
         title: "[ BOTON BLUE HOTEL & SPA] - MÙA HÈ SIÊU ƯU ĐÃI         ",
         desc: "Khách sạn",
         price: "920.000₫",
      },
   ];
   return (
      <div className="hotDeal">
         <div className="container">
            <h2 className="text-center">Hot deal</h2>
            <Row gutter={[32, 32]}>
               {data.map((item) => (
                  <Col span={8} key={item.key}>
                     <div className="listDeal">
                        <div className="listDeal__item">
                           <a
                              className="dealItem"
                              href="/"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <div className="dealItem__img">
                                 <img src={item.img} alt="" />
                              </div>
                              <div className="dealItem__cont">
                                 <p className="dealItem__title">{item.title}</p>
                                 <div className="dealItem__type">
                                    <span className="mr5">Combo:</span>
                                    <span className="yellow">{item.desc}</span>
                                 </div>
                                 <div className="dealItem__price">
                                    <span className="yellow">{item.price}</span>
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>
                  </Col>
               ))}
            </Row>
         </div>
      </div>
   );
};

export default HotDeal;
