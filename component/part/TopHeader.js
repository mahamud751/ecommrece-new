import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryAtom } from "../../atom/CategoryAtom";
import { totalsState } from "../../commonFunction/addToCartTotalsState";
import { CartItems } from "../../commonFunction/CartItems";
function TopHeader() {
  const [category, setCategory] = useState([]);
  const [categorySubBrand, setCategorySubBrand] = useRecoilState(categoryAtom);
  const totals = useRecoilValue(totalsState);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await axios.get(
          process.env.API_URL + "/GetInformationSingle/category&chk=1"
        );
        // console.log(result.data)
        setCategory(result.data.data);
      };
    } catch (error) {
      // console.log(error);
    }

    try {
      const fetchCategorySubBrand = async () => {
        const result = await axios.get(
          process.env.API_URL + "/GetCategoryData"
        );
        setCategorySubBrand(result.data);
      };
    } catch (error) {
      // console.log(error);
    }

    fetchData();
    fetchCategorySubBrand();
  }, []);
  const categoryItem = useRecoilValue(categoryAtom);
  return (
    <div>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <p className="welcome-msg">
                Welcome to Wolmart Store message or remove it!
              </p>
            </div>
            <div className="header-right">
              {/* <div className="dropdown">
                                <a href="#currency">USD</a>
                                <div className="dropdown-box">
                                    <a href="#USD">USD</a>
                                    <a href="#EUR">EUR</a>
                                </div>
                            </div> */}
              {/* End of DropDown Menu */}
              {/* <div className="dropdown">
                                <a href="#language"><img src="assets/images/flags/eng.png" alt="ENG Flag" width={14} height={8} className="dropdown-image" /> ENG</a>
                                <div className="dropdown-box">
                                    <a href="#ENG">
                                        <img src="assets/images/flags/eng.png" alt="ENG Flag" width={14} height={8} className="dropdown-image" />
                                        ENG
                                    </a>
                                    <a href="#FRA">
                                        <img src="assets/images/flags/fra.png" alt="FRA Flag" width={14} height={8} className="dropdown-image" />
                                        FRA
                                    </a>
                                </div>
                            </div> */}
              {/* End of Dropdown Menu */}
              {/* <span className="divider d-lg-show" /> */}
              <Link href="/myAccount">
                <a className="d-lg-show">My Account</a>
              </Link>
              <Link href="/login">
                <a className="d-lg-show login sign-in">
                  <i className="w-icon-account" />
                  Sign In
                </a>
              </Link>
              <span className="delimiter d-lg-show">/</span>
              <Link href="/login">
                <a className="ml-0 d-lg-show login register">Register</a>
              </Link>
            </div>
          </div>
        </div>
        {/* End of Header Top */}
        <div className="header-middle">
          <div className="container">
            <div className="header-left mr-md-4">
              <a
                href="#"
                className="mobile-menu-toggle  w-icon-hamburger"
                aria-label="menu-toggle"
              ></a>
              <a href="demo1.html" className="logo ml-lg-0">
                <img
                  src="assets/images/logo.png"
                  alt="logo"
                  width={144}
                  height={45}
                />
              </a>
              <form
                method="get"
                action="#"
                className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
              >
                <div className="select-box">
                  <select id="category" name="category">
                    <option value>All Categories</option>
                    {category.map((item, index) => (
                      <option value>{item.title}</option>
                    ))}
                  </select>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  id="search"
                  placeholder="Search in..."
                  required
                />
                <button className="btn btn-search" type="submit">
                  <i className="w-icon-search" />
                </button>
              </form>
            </div>
            <div className="header-right ml-4">
              <div className="header-call d-xs-show d-lg-flex align-items-center">
                <a href="tel:#" className="w-icon-call" />
                <div className="call-info d-lg-show">
                  <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                    <a href="mailto:#" className="text-capitalize">
                      Live Chat
                    </a>{" "}
                    or :
                  </h4>
                  <a
                    href="tel:#"
                    className="phone-number font-weight-bolder ls-50"
                  >
                    0(800)123-456
                  </a>
                </div>
              </div>
              <Link href="/wishlist">
                <a className="wishlist label-down link d-xs-show">
                  <i className="w-icon-heart" />
                  <span className="wishlist-label d-lg-show">Wishlist</span>
                </a>
              </Link>
              <a className="compare label-down link d-xs-show" href="#">
                <i className="w-icon-compare" />
                <span className="compare-label d-lg-show">Compare</span>
              </a>
              <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                <div className="cart-overlay" />
                <a href="#" className="cart-toggle label-down link">
                  <i className="w-icon-cart">
                    <span className="cart-count">2</span>
                  </i>
                  <span className="cart-label">Cart</span>
                </a>
                <div className="dropdown-box">
                  <div className="cart-header">
                    <span>Shopping Cart</span>
                    <a href="#" className="btn-close">
                      Close
                      <i className="w-icon-long-arrow-right" />
                    </a>
                  </div>
                  <div className="products">

                    <CartItems />

                  </div>
                  <div className="cart-total">
                    <label>Subtotal:</label>
                    <span className="price">Total: ${totals.total.toFixed(2)}</span>
                  </div>
                  <div className="cart-action">
                    <Link href="/cart">
                      <a className="btn btn-dark btn-outline btn-rounded">
                        View Cart
                      </a>
                    </Link>

                    <Link href="/checkout">
                      <a className="btn btn-primary  btn-rounded">Checkout</a>
                    </Link>
                  </div>
                </div>
                {/* End of Dropdown Box */}
              </div>
            </div>
          </div>
        </div>
        {/* End of Header Middle */}
        <div className="header-bottom sticky-content fix-top sticky-header">
          <div className="container">
            <div className="inner-wrap">
              <div className="header-left">
                <div
                  className="dropdown category-dropdown has-border"
                  data-visible="true"
                >
                  <a
                    href="#"
                    className="category-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    data-display="static"
                    title="Browse Categories"
                  >
                    <i className="w-icon-category" />
                    <span>Browse Categories</span>
                  </a>
                  <div className="dropdown-box">
                    <ul className="menu vertical-menu category-menu">
                      {categoryItem.map((category, index) => (
                        <li key={index}>
                          <Link href="/category/[categoryId]" as={`/category/${category.id}`}>
                            <a>
                              <i className="w-icon-home" />
                              {category.title}
                            </a>
                          </Link>
                          <ul className="megamenu">
                            {category.categorySubs.map((subcategory, index) => (
                              <li key={index}>
                                <h4 className="menu-title">
                                  {subcategory.title}
                                </h4>
                                <hr className="divider" />
                                <ul>
                                  {subcategory.categoryBrands.map(
                                    (brand, index) => (
                                      <li key={index}>
                                        <Link href="/brand-wise-product/[brandId]" as={`/brand-wise-product/${brand.id}`}>
                                          <a>
                                            {brand.title}
                                          </a>
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}

                      <li>
                        <a
                          href="#"
                          className="font-weight-bold text-primary text-uppercase ls-25"
                        >
                          View All Categories
                          <i className="w-icon-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <nav className="main-nav">
                  <ul className="menu active-underline">
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/aboutUs">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contactUs">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                      <a href="/mission">Mission & Vission</a>
                    </li>
                    {/* <li>
                      <Link href="/all-product">
                        <a>Gallery</a>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/blog">
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/become-a-vendor">
                        <a>Vendor</a>
                      </Link>
                    </li>
                    <li>
                      <a href="/outlet">Outlet</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <a href="#" className="d-xl-show">
                  <i className="w-icon-map-marker mr-1" />
                  Track Order
                </a>
                <a href="#">
                  <i className="w-icon-sale" />
                  Daily Deals
                </a>
              </div>
            </div>
          </div>
        </div>
      </header >
    </div >
  );
}

export default TopHeader;
