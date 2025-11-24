import { Link } from "react-router-dom";
import styles from "./TeeProducts.module.css";
import { useCart } from "../../../hooks/useCart";
import { useRef, useState } from "react";

export default function TeeProducts() {
  const { tempTeeProducts } = useCart();
  return (
    <div className="row g-4 border-bottom">
      {tempTeeProducts.map((product) => (
        <TeeProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
function TeeProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const imgRef = useRef();
  function onMouseEnter() {
    imgRef.current.src = product.hoverImg;
    setHovered(!hovered);
  }
  function onMouseLeave() {
    imgRef.current.src = product.img;
    setHovered(!hovered);
  }
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <div
        className={styles.productCard}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Link to={`/tees/${product.id}`}>
          <span className={styles.saleBadge}>SALE</span>
          <img
            src={product.img}
            className={`card-img-top ${styles.productImg} `}
            alt={product.name}
            ref={imgRef}
            style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
          />
          <div className={`${styles.cardBody} d-flex flex-column gap-2`}>
            <p className={`text-uppercase text-muted mb-1 ${styles.small} `}>
              Decked Out
            </p>
            <h6 className="card-title fw-bold">{product.name}</h6>
            <p className="d-flex align-items-center gap-3 ">
              <span className={styles.oldPrice}>{product.oldPriceText}</span>
              <span className={styles.newPrice}>{product.newPriceText}</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
