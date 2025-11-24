import styles from "./CheckOutPage.module.css";
import logo from "../../assets/deckedout-logo.webp";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
export default function CheckOutPage() {
  const [isOpen, setIsOpen] = useState(false);
  const SHIPPING_VALUE = 110;
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <MainContent SHIPPING_VALUE={SHIPPING_VALUE} isOpen={isOpen} />
    </>
  );
}
function Header({ setIsOpen }) {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div
            className={styles.cartIcon}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            🛒
          </div>
        </div>
      </div>
    </div>
  );
}
function MainContent({ SHIPPING_VALUE, isOpen }) {
  return (
    <div className={styles.mainContainer}>
      <div className="row">
        {/* <!-- Checkout Form --> */}
        <div className="col-12 order-2 order-md-1 col-md-7">
          <form className={styles.checkoutForm}>
            <ContactSection />
            <DeliverySection />
            <ShippingMethod SHIPPING_VALUE={SHIPPING_VALUE} />
            <PaymentSection />
            {/* <!-- Pay Button --> */}
            <input type="submit" className={styles.payBtn} value="Pay now" />

            {/* <!-- Footer --> */}
            <div className={styles.footerText}>
              All rights reserved Decked Out
            </div>
          </form>
        </div>
        <OrderSummary SHIPPING_VALUE={SHIPPING_VALUE} isOpen={isOpen} />
      </div>
    </div>
  );
}
function ContactSection() {
  return (
    <div className="mb-4 contact-form ">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className={`${styles.sectionTitle} mb-0`}>Contact</h2>
      </div>
      <input type="email" className="form-control" placeholder="Email" />
      <div className="form-check mt-2 d-flex align-items-center gap-3">
        <input className="form-check-input" type="checkbox" id="emailOffers" />
        <label className="form-check-label" htmlFor="emailOffers">
          Email me with news and offers
        </label>
      </div>
    </div>
  );
}
function DeliverySection() {
  return (
    <div className="mb-4">
      <h2 className={styles.sectionTitle}>Delivery</h2>
      <div className="mb-3">
        <label className="form-label">Country/Region</label>
        <select className="form-select formSelectt">
          <option>Egypt</option>
        </select>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control "
            placeholder="First name"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control "
            placeholder="Last name"
            required
          />
        </div>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control "
          placeholder="Address"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control "
          placeholder="Apartment, suite, etc."
          required
        />
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            required
          />
        </div>
        <div className="col-md-8">
          <select className="form-select formSelectt">
            <option>Cairo</option>
            <option>Alexandria</option>
            <option>Port Said</option>
            <option>Suez</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <input
          type="tel"
          className="form-control"
          placeholder="Phone"
          required
        />
      </div>
      <div className="form-check d-flex align-items-center gap-3">
        <input className="form-check-input" type="checkbox" id="saveInfo" />
        <label className="form-check-label" htmlFor="saveInfo">
          Save this information for next time
        </label>
      </div>
    </div>
  );
}
function ShippingMethod({ SHIPPING_VALUE }) {
  return (
    <div className="mb-4">
      <h2 className={styles.sectionTitle}>Shipping method</h2>
      <div className={`${styles.shippingMethod} ${styles.active}`}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <input type="radio" name="shipping" checked className="me-2" />
            <span>Deliver To My Door Step</span>
          </div>
          <span className="fw-bold">{SHIPPING_VALUE} LE</span>
        </div>
      </div>
    </div>
  );
}
function PaymentSection() {
  return (
    <div className="mb-4">
      <h2 className={styles.sectionTitle}>Payment</h2>
      <div className={`${styles.paymentMethod} ${styles.active}`}>
        <div className="d-flex align-items-center">
          <input type="radio" name="payment" checked className="me-2" />
          <span>Cash on Delivery (COD)</span>
        </div>
      </div>
    </div>
  );
}
function OrderSummary({ SHIPPING_VALUE, isOpen }) {
  const { cartProducts, TotalCheckOut, noCartProducts } = useCart();
  console.log(cartProducts)
  return (
    <div
      className={`col-12 order-1 order-md-2 col-md-5  ${
        isOpen ? "d-block" : "d-none"
      }  d-md-block`}
    >
      <div className={styles.orderSummary}>
        {/* <!-- Product Item --> */}
        {cartProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}

        {/* <!-- Discount Code --> */}
        <div className={`${styles.discountInput} mb-4`}>
          <input
            type="text"
            className="form-control"
            placeholder="Discount code"
          />
          <button className={styles.applyBtn}>Apply</button>
        </div>

        {/* <!-- Summary --> */}
        <div className={`${styles.summaryRow} d-flex `}>
          <span>Subtotal</span>
          <div className="d-flex flex-column">
            {noCartProducts > 0 &&
              cartProducts.map((product) => (
                <SubTotal product={product} key={product.id} />
              ))}
          </div>
        </div>
        <div className={styles.summaryRow}>
          <span>Shipping</span>
          <span>{SHIPPING_VALUE} LE</span>
        </div>

        {/* <!-- Total --> */}
        <div className={styles.totalRow}>
          <span>Total</span>
          <div>
            <span className={styles.oldPrice}>
              {noCartProducts > 0 &&
                cartProducts.reduce(
                  (acc, product) => acc + product.oldPrice * product.counter,
                  0
                )}
                  LE
            </span>
            <span>{TotalCheckOut + SHIPPING_VALUE} LE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function SubTotal({ product }) {
  return (
    <span>
      {product.counter} x {product.price} LE
    </span>
  );
}
function ProductItem({ product }) {
  const id = product.id;
  return (
    <div className={styles.productItem}>
      <div className={styles.productImage}>
        <div className={styles.productBadge}>{product.counter}</div>
        <img src={product.img} alt={product.name} className="img-fluid" />
      </div>
      <div className={styles.productInfo}>
        <Link to={`/product/${id}`} className={styles.productName}>
          {product.name}
        </Link>
        <div className={styles.productSize}>{product.selectedSize}</div>
      </div>
      <div className={styles.productPrice}>{product.totalProductPrice} LE</div>
    </div>
  );
}
