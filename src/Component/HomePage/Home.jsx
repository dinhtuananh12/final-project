import React from "react";
import { Layout } from "antd";
// import blue from "./../../assets/blue.png";
// import red from "./../../assets/red.png";
import Header from "../Header/Header";
import Slide from "./Slide";
import ReasonCombo from "./ReasonCombo";
import HotDeal from "./HotDeal";
import MemberShipBox from "./MemberShipBox";
import AppBox from "./AppBox";
import Footer from "../Footer/Footer";
import "./home.scss";
const Home = () => {
   const { Content } = Layout;
   return (
      <>
         <Layout>
            <Header />
            <Content>
               <Slide />
               <ReasonCombo />
               <HotDeal />
               <MemberShipBox />
               <AppBox />
            </Content>
            <Footer />
         </Layout>
      </>
   );
};

export default Home;
