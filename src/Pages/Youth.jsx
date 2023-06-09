import React from "react";
import Header from "../Component/Header";
import Content from "../Component/Content";
import Header_Logo from "../Component/Header_Logo";
import PostItem from "../Component/PostItem";
import BannerAdvertisement from "../Component/BannerAdvertisement";
import ImgWithText from "../Component/ImgWithText";
import HotNews from "../Component/HotNews";
import "../Style/PostItem.css";
const Youth = () => {
  return (
    <div>
      <Header_Logo />
      
      <Header />
      <BannerAdvertisement />
      <HotNews/>

      {/* Không có props */}

      
      {/* <div style={{ marginTop: "100px", marginLeft: "140px" }}>
      <div
      style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.5)" }}
      className="post-item"
    >
      <div className="post-item__image-wrapper">
        <img
          className="post-item__image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmgl4wdAtWhPXtyGLXig-TB3xaIGwxQ71Bw&usqp=CAU"
          alt="BLACKPINK"
          width="250"
          height="160"
        />
      </div>
      <div className="post-item__content-wrapper">
        <h3 className="post-item__title">BLACKPINK</h3>
        <h4 className="post-item__subtitle">Tuổi trẻ</h4>
        <p className="post-item__content">Blackpink tổ chức world tour đầu tiên 'Born Pink'</p>
      </div>
    </div>
    <div
      style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.5)" }}
      className="post-item"
    >
      <div className="post-item__image-wrapper">
        <img
          className="post-item__image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmgl4wdAtWhPXtyGLXig-TB3xaIGwxQ71Bw&usqp=CAU"
          alt="BLACKPINK"
          width="250"
          height="160"
        />
      </div>
      <div className="post-item__content-wrapper">
        <h3 className="post-item__title">BLACKPINK</h3>
        <h4 className="post-item__subtitle">Tuổi trẻ</h4>
        <p className="post-item__content">Blackpink tổ chức world tour đầu tiên 'Born Pink'</p>
      </div>
    </div>
    </div> */}

    
    {/* Có sử dụng props */}


      <div style={{ marginTop: "100px", marginLeft: "140px" }}>
        <div>
          <PostItem
            title="BLACKPINK"
            category="Tuổi trẻ"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmgl4wdAtWhPXtyGLXig-TB3xaIGwxQ71Bw&usqp=CAU"
            content="Blackpink tổ chức world tour đầu tiên 'Born Pink'"
          />
        </div>
        <div>
          <PostItem
            title="Sơn Tùng"
            category="Tuổi trẻ"
            image="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/4/30/1040060/Son-Tung-2-4438.jpeg"
            content="Sơn Tùng cho ra mắt MV mới"
          />
        </div>
  </div>
    </div>
  );
};

export default Youth;







