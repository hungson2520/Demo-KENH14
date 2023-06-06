import React, { useRef } from "react";
import "../Style/Header_Logo.css";
import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
const Header = () => {
  // const [darkMode, setDarkMode] = useState(false);
  // const darkModeRef1 = useRef();
  // const handleDarkMode = (e) => {
  //   setDarkMode(!darkMode);
  // };

  // useEffect(() => {
  //   // console.log("darkMoref.Current", darkModeRef.current);
  //   // console.log("darkMode ", darkMode);
  //   darkModeRef.current = darkMode;
  // }, [darkMode, darkModeRef]);

  // useImperativeHandle(darkModeRef, () => {
  //   return darkModeRef.current;
  // });

  // useImperativeHandle(darkModeRef, () => ({
  //   setDarkMode: (darkMode) => {
  //     setDarkMode(!darkMode);
  //   },
  // }));
  return (
    <div className="header_Logo">
      <div className="logo_kenh14">
        <a href="/">
          <img
            src="https://rubee.com.vn/admin/webroot/upload/image//images/tin-tuc/kenh14-logo-2.png"
            alt="logo"
          />
        </a>
      </div>
      {/* <button onClick={handleDarkMode}>Dark Mode</button> */}
      <div className="menu">
        <ul className="menu-ul-logo">
          <li className="menu-li-logo">
            <a href="#">#SEAGAME 32</a>
          </li>
          <li className="menu-li-logo">
            <a href="#">#Making My Way</a>
          </li>
          <li className="menu-li-logo">
            <a href="#">#THE VOICE 2023</a>
          </li>
          <li className="menu-li-logo">
            <a href="#">#THE MASKED SINGER VIETNAM</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
// const ForwardRefHeader = forwardRef(Header);
export default Header;
