import { atom, selector } from "recoil";

export const productState = atom({
  key: "productState",
  default: [
    {
      name: "Grapes",
      picture: "🍇",
      price: 481,
      type: "fruit",
      id: 1,
    },
    {
      name: "Melon",
      picture: "🍈",
      price: 426,
      type: "fruit",
      id: 2,
    },
   
    {
      name: "Spoon",
      picture: "🥄",
      price: 293,
      type: "utensils",
      id: 114,
    },
  ],
});

export const viewState = atom({
  key: "viewState",
  default: "column",
});

export const searchTextState = atom({
  key: "searchTextState",
  default: "",
});
export const productFilteredState = atom({
    key: "productFilteredState",
    default: "",
  });
  
  export const filteredProducts = selector({
    key: "filteredProducts",
    get: ({ get }) => {
      const products = get(productState);
      const searchText = get(searchTextState);
      const filterItem = get(productFilteredState);
      let filteredProducts = [];
      filteredProducts = products
        .filter((product) => product.name.includes(searchText))
        .filter((product) =>
          filterItem == "" ? true : product.type == filterItem
        );
  
      return filteredProducts;
    },
  });
  