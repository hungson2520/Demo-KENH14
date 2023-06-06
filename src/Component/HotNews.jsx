import React from "react";
import ImgWithText from "./ImgWithText";
import "../Style/HotNews.css";
function HotNews() {
  return (
    <div className="hot-news-container">
      <div className="left-column">
        <ImgWithText
          imgSrc="https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/6/4/photo1685838961978-1685838962087909371703.jpg"
          imgAlt="Left Image"
          text="U20 nữ Việt Nam thắng kịch tích U20 nữ Iran vòng loại U20 nữ châu Á 2024"
        />
        <ImgWithText
          imgSrc="https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/6/3/photo1685808486782-16858084868972113667144.jpeg"
          imgAlt="Left Image"
          text="ManCity Xử đẹp MU cái 1 , ẳm trọn cup dễ dàng"
        />
      </div>
      <div className="right-column">
        <ImgWithText
          imgSrc="https://kenh14cdn.com/zoom/500_314/203336854389633024/2023/6/3/photo1685800587809-16858005879821152399779.jpg"
          imgAlt="Right Image"
          text="Messi tiến gần đến việc sang Saudi Arabia chơi bóng, nhận mức lương lịch sử gấp đôi Ronaldo"
        />
        <ImgWithText
          imgAlt="Đây là ảnh"
          text="Việt kiều 18 tuổi từng lên đội tuyển trẻ của Cộng hòa Séc về hội quân với U23 Việt Nam"
          imgSrc="https://kenh14cdn.com/zoom/180_113/203336854389633024/2023/6/2/photo1685691036996-16856910370961831912615.jpg"
        />
      </div>
    </div>
  );
}

export default HotNews;
