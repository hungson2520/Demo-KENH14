// import logo from "./logo.svg";
// import "./App.css";
import Header from "../Component/Header";

import Header_Logo from "../Component/Header_Logo";
import ImgWithText from "../Component/ImgWithText";
import PostItem from "../Component/PostItem";
import Category from "../Component/Category";
import Footer from "../Component/Footer";
import MySlider from "../Component/MySlider";
import Content from "../Component/Content";
import BlinkingText from "../Component/BlinkingText";
import ListCategory from "../Component/ListCategory";
import BannerAdvertisement from "../Component/BannerAdvertisement";
import ImageAdvertisement from "../Component/ImageAdvertisement";
import "../Style/PageHome.css";
import React, { useEffect } from "react";

import HotNews from "../Component/HotNews";
const Home = () => {
  return (
    <div className="home" style={{ height: "auto" }}>
      <h1
        style={{
          color: "blue",
          paddingBottom: "10px",
          alignItems: "center",
          marginLeft: "450px",
          width: "100%",
        }}
      >
        Nhóm 1: Demo React JS
      </h1>
      <Header_Logo />
      <Header />

      <BannerAdvertisement />
      <BlinkingText title="Các  Tin hot trong ngày" />
      <HotNews />
      <MySlider />

      <Content />

      <BlinkingText title="Các chuyên mục " />
      <ListCategory />

      <ImageAdvertisement />
      <Footer />
    </div>
  );
};

export default Home;
