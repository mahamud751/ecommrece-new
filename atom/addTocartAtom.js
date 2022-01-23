import { atom } from "recoil";
export const cartState = atom({
    key: "cartState",
    default: {}
})

export const addToCartProductInfo = atom({
    key: "addToCartProductInfo ",
    default: []
})
