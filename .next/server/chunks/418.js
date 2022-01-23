"use strict";
exports.id = 418;
exports.ids = [418];
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

/***/ 5418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ totalsState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atom_addTocartAtom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6942);


const totalsState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({
    key: "totalsState",
    get: ({ get  })=>{
        const cart = get(_atom_addTocartAtom__WEBPACK_IMPORTED_MODULE_1__/* .cartState */ .d);
        const productInfo = get(_atom_addTocartAtom__WEBPACK_IMPORTED_MODULE_1__/* .addToCartProductInfo */ .S);
        const subtotal = Object.entries(cart).reduce((acc, [id, quantity])=>acc + productInfo[id][2] * quantity
        , 0);
        return {
            subtotal,
            total: subtotal
        };
    }
}); // export const Totals = () => {
 //     const totals = useRecoilValue(totalsState);
 //     return (
 //         <div>
 //             <h2>Totals</h2>
 //             <p>Subtotal: ${totals.subtotal.toFixed(2)}</p>
 //             <p>
 //                 <strong>Total: ${totals.total.toFixed(2)}</strong>
 //             </p>
 //         </div>
 //     );
 // }


/***/ })

};
;