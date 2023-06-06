import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/MySlider.css";
import PostItem from "./PostItem";

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Slider className="Slider" {...settings}>
      <div>
        <PostItem
          title="Tự học React"
          category="Học Tập"
          image="https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/5/12/photo1683884989146-1683884989428102718609.jpeg"
          content="React là một thư viện JavaScript phổ biến được sử dụng để xây dựng các ứng dụng web động và tương tác. ."
        />
      </div>
      <div>
        <PostItem
          title="Ca sĩ thuỳ chi"
          category="Giải Trí"
          image="https://kenh14cdn.com/2018/5/23/695fce3cefc5fa44d7b1ee489a7eedfd1509935350-1527058288861254197560.jpg"
          content="Thuỳ Chi là giáo viên thanh nhạc nổi tiếng hát nhai đầu Chipu Rộp rộp."
        />
      </div>
      <div>
        <PostItem
          title="Iphone 14 Pro Max giảm giá sốc"
          category="Công Nghệ"
          image="https://cdn1.hoanghamobile.com/tin-tuc/wp-content/uploads/2022/10/iphone-14-plus-chong-va-dap-tot-hon-iphone-14-pro-max-2.jpg"
          content="Iphone 14 pro max hiện đã giảm giá rất sốc."
        />
      </div>
      {/* Thêm các ảnh khác vào đây */}
    </Slider>
  );
};
export default MySlider;
