"use strict";
(() => {
var exports = {};
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 6942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ cartState),
/* harmony export */   "S": () => (/* binding */ addToCartProductInfo)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const cartState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "cartState",
    default: {
    }
});
const addToCartProductInfo = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "addToCartProductInfo ",
    default: []
});


/***/ }),

/***/ 5350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useScript = (url)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
        return ()=>{
            document.body.removeChild(script);
        };
    }, [
        url
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScript);


/***/ }),

/***/ 4739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_electronicsPart),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./atom/addTocartAtom.js
var addTocartAtom = __webpack_require__(6942);
;// CONCATENATED MODULE: ./atom/FilterProducts.js

const productState = (0,external_recoil_.atom)({
    key: "productState",
    default: [
        {
            name: "Grapes",
            picture: "🍇",
            price: 481,
            type: "fruit",
            id: 1
        },
        {
            name: "Melon",
            picture: "🍈",
            price: 426,
            type: "fruit",
            id: 2
        },
        {
            name: "Spoon",
            picture: "🥄",
            price: 293,
            type: "utensils",
            id: 114
        }, 
    ]
});
const viewState = (0,external_recoil_.atom)({
    key: "viewState",
    default: "column"
});
const searchTextState = (0,external_recoil_.atom)({
    key: "searchTextState",
    default: ""
});
const productFilteredState = (0,external_recoil_.atom)({
    key: "productFilteredState",
    default: ""
});
const filteredProducts1 = (0,external_recoil_.selector)({
    key: "filteredProducts",
    get: ({ get  })=>{
        const products = get(productState);
        const searchText = get(searchTextState);
        const filterItem = get(productFilteredState);
        let filteredProducts = [];
        filteredProducts = products.filter((product)=>product.name.includes(searchText)
        ).filter((product)=>filterItem == "" ? true : product.type == filterItem
        );
        return filteredProducts;
    }
});


// EXTERNAL MODULE: ./commonFunction/ReloadJs.js
var ReloadJs = __webpack_require__(5350);
;// CONCATENATED MODULE: ./pages/electronicsPart.jsx








function electronicsPart(props) {
    (0,ReloadJs/* default */.Z)("/assets/js/main.min.js");
    const [cart, setCart] = (0,external_recoil_.useRecoilState)(addTocartAtom/* cartState */.d);
    const [productCartInfo, updateProductCartInfo] = (0,external_recoil_.useRecoilState)(addTocartAtom/* addToCartProductInfo */.S);
    const [filter, setFilter] = (0,external_recoil_.useRecoilState)(productFilteredState);
    const cartUpdate = async (item)=>{
        setCart({
            ...cart,
            [item.id]: (cart[item.id] || 0) + 1
        });
        const dsfsd = JSON.parse(item.img);
        const img = dsfsd[0];
        updateProductCartInfo({
            ...productCartInfo,
            [item.id]: [
                item.id,
                item.name,
                item.buyPrice,
                img
            ]
        });
    };
    const cartRemove = async (item)=>{
        const copy = {
            ...cart
        };
        if (copy[item.id] === 1) {
            delete copy[item.id];
            setCart(copy);
        } else {
            setCart({
                ...copy,
                [item.id]: copy[item.id] - 1
            });
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: "main",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "breadcrumb-nav",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "breadcrumb bb-no",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Home"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "shop-banner-sidebar.html",
                                        children: "Categories"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Shop"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "page-content",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "shop-default-banner banner d-flex align-items-center mb-5 br-xs",
                                style: {
                                    backgroundImage: "url(assets/images/shop/banner1.jpg)",
                                    backgroundColor: "#FFC74E"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "banner-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "banner-subtitle font-weight-bold",
                                            children: "Accessories Collection"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "banner-title text-white text-uppercase font-weight-bolder ls-normal",
                                            children: "Smart Wrist Watches"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "shop-banner-sidebar.html",
                                            className: "btn btn-dark btn-rounded btn-icon-right",
                                            children: [
                                                "Discover Now",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "w-icon-long-arrow-right"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "shop-content row gutter-lg mb-10",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                                        className: "sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "sidebar-overlay"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "sidebar-close",
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "close-icon"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "sidebar-content scrollable",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "sticky-sidebar",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "filter-actions",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    children: "Filter :"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    className: "btn btn-dark btn-link filter-clean",
                                                                    children: "Clean All"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "widget widget-collapsible",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "widget-title",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "All Categories"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "widget widget-collapsible",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "widget-title",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Prices"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                    value: filter,
                                                                    onChange: (e)=>setFilter(e.target.value)
                                                                    ,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "",
                                                                            children: "show all"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "fruit",
                                                                            children: "fruit"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "vegetables",
                                                                            children: "vegatables"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "meals",
                                                                            children: "meals"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "beverages",
                                                                            children: "beverages"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "utensils",
                                                                            children: "utensils"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "widget-body",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                            value: filter,
                                                                            onChange: (e)=>setFilter(e.target.value)
                                                                            ,
                                                                            className: "filter-items search-ul",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        href: "#",
                                                                                        children: "$0.00 - $100.00"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        href: "#",
                                                                                        children: "$100.00 - $200.00"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        href: "#",
                                                                                        children: "$200.00 - $300.00"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        href: "#",
                                                                                        children: "$300.00 - $500.00"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        href: "#",
                                                                                        children: "$500.00+"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                                            className: "price-range",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                    type: "number",
                                                                                    name: "min_price",
                                                                                    className: "min_price text-center",
                                                                                    placeholder: "$min"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "delimiter",
                                                                                    children: "-"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                    type: "number",
                                                                                    name: "max_price",
                                                                                    className: "max_price text-center",
                                                                                    placeholder: "$max"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "btn btn-primary btn-rounded",
                                                                                    children: "Go"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "widget widget-collapsible",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "widget-title",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Size"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: "widget-body filter-items item-check mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Extra Large"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Large"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Medium"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Small"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "widget widget-collapsible",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "widget-title",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Brand"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: "widget-body filter-items item-check mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Elegant Auto Group"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Green Grass"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Node Js"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "NS8"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Red"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Skysuite Tech"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Sterling"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "widget widget-collapsible",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "widget-title",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Color"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: "widget-body filter-items item-check mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Black"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Blue"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Brown"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Green"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Grey"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Orange"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Yellow"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-content",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                                className: "toolbox sticky-toolbox sticky-content fix-top",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "toolbox-left",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                className: "btn btn-primary btn-outline btn-rounded left-sidebar-toggle btn-icon-left d-block d-lg-none",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "w-icon-category"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Filters"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "toolbox-item toolbox-sort select-box text-dark",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                        children: "Sort By :"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                        name: "orderby",
                                                                        className: "form-control",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                value: "default",
                                                                                selected: "selected",
                                                                                children: "Default sorting"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                value: "popularity",
                                                                                children: "Sort by popularity"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                value: "rating",
                                                                                children: "Sort by average rating"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                value: "date",
                                                                                children: "Sort by latest"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                value: "price-low",
                                                                                children: "Sort by pric: low to high"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                value: "price-high",
                                                                                children: "Sort by price: high to low"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "toolbox-right",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "toolbox-item toolbox-show select-box",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                    name: "count",
                                                                    className: "form-control",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: 9,
                                                                            children: "Show 9"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: 12,
                                                                            selected: "selected",
                                                                            children: "Show 12"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: 24,
                                                                            children: "Show 24"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: 36,
                                                                            children: "Show 36"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "toolbox-item toolbox-layout",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "shop-banner-sidebar.html",
                                                                        className: "icon-mode-grid btn-layout active",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "w-icon-grid"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "shop-list.html",
                                                                        className: "icon-mode-list btn-layout",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "w-icon-list"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                                className: "category-section top-category bg-grey pt-10 pb-10 appear-animate",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "container pb-2",
                                                    children: props.getCatagoryWisieProduct.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "product-wrapper-1 appear-animate mb-5",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "title-link-wrapper pb-1 mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                            className: "title ls-normal mb-0",
                                                                            children: item.title
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "shop-boxed-banner.html",
                                                                            className: "font-size-normal font-weight-bold ls-25 mb-0",
                                                                            children: [
                                                                                "More Products",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "w-icon-long-arrow-right"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "row",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-lg-12 col-sm-12",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "swiper-container swiper-theme",
                                                                            "data-swiper-options": "{ 'spaceBetween': 20, 'slidesPerView': 2, 'breakpoints': { '992': { 'slidesPerView': 6 }, '1200': { 'slidesPerView': 6 } } }",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "swiper-wrapper row cols-xl-3 cols-lg-3 cols-2",
                                                                                    children: item.products.map((item1, index1)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                            className: "swiper-slide product-col",
                                                                                            style: {
                                                                                                margin: "25px"
                                                                                            },
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                className: "product-wrap product text-center",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                    className: "product product-slideup-content",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                                                                                                            className: "product-media",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                                                    href: "/product-details/[productId]",
                                                                                                                    as: `/product-details/${item1.id}`,
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                                                            src: "http://192.168.1.13:4000" + "/upload/" + JSON.parse(item1.img),
                                                                                                                            alt: "Product",
                                                                                                                            style: {
                                                                                                                                width: "400px",
                                                                                                                                height: "200px"
                                                                                                                            }
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                                    className: "product-label-group",
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                                                        className: "product-label label-discount",
                                                                                                                        children: "-25%"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                                    className: "product-action-vertical",
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                                        href: "#",
                                                                                                                        className: "btn-product-icon btn-quickview w-icon-search",
                                                                                                                        title: "Quick View"
                                                                                                                    })
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                            className: "product-details",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                                                                    className: "product-name",
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                                                        href: "/product-details/[productId]",
                                                                                                                        as: `/product-details/${item.id}`,
                                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                                            children: item1.name
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                                    className: "ratings-container",
                                                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                                        className: "ratings-full",
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                                className: "ratings",
                                                                                                                                style: {
                                                                                                                                    width: "100%"
                                                                                                                                }
                                                                                                                            }),
                                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                                className: "tooltiptext tooltip-top"
                                                                                                                            })
                                                                                                                        ]
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                                    className: "product-price",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("ins", {
                                                                                                                            className: "new-price",
                                                                                                                            children: item1.realPrice
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("del", {
                                                                                                                            className: "old-price",
                                                                                                                            children: item1.buyPrice
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                            className: "product-hidden-details",
                                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                                className: "product-action",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                                                        href: "#",
                                                                                                                        className: "btn-product btn-cart",
                                                                                                                        title: "Add to Cart",
                                                                                                                        onClick: ()=>cartUpdate(item1)
                                                                                                                        ,
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                                className: "w-icon-cart"
                                                                                                                            }),
                                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                                children: "Add To Cart"
                                                                                                                            })
                                                                                                                        ]
                                                                                                                    }),
                                                                                                                    cart[item1.id] && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                                                                        className: "btn-product btn-cart",
                                                                                                                        onClick: ()=>{
                                                                                                                            cartRemove(item1);
                                                                                                                        },
                                                                                                                        children: "Remove"
                                                                                                                    })
                                                                                                                ]
                                                                                                            })
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            })
                                                                                        }, index1)
                                                                                    )
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "swiper-pagination"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }, index)
                                                    )
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "toolbox toolbox-pagination justify-content-between",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "showing-info mb-2 mb-sm-0",
                                                        children: [
                                                            "Showing",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "1-12 of 60"
                                                            }),
                                                            "Products"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "pagination",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "prev disabled",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#",
                                                                    "aria-label": "Previous",
                                                                    tabIndex: -1,
                                                                    "aria-disabled": "true",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "w-icon-long-arrow-left"
                                                                        }),
                                                                        "Prev"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "page-item active",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "page-link",
                                                                    href: "#",
                                                                    children: "1"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "page-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "page-link",
                                                                    href: "#",
                                                                    children: "2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "next",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#",
                                                                    "aria-label": "Next",
                                                                    children: [
                                                                        "Next",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "w-icon-long-arrow-right"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    }));
}
async function getServerSideProps(context) {
    const { data: getCatagory  } = await external_axios_default().get("http://192.168.1.13:4000" + "/GetInformationSingle/category&chk=1");
    const { data: getCatagoryWisieProduct  } = await external_axios_default().get("http://192.168.1.13:4000" + "/api/ev1/GetCategoryWishProduct");
    const { data: getAllBrand  } = await external_axios_default().get("http://192.168.1.13:4000" + "/GetInformationSingle/categoryBrand&chk=1");
    return {
        props: {
            getCatagory,
            getAllBrand,
            getCatagoryWisieProduct
        }
    };
}
/* harmony default export */ const pages_electronicsPart = (electronicsPart);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,63], () => (__webpack_exec__(4739)));
module.exports = __webpack_exports__;

})();