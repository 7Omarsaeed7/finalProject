import { useEffect, useRef } from "react";
import { useCart } from "../../../hooks/useCart";
import styles from "./SearchDrawer.module.css";
// import man from "../../../assets/home-page/man.webp";
export default function SearchDrawer() {
  const { searchIsOpen, setSearchIsOpen } = useCart();
  const searchInput = useRef();
  useEffect(() => {
    searchInput.current.focus();
  }, [searchIsOpen]);
  return (
    <div
      className={`${styles.searchDrawer} ${
        searchIsOpen ? "showDrawer" : "hideDrawer"
      }`}
    >
      {/* initial-state */}
      <div className={styles.searchHeader}>
        <input
          type="search"
          placeholder="Search for anything"
          ref={searchInput}
        />
        <i
          className="fa-solid fa-xmark"
          onClick={() => setSearchIsOpen((searchIsOpen) => !searchIsOpen)}
        ></i>
      </div>
      {/* search products */}
      {/* <div className="search-products">
        <div className="wrapper row mb-3 align-items-center gap-2">
          <p className="text-center text-capitalize py-4 search-head">
            products
          </p>
          <div className="search-product-img col-3">
            <img src={man} alt="" className="img-fluid" />
          </div>
          <div className="product-details-search col-6 row align-items-center gap-4">
            <div className={styles.productName}>
              <h6>
                <a href="">Boxed Out Basic</a>
              </h6>
              <div className="product-price d-flex gap-5 align-items-center">
                <span className="old-price">LE 750</span>
                <span className="new-price">LE 600</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* no products */}
      {/* <div
        className={`${styles.noProductFound} d-flex flex-column align-items-center`}
      >
        <p>no products found</p>
      </div> */}
    </div>
  );
}
