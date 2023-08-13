 
import "./skills.css"
import { useEffect, useState } from "react";  
import ProductItem from "./productItem";
import Cart from "./cartItem";
import { FormattedMessage, IntlProvider } from "react-intl"; 
import FooterComponent from "../../Component/Footer/Footer";
const getProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log({
      error,
    });
    return [];
  }
};
function Skills() { 
  const [locale, setLocale] = useState("en");
  const [x, setx] = useState("ltr");
  const [messages, setMessages] = useState({ 
  })
  useEffect(() => {
    import(`../../Locals/${locale}.json`).then((messages) => {
      console.log({
        messages,
      });
      setMessages(messages);
    });
  }, [locale ,x]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); 
  const handleAddToCart = (product) => {
    // console.log("product", product
    setCart((cart) => {
      return [...cart, product];
    });
    setProducts((products) => {
      return products.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            isInCart: true,
          };
        }
        return p;
      });
    });
  };

 
const handleRemoveFromCart = (product) => {
    setCart((cart) => {
      return cart.filter((p) => p.id !== product.id);
    });
    setProducts((products) => {
      return products.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            isInCart: false,
          };
        }
        return p;
      });
    });
  }; 
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products);
    });
  }, []);
  return (
    <>
    <IntlProvider messages={messages} key={locale} locale={locale}>
    <div className="app " style={{direction:x}}>
      <header className="app-header">
        <div className="wrapper">
          
          <div>
          <FormattedMessage id="app.name" defaultMessage={"Simple Store"} />
          </div>
          <div>
            <Cart cart={cart} removeItem={handleRemoveFromCart} />
            <select
                onChange={(e) => {
                  setLocale(e.target.value);
                  setx(x==="ltr"?"rtl":"ltr")
                }}
                value={locale}
                name="language-select"
                id="language-select"
                className="select-input"
              >
                <option value="ar">عربي</option>
                <option value="en">English</option>
              </select>
          </div>
        </div>
      </header>
      <main className="app-main">
        <div className="wrapper">
          <section className="products app-section">
            <div className="wrapper">
              <header className="section-header products-header">
                <div className="wrapper">
                  <h2 className="caption">  <FormattedMessage
                        id="app.products.caption"
                        defaultMessage={"Browse our products"}
                      /></h2>
                  <p className="text">
                  <FormattedMessage
                        id="app.products.text"
                        defaultMessage={"We have a wide range of products to choose from. Browse our products and add them to your cart."}
                      />
                  </p>
                </div>
              </header>
              <ul className="products-list">
                {products.map((product) => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    addToCart={handleAddToCart}
                  />
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
    </IntlProvider>
    <FooterComponent></FooterComponent>
    </>
  );
}
export default Skills;