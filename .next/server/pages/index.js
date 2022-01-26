"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
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

/***/ 2641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
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
;// CONCATENATED MODULE: ./atom/ListOfVendorAtom.js

const listOfVendorAtom = (0,external_recoil_.atom)({
    key: "listOfVendorAtom",
    default: []
});

// EXTERNAL MODULE: ./commonFunction/ReloadJs.js
var ReloadJs = __webpack_require__(5350);
;// CONCATENATED MODULE: ./component/OurClients.jsx


function OurClients() {
    const arr = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
    ];
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "title title-underline mb-4 ls-normal appear-animate",
                children: "Our Clients"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "swiper-container swiper-theme brands-wrapper mb-9 appear-animate",
                "data-swiper-options": "{ 'spaceBetween': 0, 'slidesPerView': 2, 'breakpoints': { '576': { 'slidesPerView': 3 }, '768': { 'slidesPerView': 4 }, '992': { 'slidesPerView': 5 }, '1200': { 'slidesPerView': 6 } } }",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "swiper-wrapper row gutter-no cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2",
                    children: arr.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "swiper-slide brand-col",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "brand-wrapper",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/images/demos/demo1/brands/1.png",
                                    alt: "Brand",
                                    width: 410,
                                    height: 186
                                })
                            })
                        })
                    )
                })
            })
        ]
    }));
}
/* harmony default export */ const component_OurClients = (OurClients);

;// CONCATENATED MODULE: ./pages/index.jsx









function Home(props) {
    (0,ReloadJs/* default */.Z)("/assets/js/main.min.js");
    const [vendor, updateVendor] = (0,external_recoil_.useRecoilState)(listOfVendorAtom);
    (0,external_react_.useEffect)(()=>{
        updateVendor(props.getVendorInfo);
    }, [
        updateVendor
    ]);
    const [cart, setCart] = (0,external_recoil_.useRecoilState)(addTocartAtom/* cartState */.d);
    const [productCartInfo, updateProductCartInfo] = (0,external_recoil_.useRecoilState)(addTocartAtom/* addToCartProductInfo */.S);
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
    const vendorList = (0,external_recoil_.useRecoilValue)(listOfVendorAtom);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "vendor-banner-section mb-10 mb-lg-7",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "title title-center mb-5",
                                children: "With Banner"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "swiper-container swiper-theme show-code-action",
                                "data-swiper-options": "{ 'spaceBetween': 20, 'slidesPerView': 1, 'breakpoints': { '576': { 'slidesPerView': 2 }, '768': { 'slidesPerView': 3 }, '992': { 'slidesPerView': 4 } } }",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "swiper-wrapper row cols-xl-4 cols-md-3 cols-sm-2 cols-1",
                                        children: props.getCatagory.data.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "swiper-slide vendor-widget",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "vendor-widget-banner",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                            className: "vendor-banner",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/category/[categoryId]",
                                                                as: `/category/${item.id}`,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "https://baybridgebd.com/upload/" + item.desktopicon,
                                                                        alt: "Brand",
                                                                        width: 85,
                                                                        height: 48
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "vendor-details",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                                    className: "vendor-logo",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                        href: "/category/[categoryId]",
                                                                        as: `/category/${item.id}`,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "https://baybridgebd.com/upload/" + item.mobileicon,
                                                                                alt: "Brand",
                                                                                width: 85,
                                                                                height: 48
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "vendor-personal",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: "vendor-name",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                            href: "/category/[categoryId]",
                                                                            as: `/category/${item.id}`,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                children: item.title
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, index)
                                        )
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "swiper-pagination"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "swiper-container appear-animate icon-box-wrapper br-sm mt-6 mb-6",
                        "data-swiper-options": "{ 'slidesPerView': 1, 'loop': false, 'breakpoints': { '576': { 'slidesPerView': 2 }, '768': { 'slidesPerView': 3 }, '1200': { 'slidesPerView': 4 } } }",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "swiper-wrapper row cols-md-4 cols-sm-3 cols-1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "swiper-slide icon-box icon-box-side icon-box-primary",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon-box-icon icon-shipping",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "w-icon-truck"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "icon-box-content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "icon-box-title font-weight-bold mb-1",
                                                    children: "Free Shipping & Returns"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-default",
                                                    children: "For all orders over $99"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "swiper-slide icon-box icon-box-side icon-box-primary",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon-box-icon icon-payment",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "w-icon-bag"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "icon-box-content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "icon-box-title font-weight-bold mb-1",
                                                    children: "Secure Payment"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-default",
                                                    children: "We ensure secure payment"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "swiper-slide icon-box icon-box-side icon-box-primary icon-box-money",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon-box-icon icon-money",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "w-icon-money"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "icon-box-content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "icon-box-title font-weight-bold mb-1",
                                                    children: "Money Back Guarantee"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-default",
                                                    children: "Any back within 30 days"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "swiper-slide icon-box icon-box-side icon-box-primary icon-box-chat",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon-box-icon icon-chat",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "w-icon-chat"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "icon-box-content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "icon-box-title font-weight-bold mb-1",
                                                    children: "Customer Support"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-default",
                                                    children: "Call or email us 24/7"
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
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "category-section top-category bg-grey pt-10 pb-10 appear-animate",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container pb-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "title justify-content-center pt-1 ls-normal mb-5",
                            children: "List of vendor"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "swiper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "swiper-container swiper-theme pg-show",
                                "data-swiper-options": "{ 'spaceBetween': 20, 'slidesPerView': 2, 'breakpoints': { '576': { 'slidesPerView': 3 }, '768': { 'slidesPerView': 5 }, '992': { 'slidesPerView': 6 } } }",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "swiper-wrapper row cols-lg-6 cols-md-5 cols-sm-3 cols-2",
                                    children: vendorList.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "swiper-slide category category-classic category-absolute overlay-zoom br-xs",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/vendor-all-product/[vendorId]",
                                                    as: `/vendor-all-product/${item.id}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "category-media",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/demos/demo1/categories/2-1.jpg",
                                                            alt: "Category",
                                                            style: {
                                                                width: "300px"
                                                            }
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "category-content",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: "category-name",
                                                        children: item.name
                                                    })
                                                })
                                            ]
                                        })
                                    )
                                })
                            })
                        })
                    ]
                })
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
                                                                                            width: 295,
                                                                                            height: 335
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
            /*#__PURE__*/ jsx_runtime_.jsx(component_OurClients, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "post-wrapper appear-animate mb-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "title-link-wrapper pb-1 mb-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "title ls-normal mb-0",
                                    children: "From Our Blog"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "blog-listing.html",
                                    className: "font-weight-bold font-size-normal",
                                    children: "View All Articles"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "swiper",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "swiper-container swiper-theme",
                                "data-swiper-options": "{ 'slidesPerView': 1, 'spaceBetween': 20, 'breakpoints': { '576': { 'slidesPerView': 2 }, '768': { 'slidesPerView': 3 }, '992': { 'slidesPerView': 4 } } }",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1",
                                        children: props.getAllBlog.data.map((user)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "swiper-slide post text-center overlay-zoom",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                        className: "brand",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "https://baybridgebd.com/upload/" + user.img,
                                                            alt: "Brand",
                                                            width: 85,
                                                            height: 48
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "post-details",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "post-meta",
                                                                children: [
                                                                    "by ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        className: "post-author"
                                                                    }),
                                                                    "-",
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        className: "post-date mr-0",
                                                                        children: "03.05.2021"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "post-title",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "title",
                                                                    children: user.tittle
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "post-description",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "description",
                                                                    children: user.shortDis
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/blog-details/[blogId]",
                                                                as: `/blog-details/${user.id}`,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "",
                                                                            children: "Read more"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        )
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "swiper-pagination"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "title title-underline mb-4 ls-normal appear-animate",
                        children: "Your Recent Views"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "swiper-container swiper-theme shadow-swiper appear-animate pb-4 mb-8",
                        "data-swiper-options": "{ 'spaceBetween': 20, 'slidesPerView': 2, 'breakpoints': { '576': { 'slidesPerView': 3 }, '768': { 'slidesPerView': 5 }, '992': { 'slidesPerView': 6 }, '1200': { 'slidesPerView': 8 } } }",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2",
                                children: props.recentItem.map((user)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "swiper-slide product-wrap mb-0",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product text-center product-absolute",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                    className: "brand",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "https://baybridgebd.com/upload/" + JSON.parse(user.img),
                                                                alt: "Product",
                                                                width: 300,
                                                                height: 338
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "product-name",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/product-details/[productId]",
                                                        as: `/product-details/${user.id}`,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "",
                                                                    children: user.name
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "swiper-pagination"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
// export async function getStaticProps(context) {
//   const { data: getCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/category&chk=1");
//   const { data: getCatagoryWisieProduct } = await axios.get(process.env.API_URL + "/api/ev1/GetCategoryWishProduct");
//   const { data: getAllBrand } = await axios.get(process.env.API_URL + "/GetInformationSingle/categoryBrand&chk=1");
//   return {
//     props: { getCatagory, getAllBrand, getCatagoryWisieProduct },
//     revalidate: 1,
//   };
// }
async function getServerSideProps(context) {
    const { data: getCatagory  } = await external_axios_default().get("http://192.168.1.13:4000" + "/GetInformationSingle/category&chk=1");
    const { data: getCatagoryWisieProduct  } = await external_axios_default().get("http://192.168.1.13:4000" + "/api/ev1/GetCategoryWishProduct");
    console.log(getCatagoryWisieProduct);
    const { data: getAllBrand  } = await external_axios_default().get("http://192.168.1.13:4000" + "/GetInformationSingle/categoryBrand&chk=1");
    const { data: getAllBlog  } = await external_axios_default().get("http://192.168.1.13:4000" + "/GetInformationSingle/blog&chk=1");
    const { data: recentItem  } = await external_axios_default().get("http://192.168.1.13:4000" + "/api/ev1/RecentProduct");
    const { data: recentAllBlog  } = await external_axios_default().get("http://192.168.1.13:4000" + "/api/ev1/RecentAllBlog");
    const { data: getVendorInfo  } = await external_axios_default().get("http://192.168.1.13:4000" + "/GetVendorInfo");
    // const id = context.params.categoryId;
    // const { data: getCatagoryWiseProductShow } = await axios.get(process.env.API_URL + "/api/ev1/CategoryAllProduct/" + id);
    return {
        props: {
            getCatagory,
            getAllBrand,
            getAllBlog,
            getCatagoryWisieProduct,
            recentItem,
            recentAllBlog,
            getVendorInfo
        }
    };
}


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
var __webpack_exports__ = __webpack_require__.X(0, [730,63], () => (__webpack_exec__(2641)));
module.exports = __webpack_exports__;

})();