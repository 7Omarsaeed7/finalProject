import { createContext, useEffect, useState } from "react";
const tempDenimProducts = [
  {
    img: "https://shopdeckedout.com/cdn/shop/files/15_adf3dd4d-98bf-4dcd-8133-61aface1a446.png?v=1744208941&width=1280",
    hoverImg:
      "https://shopdeckedout.com/cdn/shop/files/33_510c3629-8c96-49d4-b825-be61a7d5f62a.png?v=1744208941&width=1280",
    name: "Big Air in Black",
    oldPriceText: "LE 2,000.00",
    newPriceText: "LE 1,300.00",
    oldPrice: 2000,
    newPrice: 1300,
    id: 1,
  },
  {
    img: "https://shopdeckedout.com/cdn/shop/files/60_4349652f-8e53-4e46-a00f-4234a28277f0.png?v=1744209247&width=1280",
    hoverImg:
      "https://shopdeckedout.com/cdn/shop/files/47_3cf49442-d5ed-496b-a576-fa3245d8a814.png?v=1744209247&width=1280",

    name: "Big Air in Grey",
    oldPriceText: "LE 2,000.00",
    newPriceText: "LE 1,300.00",
    newPrice: 1300,
    oldPrice: 2000,
    id: 2,
  },
  {
    img: "https://shopdeckedout.com/cdn/shop/files/65_b33655da-f48f-4d8c-86e9-9121c5739bb9.png?v=1744210589&width=1280",
    hoverImg:
      "https://shopdeckedout.com/cdn/shop/files/24_220d6cdf-6504-4809-88c0-bbdef644fc13.png?v=1744210589&width=1280",

    name: "Big Air In Indigo",
    oldPriceText: "LE 2,000.00",
    newPriceText: "LE 1,300.00",
    newPrice: 1300,
    oldPrice: 2000,
    id: 3,
  },
  {
    img: "https://shopdeckedout.com/cdn/shop/files/34_54e69f0e-4d2e-482d-9258-4c1a3b25e77c.png?v=1744209915&width=1280",
    hoverImg:
      "https://shopdeckedout.com/cdn/shop/files/4_ac462ad1-be13-46ec-8626-6892e790f447.png?v=1744209915&width=1280",

    name: "Big Air in Light Blue",
    oldPriceText: "LE 2,000.00",
    newPriceText: "LE 1,300.00",
    newPrice: 1300,
    oldPrice: 2000,
    id: 4,
  },
];
const tempTeeProducts = [
  {
    img: "https://shopdeckedout.com/cdn/shop/files/89_9177566d-035c-4562-b622-8fbd4c9fa8cb.png?v=1754404657&width=1280",
    hoverImg:
      "https://shopdeckedout.com/cdn/shop/files/112_2946c737-b270-4906-a4f5-da574a1d0358.png?v=1753886592&width=1280",
    name: "Boxed Out Basic",
    oldPriceText: "LE 1,000.00",
    newPriceText: "LE 600.00",
    newPrice: 600,
    oldPrice: 1000,
    id: 10,
  },
  {
    img: "https://shopdeckedout.com/cdn/shop/files/65_0ff9b914-cf2c-43a4-9e57-a8d3592c1fe4.png?v=1754406325&width=1280",
    hoverImg:
      "https://shopdeckedout.com/cdn/shop/files/30_40dff097-9d45-438b-a601-ba9645331ce4.png?v=1754406325&width=1280",
    name: "The Baby Basic",
    oldPriceText: "LE 600.00",
    newPriceText: "LE 380.00",
    newPrice: 380,
    oldPrice: 600,
    id: 20,
  },
  {
    img: "https://shopdeckedout.com/cdn/shop/files/101_e90de36e-c1c3-4390-b51f-44e827cd7b21.png?v=1751385449&width=1280",
    hoverImg:
      "https://shopdeckedout.com/cdn/shop/files/77_a79c0b00-8a6b-4183-87f6-004d1f47931c.png?v=1751385449&width=1280",
    name: "DO:03 Boxy Earth",
    oldPriceText: "LE 780.00",
    newPriceText: "LE 585.00",
    newPrice: 585,
    oldPrice: 780,
    id: 30,
  },
  {
    img: "https://shopdeckedout.com/cdn/shop/files/119_fe6f47d8-9748-4396-87c4-b67b106ead60.png?v=1751385518&width=1280",
    hoverImg:
      "https://shopdeckedout.com/cdn/shop/files/144_986dc0d4-5fe5-4e53-a357-655082286fac.png?v=1751385518&width=1280",
    name: "DO:02 Boxy Blank",
    oldPriceText: "LE 780.00",
    newPriceText: "LE 585.00",
    newPrice: 585,
    oldPrice: 780,
    id: 40,
  },
];
const tempAllProducts = [
  {
    img: "https://shopdeckedout.com/cdn/shop/files/15_adf3dd4d-98bf-4dcd-8133-61aface1a446.png?v=1744208941&width=1280",
    name: "Big Air in Black",
    oldPriceText: "LE 2,000.00",
    newPriceText: "LE 1,300.00",
    availableSizes: [
      { size: "XS", quantity: 40 },
      { size: "S", quantity: 40 },
      { size: "M", quantity: 40 },
      { size: "L", quantity: 40 },
    ],
    newPrice: 1300,
    oldPrice: 2000,
    id: 1,
  },
  {
    img: "https://shopdeckedout.com/cdn/shop/files/60_4349652f-8e53-4e46-a00f-4234a28277f0.png?v=1744209247&width=1280",
    name: "Big Air in Grey",
    oldPriceText: "LE 2,000.00",
    newPriceText: "LE 1,300.00",
    availableSizes: [
      { size: "XS", quantity: 40 },
      { size: "S", quantity: 40 },
      { size: "M", quantity: 40 },
      { size: "L", quantity: 40 },
    ],

    newPrice: 1300,
    oldPrice: 2000,
    id: 2,
  },
  {
    img: "https://shopdeckedout.com/cdn/shop/files/65_b33655da-f48f-4d8c-86e9-9121c5739bb9.png?v=1744210589&width=1280",
    name: "Big Air In Indigo",
    oldPriceText: "LE 2,000.00",
    newPriceText: "LE 1,300.00",
    availableSizes: [
      { size: "XS", quantity: 40 },
      { size: "S", quantity: 40 },
      { size: "M", quantity: 40 },
      { size: "L", quantity: 40 },
    ],

    newPrice: 1300,
    oldPrice: 2000,
    id: 3,
  },
  {
    img: "https://shopdeckedout.com/cdn/shop/files/34_54e69f0e-4d2e-482d-9258-4c1a3b25e77c.png?v=1744209915&width=1280",
    name: "Big Air in Light Blue",
    oldPriceText: "LE 2,000.00",
    newPriceText: "LE 1,300.00",
    availableSizes: [
      { size: "XS", quantity: 40 },
      { size: "S", quantity: 40 },
      { size: "M", quantity: 40 },
      { size: "L", quantity: 40 },
    ],

    newPrice: 1300,
    oldPrice: 2000,
    id: 4,
  },
  //
  {
    img: "https://shopdeckedout.com/cdn/shop/files/89_9177566d-035c-4562-b622-8fbd4c9fa8cb.png?v=1754404657&width=1280",
    name: "Boxed Out Basic",
    oldPriceText: "LE 1,000.00",
    newPriceText: "LE 600.00",
    availableSizes: [
      { size: "XS", quantity: 40 },
      { size: "S", quantity: 40 },
      { size: "M", quantity: 40 },
      { size: "L", quantity: 40 },
    ],

    newPrice: 600,
    oldPrice: 1000,
    id: 10,
  },
  {
    img: "https://shopdeckedout.com/cdn/shop/files/65_0ff9b914-cf2c-43a4-9e57-a8d3592c1fe4.png?v=1754406325&width=1280",
    name: "The Baby Basic",
    oldPriceText: "LE 600.00",
    newPriceText: "LE 380.00",
    availableSizes: [
      { size: "XS", quantity: 40 },
      { size: "S", quantity: 40 },
      { size: "M", quantity: 40 },
      { size: "L", quantity: 40 },
    ],

    newPrice: 380,
    oldPrice: 600,
    id: 20,
  },
  {
    img: "https://shopdeckedout.com/cdn/shop/files/101_e90de36e-c1c3-4390-b51f-44e827cd7b21.png?v=1751385449&width=1280",
    name: "DO:03 Boxy Earth",
    oldPriceText: "LE 780.00",
    newPriceText: "LE 585.00",
    availableSizes: [
      { size: "XS", quantity: 40 },
      { size: "S", quantity: 40 },
      { size: "M", quantity: 40 },
      { size: "L", quantity: 40 },
    ],
    newPrice: 585,
    oldPrice: 780,
    id: 30,
  },
  {
    img: "https://shopdeckedout.com/cdn/shop/files/119_fe6f47d8-9748-4396-87c4-b67b106ead60.png?v=1751385518&width=1280",
    name: "DO:02 Boxy Blank",
    oldPriceText: "LE 780.00",
    newPriceText: "LE 585.00",
    availableSizes: [
      { size: "XS", quantity: 40 },
      { size: "S", quantity: 40 },
      { size: "M", quantity: 40 },
      { size: "L", quantity: 40 },
    ],

    newPrice: 585,
    oldPrice: 780,
    id: 40,
  },
];
const CartContext = createContext();
function CartProvider({ children }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [CollectionIsOpen, setCollectionIsOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isTrash, setIsTrash] = useState(false);
  const [productCounter, setProductCounter] = useState(1);
  const noCartProducts = cartProducts.length;
  const TotalCheckOut = cartProducts.length
    ? cartProducts.reduce((acc, p) => acc + p.price * p.counter, 0)
    : 0;
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);
  function addToCart(product, newSelectedSize = "XS", counter = 1) {
    console.log(newSelectedSize);
    setCartIsOpen((cartIsOpen) => !cartIsOpen);
    setCartProducts((cartProducts) => {
      const exists = cartProducts.find(
        (p) => p.id === product.id && p.selectedSize === newSelectedSize
      );

      if (exists) {
        return cartProducts.map((p) =>
          p.id === product.id && p.selectedSize === newSelectedSize
            ? {
                ...p,
                counter: counter,
                oldPrice: p.oldPrice,
                selectedSize: newSelectedSize,
                totalProductPrice: counter * p.price,
              }
            : p
        );
      }

      return [
        ...cartProducts,
        {
          id: product.id,
          name: product.name,
          img: product.img,
          selectedSize: newSelectedSize,
          counter: counter,
          price: product.newPrice,
          oldPrice: product.oldPrice,
          totalProductPrice: product.newPrice * counter,
        },
      ];
    });
  }

  function handleUpdateCounter(id, newCounter, newSelectedSize) {
    setCartProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.selectedSize === newSelectedSize
          ? {
              ...p,
              counter: newCounter,
              totalProductPrice: p.price * newCounter,
            }
          : p
      )
    );
  }

  function onHandleTrashClick(id, newSelectedSize) {
    setCartProducts((cartProducts) =>
      cartProducts.filter(
        (product) =>
          !(product.id === id && product.selectedSize === newSelectedSize)
      )
    );
  }
  function onMouseEnter(imgRef, product) {
    imgRef.current.src = product.hoverImg;
    setHovered(!hovered);
  }
  function onMouseLeave(imgRef, product) {
    imgRef.current.src = product.img;
    setHovered(!hovered);
  }
  return (
    <CartContext.Provider
      value={{
        cartIsOpen: cartIsOpen,
        setCartIsOpen: setCartIsOpen,
        searchIsOpen: searchIsOpen,
        setSearchIsOpen: setSearchIsOpen,
        menuIsOpen: menuIsOpen,
        setMenuIsOpen: setMenuIsOpen,
        CollectionIsOpen: CollectionIsOpen,
        setCollectionIsOpen: setCollectionIsOpen,
        cartProducts: cartProducts,
        setCartProducts: setCartProducts,
        isTrash: isTrash,
        setIsTrash: setIsTrash,
        productCounter: productCounter,
        setProductCounter: setProductCounter,
        onHandleTrashClick: onHandleTrashClick,
        onHandleAddToCart: addToCart,
        noCartProducts: noCartProducts,
        TotalCheckOut: TotalCheckOut,
        handleUpdateCounter: handleUpdateCounter,
        tempDenimProducts: tempDenimProducts,
        tempTeeProducts: tempTeeProducts,
        tempAllProducts: tempAllProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
