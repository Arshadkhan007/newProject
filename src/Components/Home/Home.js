import "./Home.css";
import Products from "../Products/Products";
// import faker from "faker";
// import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => Slider(0), []);
  return (
    <>
      <div className="home">
        <div className="home_Container">
          {/*  */}
          <div className="HomeToastContainer">
            <ToastContainer />
          </div>

          <div className="homeSliderContainer">
            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2020/August/Medh_Alexa_GW_3000x1200._CB405585145_.jpg"
                alt=""
              />
            </div>

            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
                alt=""
              />
            </div>

            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg"
                alt=""
              />
            </div>

            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg"
                alt=""
              />
            </div>

            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/Pre_Launch/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_M51_tallhero_1500x600_1._CB405468917_.jpg"
                alt=""
              />
            </div>

            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="Home_Row">
            {/* Products => Product ID, Title, Rating, Price , Img */}
            <Products
              id={12323}
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={1990}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />

            <Products
              id={3254354345}
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={5989}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            <Products
              id={12329}
              title="The Lean Startup"
              price={1000}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
            <Products
              id={12329}
              title="The Lean Startup"
              price={1000}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
          </div>

          {/* Second Row */}
          <div className="Home_Row">
            {/* Products => Product ID, Title, Rating, Price , Img */}
            <Products
              id={12320}
              title="Easy Coding"
              price={100}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
            <Products
              id={12321}
              title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
              price={200}
              rating={5}
              image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
            />
            <Products
              id={12334}
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={980}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
          </div>

          {/* Third Row */}
          <div className="Home_Row">
            {/* Products => Product ID, Title, Rating, Price , Img */}
            <Products
              id={90829332}
              title="Samsung Gaming Monitor - Easy Coding Tutorial"
              price={1098}
              rating={4.5}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />

            <Products
              id={90829332}
              title="Samsung Gaming Monitor - Easy Coding Tutorial"
              price={1098}
              rating={3.5}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>

          {/* Fourth Row */}
          <div className="Home_Row">
            {/* Products => Product ID, Title, Rating, Price , Img */}
            <Products
              id={12326}
              title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
              price={200}
              rating={5}
              image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
            />
            <Products
              id={12328}
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={5989}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            <Products
              id={12327}
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98099}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Products
              id={12329}
              title="The Lean Startup"
              price={1000}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// For The Slider
function Slider(Counter) {
  const slides = document.querySelectorAll(".homeImg");
  slides.forEach((slide, index) => {
    if (index !== Counter) {
      slide.style.visibility = `hidden`;
      slide.classList.add(`image-${index}`);
    }
  });
  moveCorousal(Counter, slides, slides.length);
}

function moveCorousal(Counter, slides, len) {
  if (slides) {
    if (Counter >= len - 1) Counter = 0;
    else Counter += 1;

    slides.forEach((slide, index) => {
      if (index === Counter) {
        slide.style.visibility = `visible`;
      } else {
        slide.style.visibility = `hidden`;
      }
    });
  }
  setTimeout(() => {
    moveCorousal(Counter, slides, len);
  }, 4000);
}

export default Home;
