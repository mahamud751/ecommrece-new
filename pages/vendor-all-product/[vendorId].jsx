import axios from "axios";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { addToCartProductInfo, cartState } from "../../atom/addTocartAtom";
import useScript from "../../commonFunction/ReloadJs";

function vendorAllProduct(props) {
  useScript("/assets/js/main.min.js");
  const [cart, setCart] = useRecoilState(cartState);
  const [productCartInfo, updateProductCartInfo] = useRecoilState(addToCartProductInfo);

  const cartUpdate = async (item) => {
    setCart({ ...cart, [item.id]: (cart[item.id] || 0) + 1 });
    const dsfsd = JSON.parse(item.img);
    const img = dsfsd[0];
    updateProductCartInfo({ ...productCartInfo, [item.id]: [item.id, item.name, item.buyPrice, img] });
  };

  const cartRemove = async (item) => {
    const copy = { ...cart };
    if (copy[item.id] === 1) {
      delete copy[item.id];
      setCart(copy);
    } else {
      setCart({ ...copy, [item.id]: copy[item.id] - 1 });
    }
  };
  return (
    <div>
      {/* Start of Main */}
      <main className="main">
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb bb-no">
              <li>
                <a href="demo1.html">Home</a>
              </li>
              <li>
                <a href="#">Vendor</a>
              </li>
              <li>
                <a href="#">WCFM</a>
              </li>
              <li>Store</li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}
        {/* Start of Pgae Contetn */}
        <div className="page-content mb-8">
          <div className="container">
            <div className="store store-wcfm-banner">
              <figure className="store-media">
                <img src="assets/images/vendor/wcfm/1.jpg" alt="Vendor" width={1240} height={460} style={{ backgroundColor: "#40475e" }} />
              </figure>
              <div className="store-content">
                <div className="store-content-left mr-auto">
                  <div className="personal-info">
                    <figure className="seller-brand">
                      <img src="assets/images/vendor/brand/2-100x100.png" alt="Brand" width={100} height={100} />
                    </figure>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{ width: "100%" }} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                    </div>
                  </div>
                  <div className="address-info">
                    <h4 className="store-title">Vendor 1</h4>
                    <ul className="seller-info-list list-style-none">
                      <li className="store-address">
                        <i className="w-icon-map-marker" />
                        Street1, Street2, Great Area, California, United States (US), 92090El Carjon,
                      </li>
                      <li className="store-phone">
                        <a href="tel:123456789">
                          <i className="w-icon-phone" />
                          0(800)123-456
                        </a>
                      </li>
                      <li className="store-email">
                        <a href="email:#">
                          <i className="far fa-envelope" />
                          wc@vendor.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="store-content-right">
                  <div className="btn btn-white btn-rounded btn-icon-left btn-inquiry">
                    <i className="far fa-question-circle" />
                    Inquiry
                  </div>
                  <div className="social-icons social-icons-colored border-thin">
                    <a href="#" className="social-icon social-facebook w-icon-facebook" />
                    <a href="#" className="social-icon social-twitter w-icon-twitter" />
                    <a href="#" className="social-icon social-linkedin fab fa-linkedin" />
                    <a href="#" className="social-icon social-youtube w-icon-youtube" />
                    <a href="#" className="social-icon social-instagram w-icon-instagram" />
                  </div>
                </div>
              </div>
            </div>
            {/* End of Store WCMP Banner */}
            <div className="row gutter-lg">
              <aside className="sidebar left-sidebar vendor-sidebar sticky-sidebar-wrapper sidebar-fixed">
                {/* Start of Sidebar Overlay */}
                <div className="sidebar-overlay" />
                <a className="sidebar-close" href="#">
                  <i className="close-icon" />
                </a>
                <a href="#" className="sidebar-toggle">
                  <i className="w-icon-angle-right" />
                </a>
                <div className="sidebar-content">
                  <div className="sticky-sidebar">
                    <div className="widget widget-collapsible widget-categories">
                      <h3 className="widget-title">
                        <span>All Categories</span>
                      </h3>
                      <ul className="widget-body filter-items search-ul">
                        <li>
                          <a href="#">Clothing</a>
                          <ul>
                            <li>
                              <a href="#">Men's</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Fashion</a>
                        </li>
                        <li>
                          <a href="#">Healthy &amp; Beauty</a>
                        </li>
                        <li>
                          <a href="#">Home &amp; Kitchen</a>
                        </li>
                        <li>
                          <a href="#">Jewelry &amp; Watch</a>
                          <ul>
                            <li>
                              <a href="#">Smart Watch</a>
                            </li>
                            <li>
                              <a href="#">Watch</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Office Electronics</a>
                          <ul>
                            <li>
                              <a href="#">Accessories</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* End of Widget */}
                    <div className="widget widget-collapsible widget-coupons">
                      <h3 className="widget-title">
                        <span>Store Coupons</span>
                      </h3>
                      <div className="widget-body">
                        <div className="coupon">
                          First Shopping Coupon
                          <div className="coupon-tip">
                            <div className="coupon-info-title">FREE Shipping Coupon</div>
                            <div className="coupon-info-date">April 30, 2021</div>
                            <div>Test coupon for vendor page</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End of Widget */}
                    <div className="widget widget-collapsible widget-time">
                      <h3 className="widget-title">
                        <span>
                          <i className="far fa-clock" />
                          Store Time
                        </span>
                      </h3>
                      <ul className="widget-body">
                        <li>
                          <span>Monday:</span>9:00 - 10:00 pm
                        </li>
                        <li>
                          <span>Tuesday:</span>9:00 - 10:00 pm
                        </li>
                        <li>
                          <span>Wednesday:</span>9:00 - 10:00 pm
                        </li>
                        <li>
                          <span>Thursday:</span>9:00 - 2:00 pm
                        </li>
                        <li>
                          <span>Friday:</span>9:00 - 10:00 pm
                        </li>
                        <li>
                          <span>Saturday:</span>9:00 - 10:00 pm
                        </li>
                        <li>
                          <span>Sunday:</span>9:00 - 10:00 pm
                        </li>
                      </ul>
                    </div>
                    {/* End of Widget */}
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <span>
                          <i className="w-icon-truck" />
                          Shipping Rules
                        </span>
                      </h3>
                      <div className="widget-body">
                        <p className="mb-0">Delivery Time: 1-2 business days</p>
                      </div>
                    </div>
                    {/* End of Widget */}
                    <div className="widget widget-collapsible widget-location">
                      <h3 className="widget-title">
                        <span>Store Location</span>
                      </h3>
                      <div className="widget-body">
                        <div className="google-map" id="googlemaps" />
                      </div>
                    </div>
                    {/* End of Widget */}
                    <div className="widget widget-collapsible widget-products">
                      <h3 className="widget-title">
                        <span>Best Selling</span>
                      </h3>
                      {props.getCatagoryWisieProduct.map((item, index) => (
                        <div>
                          {item.products.map((item1, index1) => (
                            <div className="widget-body">
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <a href="product-default.html">
                                    <img
                                      src={process.env.API_URL + "/upload/" + JSON.parse(item1.img)}
                                      alt="Product"
                                      style={{ width: "100px", height: "100px" }}
                                    />
                                  </a>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <a href="product-default.html">{item1.name}</a>
                                  </h4>
                                  <div className="ratings-container">
                                    <div className="ratings-full">
                                      <span className="ratings" style={{ width: "100%" }} />
                                      <span className="tooltiptext tooltip-top" />
                                    </div>
                                  </div>
                                  <div className="product-price">
                                    <ins className="new-price">{item1.realPrice}</ins>
                                    <del className="old-price">{item1.buyPrice}</del>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    {/* End of Widget */}
                  </div>
                </div>
              </aside>
              {/* End of Sidebar */}
              <div className="main-content">
                <div className="tab tab-nav-underline tab-nav-boxed tab-vendor-wcfm">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a href="#tab-1" className="nav-link active">
                        Products
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#tab-2" className="nav-link">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#tab-3" className="nav-link">
                        Policies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#tab-4" className="nav-link">
                        Reviews(1)
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-1">
                      <nav className="toolbox sticky-toolbox sticky-content fix-top">
                        <div className="toolbox-left">
                          <div className="toolbox-item toolbox-sort select-box text-dark">
                            <label>Sort By :</label>
                            <select name="orderby" className="form-control">
                              <option value="default" selected="selected">
                                Default sorting
                              </option>
                              <option value="popularity">Sort by popularity</option>
                              <option value="rating">Sort by average rating</option>
                              <option value="date">Sort by latest</option>
                              <option value="price-low">Sort by pric: low to high</option>
                              <option value="price-high">Sort by price: high to low</option>
                            </select>
                          </div>
                        </div>
                        <div className="toolbox-right">
                          <div className="toolbox-item toolbox-show select-box">
                            <select name="count" className="form-control">
                              <option value={9}>Show 9</option>
                              <option value={12} selected="selected">
                                Show 12
                              </option>
                              <option value={24}>Show 24</option>
                              <option value={36}>Show 36</option>
                            </select>
                          </div>
                          <div className="toolbox-item toolbox-layout">
                            <a href="vendor-wcfm-store-product-grid.html" className="icon-mode-grid btn-layout active">
                              <i className="w-icon-grid" />
                            </a>
                            <a href="vendor-wcfm-store-product-list.html" className="icon-mode-list btn-layout">
                              <i className="w-icon-list" />
                            </a>
                          </div>
                        </div>
                      </nav>

                      {props.getCatagoryWisieProduct.map((item, index) => (
                        <div>
                          <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
                            {item.products.map((item1, index1) => (
                              <div className="product-wrap">
                                <div className="product product-simple text-center">
                                  <div className="product product-slideup-content">
                                    <figure className="product-media">
                                      <Link href={"/product-details/[productId]"} as={`/product-details/${item.id}`}>
                                        <a>
                                          <img src={process.env.API_URL + "/upload/" + JSON.parse(item1.img)} alt="Product" width={295} height={335} />
                                        </a>
                                      </Link>
                                      <div className="product-label-group">
                                        <label className="product-label label-discount">-25%</label>
                                      </div>
                                      <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View" />
                                      </div>
                                    </figure>
                                    <div className="product-details">
                                      {/* <div className="product-cat">
                                  <a href="shop-banner-sidebar.html">Electronics</a>
                                </div> */}
                                      <h3 className="product-name">
                                        <Link href={"/product-details/[productId]"} as={`/product-details/${item.id}`}>
                                          <a>{item1.name}</a>
                                        </Link>
                                      </h3>
                                      <div className="ratings-container">
                                        <div className="ratings-full">
                                          <span className="ratings" style={{ width: "100%" }} />
                                          <span className="tooltiptext tooltip-top" />
                                        </div>
                                      </div>
                                      <div className="product-price">
                                        <ins className="new-price">{item1.realPrice}</ins>
                                        <del className="old-price">{item1.buyPrice}</del>
                                      </div>
                                    </div>
                                    <div className="product-hidden-details">
                                      <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to Cart" onClick={() => cartUpdate(item1)}>
                                          <i className="w-icon-cart" />
                                          <span>Add To Cart</span>
                                        </a>
                                        {cart[item1.id] && (
                                          <button
                                            className="btn-product btn-cart"
                                            onClick={() => {
                                              cartRemove(item1);
                                            }}
                                          >
                                            Remove
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="tab-pane" id="tab-2">
                      <p className="mb-4">
                        <strong>L</strong>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Venenatis tellus in metus vulputate eu scelerisque felis. Vel pretium lectus quam id leo in vitae turpis massa. Nunc id cursus
                        metus aliquam. Libero id faucibus nisl tincidunt eget. Aliquam id diam maecenas ultricies mi eget mauris.
                      </p>
                      <p>
                        <strong>L</strong>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt tellus in metus vulputate eu
                        scelerisque felis. Vel pretium lectus quam id leo. id faucibus nisl tincidunt eget. Aliquam id diam maecenas ultricies mi eget mauris.
                        ut labore et dolore magna aliqua. Venenatis.
                      </p>
                    </div>
                    <div className="tab-pane" id="tab-3">
                      <div className="policies-area">
                        <h3 className="title">Shipping Policy</h3>
                        <p>
                          <strong>L</strong>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt arcu cursus. Sagittis id
                          consectetur purus ut. Tellus rutrum tellus pelle.
                        </p>
                      </div>
                      <div className="policies-area">
                        <h3 className="title">Refund Policy</h3>
                        <p>
                          <strong>L</strong>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt arcu cursus. Sagittis id
                          consectetur purus ut. Tellus rutrum tellus pelle.
                        </p>
                      </div>
                      <div className="policies-area">
                        <h3 className="title text-left">Cancellation / Return / Exchange Policy</h3>
                        <p>
                          <strong>L</strong>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt arcu cursus. Sagittis id
                          consectetur purus ut. Tellus rutrum tellus pelle.
                        </p>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-4">
                      <div className="review-area">
                        <h3 className="title font-weight-bold mb-5">Write A Review</h3>
                        <input name="review" type="text" className="form-control" placeholder="your review" />
                        <button className="btn btn-rounded">Add Your Review</button>
                      </div>
                      {/* End of Reveiw Area */}
                      <div className="review-area">
                        <h3 className="title font-weight-bold mb-5">Reviews</h3>
                        <div className="reviewers d-flex align-items-center flex-wrap mb-7">
                          <div className="reviewers-picture d-flex mr-2">
                            <figure>
                              <img src="assets/images/vendor/wcfm/avatar.png" alt="Avatar" width={113} height={112} />
                            </figure>
                            <figure>
                              <img src="assets/images/vendor/wcfm/avatar.png" alt="Avatar" width={113} height={112} />
                            </figure>
                            <figure>
                              <img src="assets/images/vendor/wcfm/avatar.png" alt="Avatar" width={113} height={112} />
                            </figure>
                          </div>
                          <div className="reviewer-name">
                            <a href="#" className="font-weight-bold mr-1">
                              John Doe
                            </a>
                            has reviewed this store
                          </div>
                        </div>
                        {/* End of Reviewers */}
                        <div className="review-ratings">
                          <div className="review-ratings-left mr-auto">
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }} />
                              </div>
                              <label>5.0 Feature</label>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }} />
                              </div>
                              <label>5.0 Varity</label>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }} />
                              </div>
                              <label>5.0 Flexibility</label>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }} />
                              </div>
                              <label>5.0 Delivery</label>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }} />
                              </div>
                              <label>5.0 Support</label>
                            </div>
                          </div>
                          {/* End of Review Ratings Left */}
                          <div className="review-ratings-right">
                            <div className="average-rating">
                              5.0<sub>/5</sub>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings-full mr-0">
                                <span className="ratings" style={{ width: "100%" }} />
                              </div>
                            </div>
                          </div>
                          {/* End of Review Ratings Right */}
                        </div>
                        {/* End of Review Ratings */}
                        <div className="user-wrap">
                          <div className="user-photo">
                            <figure>
                              <img src="assets/images/vendor/wcfm/avatar.png" alt="Avatar" width={113} height={112} />
                            </figure>
                            <div className="rated text-center">
                              <label>Rated</label>
                              <span className="score">5.0</span>
                            </div>
                          </div>
                          {/* End of User Photo */}
                          <div className="user-info">
                            <h4 className="user-name">John Doe</h4>
                            <div className="user-date mb-7">
                              <span>1 Reviews</span>
                              <span>April 1, 2021 12:12 Pm</span>
                            </div>
                            <p>
                              Diam in arcu cursus euismod quis. Eget sit amet tellusvitae sapien pellentesque habitant morbi tristique senectus et. Cras
                              adipiscing enim ermentum et sollicitudin ac orci phasellus.
                            </p>
                          </div>
                          {/* End of User Info */}
                          <div className="review-ratings">
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }} />
                              </div>
                              <label>5.0 Feature</label>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }} />
                              </div>
                              <label>5.0 Varity</label>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }} />
                              </div>
                              <label>5.0 Flexibility</label>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }} />
                              </div>
                              <label>5.0 Delivery</label>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }} />
                              </div>
                              <label>5.0 Support</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data: getCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/category&chk=1");

  const { data: getCatagoryWisieProduct } = await axios.get(process.env.API_URL + "/api/ev1/GetCategoryWishProduct");

  const { data: getAllBrand } = await axios.get(process.env.API_URL + "/GetInformationSingle/categoryBrand&chk=1");

  return {
    props: { data, getCatagory, getAllBrand, getCatagoryWisieProduct },
  };
}

export default vendorAllProduct;
