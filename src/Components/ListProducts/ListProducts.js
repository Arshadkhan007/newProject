import "./ListProducts.css";
import Products from "../Products/Products";
const ListProducts = () => {
  return (
    <>
      <div className="ListofProducts">
        <div className="ProductListRow">
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
        <div className="ProductListRow">
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

        {/* Fourth Row */}
        <div className="ProductListRow">
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
    </>
  );
};
export default ListProducts;
