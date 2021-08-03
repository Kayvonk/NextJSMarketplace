(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 112:
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(49);
;// CONCATENATED MODULE: ./components/Header.js






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
;// CONCATENATED MODULE: ./pages/index.js






function Home({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: " KShop"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {})]
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
var __webpack_exports__ = __webpack_require__.X(0, [597,383], function() { return __webpack_exec__(112); });
module.exports = __webpack_exports__;

})();