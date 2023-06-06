import React from "react";
import "../Style/Footer.css";
// eslint-disable-next-line no-unused-vars

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="#">Thời sự</a>
        </li>
        <li>
          <a href="#">Giải Trí</a>
        </li>
        <li>
          <a href="#">Thể Thao</a>
        </li>
        <li>
          <a href="#">Đời Sống</a>
        </li>
        <li>
          <a href="#">Giáo Dục</a>
        </li>
        <li>
          <a href="#">Công Nghệ</a>
        </li>
        <li>
          <a href="#">Pháp Luật</a>
        </li>
        <li>
          <a href="#">Giới Trẻ</a>
        </li>
      </ul>

      <div className="footer-top">
        <div className="footer-top-left">
          {" "}
          <div className="footer-top-left_right">
            <a href="#">
              <img
                style={{ width: "90px", height: "90px" }}
                src="https://upload.wikimedia.org/wikipedia/vi/0/00/Bi%E1%BB%83u_tr%C6%B0ng_K%C3%AAnh_14.png"
                alt=""
              />
            </a>
            <h3>Kênh 14.vn</h3>
            <h5 style={{ fontSize: "10px" }}>Kênh giải trí xã hội</h5>
          </div>
          <div className="footer-top-left_left">
            <h2 style={{ marginLeft: "0" }}>Đóng góp nội dung</h2>
            <div className="footer-top-left_left2">
              <h5 className="cauhoithuonggap">Câu hỏi thường gặp</h5>
              <h5 className="emailKenh14">Bandoc@kenh14.vn</h5>
            </div>
            <p style={{ fontSize: "12px" }}>
              Kenh14.vn rất hoan nghênh độc giả gửi thông tin và góp ý cho chúng
              tôi
            </p>
          </div>
        </div>
        <div className="footer-top-right">
          <img
            style={{ width: "580px", height: "200px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_4BLKKLMq4BTPJZBxrd9F5rodaJUJxhwVSc8kjb7&s"
            alt=""
          />
          <div className="footer-top-right_button">
            <button>Like Kênh 14</button>
            <button style={{ transform: " translateX(385px)" }}>
              Share Kênh 14
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bot">
        <div className="column column-left">
          <h3>TRỤ SỞ HÀ NỘI</h3>
          <p>
            Tầng 21, tòa nhà Center Building, Hapulico Complex, số 1 Nguyễn Huy
            Tưởng, p. Thanh Xuân Trung, quận Thanh Xuân, Hà Nội. Điện thoại: 024
            7309 5555, máy lẻ 370.
          </p>
          <a href="/">Xem bản đồ</a>
          <h3 style={{ marginTop: "50px" }}>TRỤ SỞ TP.Hồ Chí Minh</h3>
          <p>
            Tầng 4 Tòa nhà 123, 123 Võ Văn Tần, phường 6, quận 3, Tp. HCM Điện
            thoại: 028. 7307 7979
          </p>
          <a href="/">Xem bản đồ</a>
        </div>
        <div className="column column-center">
          <h3>CHỊU TRÁCH NHIỆM QUẢN LÝ NỘI DUNG</h3>
          <p>Bà Nguyễn Bích Minh</p>
          <h3>HỢP TÁC TRUYỀN THÔNG</h3>
          <p>024.73095555</p>
          <p>marketing@kenh14</p>
          <h3>LIÊN HỆ QUẢNG CÁO </h3>
          <p>0794463333-0961984388</p>
          <p>marketing@kenh14</p>

          <button className="chatvoituvanvien">Chat với tư vấn viên</button>
          <br />
          <button style={{ marginTop: "10px" }} className="xemchitiet">
            Xem Chi Tiết
          </button>
          <h3>Chính sách bảo mật</h3>
        </div>
        <div className="column column-right">
          <img
            src="https://cms.vietnamreport.net//source/LogoBusiness/20211019095257vccorp-logo.jpg"
            alt=""
          />
          <h3>© Copyright 2007 - 2023 – CÔNG TY CỔ PHẦN VCCORP</h3>
          <p>
            Tầng 17, 19, 20, 21 Tòa nhà Center Building - Hapulico Complex, Số 1
            Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội.
          </p>
          <p>
            Giấy phép thiết lập trang thông tin điện tử tổng hợp trên mạng số
            2215/GP-TTĐT do Sở Thông tin và Truyền thông Hà Nội cấp ngày 10
            tháng 4 năm 2019
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
