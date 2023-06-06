import React from "react";
import Header from "../Component/Header";
import Content from "../Component/Content";
import Header_Logo from "../Component/Header_Logo";
import PostItem from "../Component/PostItem";
import BannerAdvertisement from "../Component/BannerAdvertisement";
import ImgWithText from "../Component/ImgWithText";
import HotNews from "../Component/HotNews";
const Sport = () => {
  return (
    <div>
      Đây là trang Sport
      <Header_Logo />
      <Header />
      <BannerAdvertisement />
      <HotNews />
      <div style={{ marginTop: "100px", marginLeft: "140px" }}>
        <div>
          <PostItem
            title="SEA GAME"
            category="Thể thao"
            image="https://kenh14cdn.com/zoom/180_113/203336854389633024/2023/5/16/photo1684239952721-16842399531181633442784.jpeg"
            content="Việt Nam dành chiến thắng tại kỳ sea game.Người hâm mộ Việt Nam luôn dành những sự yêu quý dành cho đội nhà..."
          />
        </div>
        <div>
          <PostItem
            title="SEA GAME"
            category="Thể thao"
            image="https://kenh14cdn.com/zoom/180_113/203336854389633024/2023/5/16/photo1684239952721-16842399531181633442784.jpeg"
            content="Việt Nam dành chiến thắng tại kỳ sea game.Người hâm mộ Việt Nam luôn dành những sự yêu quý dành cho đội nhà..."
          />
        </div>
      </div>
    </div>
  );
};

export default Sport;
