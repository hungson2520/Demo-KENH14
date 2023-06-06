import React from "react";
import "../Style/Header.css"; // import CSS để style cho header
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    alert(inputValue);
  };

  useEffect(() => {
    const pathValue = window.location.pathname.substring(1); // Lấy giá trị sau domain (ví dụ: "sport")
    console.log("pathValue là : ", pathValue);
    const liElement = document.getElementById(pathValue);

    if (liElement) {
      liElement.style.backgroundColor = "#f76b1c"; // Thay đổi màu nền của thẻ li
    }
  }, []);
  return (
    <div className="header">
      {/* <div className="logo">
        <img
          src="https://kenh14cdn.com/web_images/icon_Kenh14_logo.png"
          alt="logo"
        />
      </div> */}
      <div className="menu">
        <ul>
          <li>
            <a href="/news">Thời sự</a>
          </li>
          <li>
            <a href="/relax">Giải trí</a>
          </li>
          <li>
            <a id="sport" href="/sport">
              Thể thao
            </a>
          </li>
          <li>
            <a href="/life">Đời sống</a>
          </li>
          <li>
            <a href="/education">Giáo dục</a>
          </li>
          <li>
            <a id="technology" href="/technology">
              Công nghệ
            </a>
          </li>
          <li>
            <a href="/law">Pháp Luật</a>
          </li>
          <li>
            <a href="/youth">Giới Trẻ</a>
          </li>
        </ul>
      </div>
      <div className="search">
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Tìm kiếm"
        />

        <button>Tìm kiếm</button>
      </div>
    </div>
  );
};

export default Header;
