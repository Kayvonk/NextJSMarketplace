(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 714:
/***/ (function() {

// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Image from "next/image";
// function Banner() {
//   return (
//     <div className="relative">
//       <div className="absolute w-full h-10 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showStatus={false}
//         showIndicators={false}
//         showThumbs={false}
//         interval={5000}
//       >
//         <div>
//           <img loading="lazy" src="images/electronics.png" alt="ElectronicsBanner" />
//         </div>
//         <div>
//           <img loading="lazy" src="images/music.png" alt="MusicBanner"/>
//         </div>
//         <div>
//           <img loading="lazy" src="images/clothing.png" alt="ClothingBanner"/>
//         </div>
//       </Carousel>
//     </div>
//   );
// }
// export default Banner;

/***/ }),

/***/ 242:
/***/ (function() {

// import React from "react";
// import Product from "./Product";
// import Image from "next/image";
// export default function ProductFeed({ products }) {
//   return (
//        <div className="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:-mt-10 mx-auto">
//       {products
//         .slice(0, 4)
//         .map(({ id, title, price, description, category, image }) => (
//           <Product
//             key={id}
//             id={id}
//             title={title}
//             price={price}
//             description={description}
//             category={category}
//             image={image}
//           />
//         ))}
//       <Image
//         className="col-span-full w-screen"
//         src="images/adventure.png"
//         alt="travel-ad"
//       />
//       <div className="md:col-span-2">
//         {products
//           .slice(4, 5)
//           .map(({ id, title, price, description, category, image }) => (
//             <Product
//               key={id}
//               id={id}
//               title={title}
//               price={price}
//               description={description}
//               category={category}
//               image={image}
//             />
//           ))}
//       </div>
//       {products
//         .slice(5, products.length)
//         .map(({ id, title, price, description, category, image }) => (
//           <Product
//             key={id}
//             id={id}
//             title={title}
//             price={price}
//             description={description}
//             category={category}
//             image={image}
//           />
//         ))}
//     </div>
//   );
// }

/***/ }),

/***/ 936:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./src/components/Banner.js
var Banner = __webpack_require__(714);
var Banner_default = /*#__PURE__*/__webpack_require__.n(Banner);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(49);
;// CONCATENATED MODULE: ./src/components/Header.js






function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center bg-amazon_blue p-1 flex-grow py-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-2 flex items-center flex-grow sm:flex-grow-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/Kshopv2.png",
          className: "cursor-pointer",
          width: 150,
          height: 60,
          objectFit: "contain",
          alt: "KshopLogo"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "hidden sm:flex items-center h-10 rounded-md cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "p-2 h-full 2-6 flex-grow flex-shrink rounded-l-md focus:outline-none",
          type: "text"
        }), /*#__PURE__*/jsx_runtime_.jsx(esm/* SearchIcon */.W1M, {
          className: "h-12 p-4"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "link",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Hello Kay"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-extrabold md:text-sm",
            children: "Account & Lists"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "link",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-extrabold md:text-sm",
            children: " Returns"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-extrabold md:text-sm",
            children: "& Orders"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "relative link flex items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "absolute top-0 right-0 md:right-7 bg-yellow-400 text-center rounded-full px-1 text-black font-bold",
            children: "0"
          }), /*#__PURE__*/jsx_runtime_.jsx(esm/* ShoppingCartIcon */.Q1y, {
            className: "h-10"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "hidden md:inline mt-2 font-extrabold md:text-sm",
            children: "Cart"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center space-x-4 p-2 pl-6 bg-amazon_blue-light text-white text-sm",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "link flex items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* MenuIcon */.Oqj, {
          className: "h-6 mr-1"
        }), "All"]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link",
        children: "Video"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link",
        children: "Business"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link ",
        children: "Today's Deals"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden md:inline-flex",
        children: "Electronics"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden md:inline-flex",
        children: "Food & Grocery"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden md:inline-flex",
        children: "Premium"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden md:inline-flex",
        children: "Buy Again"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden md:inline-flex",
        children: "Shopper Toolkit"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden md:inline-flex",
        children: "Health & Personal Care"
      })]
    })]
  });
}

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: ./src/components/ProductFeed.js
var ProductFeed = __webpack_require__(242);
var ProductFeed_default = /*#__PURE__*/__webpack_require__.n(ProductFeed);
;// CONCATENATED MODULE: ./src/pages/index.js






function Home({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: " KShop"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx((Banner_default()), {}), /*#__PURE__*/jsx_runtime_.jsx((ProductFeed_default()), {
        products: products
      })]
    })]
  });
}
async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json());
  return {
    props: {
      products: products
    }
  };
}

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,383], function() { return __webpack_exec__(936); });
module.exports = __webpack_exports__;

})();