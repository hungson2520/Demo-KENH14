// import logo from "./logo.svg";
// import "./App.css";
// import Header from "./Component/Header.jsx";
// import Header_Logo from "./Component/Header_Logo";
// import ImgWithText from "./Component/ImgWithText";
// import PostItem from "./Component/PostItem";
// import Category from "./Component/Category";
// import Footer from "./Component/Footer";
// import MySlider from "./Component/MySlider";
// import Content from "./Component/Content";
// import BlinkingText from "./Component/BlinkingText";
// import ListCategory from "./Component/ListCategory";
// import BannerAdvertisement from "./Component/BannerAdvertisement";
// import ImageAdvertisement from "./Component/ImageAdvertisement";
import Sport from "./Pages/Sport";
import Technology from "./Pages/Technology";
import {
  Routes,
  Route,
  useRoutes,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import Notfound from "./Pages/Notfound";
import Home from "./Pages/Home";
function App() {
  return (
    <div style={{ height: "auto" }} className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      {/* <h1
        style={{
          backgroundColor: "#F1F1F1",
          color: "blue",
          paddingBottom: "10px",
        }}
      >
        Nhóm 1: Demo React JS
      </h1>
      <Header_Logo />
      <Header />

      <BannerAdvertisement />
      <BlinkingText />
      <MySlider />
      <Content />
      <ListCategory />

      <ImageAdvertisement />
      <Footer /> */}

      {/* const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/staff/*',
      element: <Staff />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])


 */}
    </div>
  );
}

export default App;
