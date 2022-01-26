import axios from "axios";
import Link from "next/link";
import React from "react";
import useScript from "../commonFunction/ReloadJs";
function blog(props) {
  useScript("/assets/js/main.min.js");
  return (
    <div>
      <div>
        {/* Mirrored from portotheme.com/html/wolmart/blog-listing.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 21 Oct 2021 16:00:16 GMT */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <title>Wolmart eCommmerce Marketplace HTML Template</title>
        <meta name="keywords" content="Marketplace ecommerce responsive HTML5 Template" />
        <meta name="description" content="Wolmart is powerful marketplace & ecommerce responsive Html5 Template." />
        <meta name="author" content="D-THEMES" />
        {/* Favicon */}
        <link rel="icon" type="image/png" href="assets/images/icons/favicon.png" />
        {/* WebFont.js */}
        <link rel="preload" href="assets/vendor/fontawesome-free/webfonts/fa-regular-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="assets/vendor/fontawesome-free/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="assets/vendor/fontawesome-free/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="assets/fonts/wolmart87d5.woff?png09e" as="font" type="font/woff" crossOrigin="anonymous" />
        {/* Vendor CSS */}
        <link rel="stylesheet" type="text/css" href="assets/vendor/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css" />
        {/* Plugin CSS */}
        <link rel="stylesheet" type="text/css" href="assets/vendor/magnific-popup/magnific-popup.min.css" />
        {/* Default CSS */}
        <link rel="stylesheet" type="text/css" href="assets/css/style.min.css" />
        <div className="page-wrapper">
          {/* Start of Header */}

          {/* End of Header */}
          {/* Start of Main */}
          <main className="main">
            {/* Start of Page Header */}
            <div className="page-header">
              <div className="container">
                <h1 className="page-title mb-0">List</h1>
              </div>
            </div>
            {/* End of Page Header */}
            {/* Start of Breadcrumb */}
            <nav className="breadcrumb-nav mb-6">
              <div className="container">
                <ul className="breadcrumb">
                  <li>
                    <a href="demo1.html">Home</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>List</li>
                </ul>
              </div>
            </nav>
            {/* End of Breadcrumb */}
            {/* Start of Page Content */}
            <div className="page-content mb-10 pb-2">
              <div className="container">
                <div className="row gutter-lg">
                  <div className="main-content">
                    {props.recentAllBlog.map((user) => (
                      <article className="post post-list post-listing mb-md-10 mb-6 pb-2 overlay-zoom mb-4">
                        <figure className="post-media br-sm">
                          <a href="post-single.html">
                            <img src={"https://baybridgebd.com/upload/" + user.img} alt="Brand" width={85} height={48} />
                          </a>
                        </figure>
                        <div className="post-details">
                          <div className="post-cats text-primary">
                            <a href="#">Fashion</a>
                          </div>
                          <h4 className="post-title">
                            <a href="title">{user.tittle}</a>
                          </h4>
                          <div className="post-content">
                            <p>
                              <a href="description">{user.shortDis}</a>
                            </p>
                            <Link href="/blog-details"> (read more)</Link>
                          </div>
                          <div className="post-meta">
                            by{" "}
                            <a href="#" className="post-author">
                              John Doe
                            </a>
                            -{" "}
                            <a href="#" className="post-date">
                              03.05.2021
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}

                    <ul className="pagination justify-content-center">
                      <li className="prev disabled">
                        <a href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
                          <i className="w-icon-long-arrow-left" />
                          Prev
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="next">
                        <a href="#" aria-label="Next">
                          Next
                          <i className="w-icon-long-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End of Main Content */}
                  <aside className="sidebar right-sidebar blog-sidebar sidebar-fixed sticky-sidebar-wrapper">
                    <div className="sidebar-overlay">
                      <a href="#" className="sidebar-close">
                        <i className="close-icon" />
                      </a>
                    </div>
                    <a href="#" className="sidebar-toggle">
                      <i className="fas fa-chevron-left" />
                    </a>
                    <div className="sidebar-content">
                      <div className="sticky-sidebar">
                        <div className="widget widget-search-form">
                          <div className="widget-body">
                            <form action="#" method="GET" className="input-wrapper input-wrapper-inline">
                              <input type="text" className="form-control" placeholder="Search in Blog" autoComplete="off" required />
                              <button className="btn btn-search">
                                <i className="w-icon-search" />
                              </button>
                            </form>
                          </div>
                        </div>
                        {/* End of Widget search form */}
                        <div className="widget widget-categories">
                          <h3 className="widget-title bb-no mb-0">Categories</h3>
                          <ul className="widget-body filter-items search-ul">
                            <li>
                              <a href="blog.html">Clothes</a>
                            </li>
                            <li>
                              <a href="blog.html">Entertainment</a>
                            </li>
                            <li>
                              <a href="blog.html">Fashion</a>
                            </li>
                            <li>
                              <a href="blog.html">Lifestyle</a>
                            </li>
                            <li>
                              <a href="blog.html">Others</a>
                            </li>
                            <li>
                              <a href="blog.html">Shoes</a>
                            </li>
                            <li>
                              <a href="blog.html">Technology</a>
                            </li>
                          </ul>
                        </div>
                        {/* End of Widget categories */}
                        <div className="widget widget-posts">
                          <h3 className="widget-title bb-no">Popular Posts</h3>
                          <div className="widget-body">
                            <div className="swiper">
                              <div
                                className="swiper-container swiper-theme nav-top"
                                data-swiper-options="{
                                            'spaceBetween': 20,
                                            'slidesPerView': 1
                                        }"
                              >
                                <div className="swiper-wrapper row cols-1">
                                  <div className="swiper-slide widget-col">
                                    <div className="post-widget mb-4">
                                      <figure className="post-media br-sm">
                                        <img src="assets/images/blog/sidebar/1.jpg" alt={150} height={150} />
                                      </figure>
                                      <div className="post-details">
                                        <div className="post-meta">
                                          <a href="#" className="post-date">
                                            March 1, 2021
                                          </a>
                                        </div>
                                        <h4 className="post-title">
                                          <a href="post-single.html">Fashion tells about who you are from external point</a>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="post-widget mb-4">
                                      <figure className="post-media br-sm">
                                        <img src="assets/images/blog/sidebar/2.jpg" alt={150} height={150} />
                                      </figure>
                                      <div className="post-details">
                                        <div className="post-meta">
                                          <a href="#" className="post-date">
                                            March 5, 2021
                                          </a>
                                        </div>
                                        <h4 className="post-title">
                                          <a href="post-single.html">New found the men dress for summer</a>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="post-widget mb-2">
                                      <figure className="post-media br-sm">
                                        <img src="assets/images/blog/sidebar/3.jpg" alt={150} height={150} />
                                      </figure>
                                      <div className="post-details">
                                        <div className="post-meta">
                                          <a href="#" className="post-date">
                                            March 1, 2021
                                          </a>
                                        </div>
                                        <h4 className="post-title">
                                          <a href="post-single.html">Cras ornare tristique elit</a>
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="swiper-slide widget-col">
                                    <div className="post-widget mb-4">
                                      <figure className="post-media br-sm">
                                        <img src="assets/images/blog/sidebar/4.jpg" alt={150} height={150} />
                                      </figure>
                                      <div className="post-details">
                                        <div className="post-meta">
                                          <a href="#" className="post-date">
                                            March 1, 2021
                                          </a>
                                        </div>
                                        <h4 className="post-title">
                                          <a href="post-single.html">Vivamus vestibulum ntulla nec ante</a>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="post-widget mb-4">
                                      <figure className="post-media br-sm">
                                        <img src="assets/images/blog/sidebar/5.jpg" alt={150} height={150} />
                                      </figure>
                                      <div className="post-details">
                                        <div className="post-meta">
                                          <a href="#" className="post-date">
                                            March 5, 2021
                                          </a>
                                        </div>
                                        <h4 className="post-title">
                                          <a href="post-single.html">Fusce lacinia arcuet nulla</a>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="post-widget mb-2">
                                      <figure className="post-media br-sm">
                                        <img src="assets/images/blog/sidebar/6.jpg" alt={150} height={150} />
                                      </figure>
                                      <div className="post-details">
                                        <div className="post-meta">
                                          <a href="#" className="post-date">
                                            March 1, 2021
                                          </a>
                                        </div>
                                        <h4 className="post-title">
                                          <a href="post-single.html">Comes a cool blog post with Images</a>
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End of Widget posts */}
                        <div className="widget widget-custom-block">
                          <h3 className="widget-title bb-no">Custom Block</h3>
                          <div className="widget-body">
                            <p className="text-default mb-0">
                              Fringilla urna porttitor rhoncus dolor purus. Luctus veneneratis lectus magna fring. Suspendisse potenti. Sed egestas, ante et
                              vulputate volutpat, uctus metus libero.
                            </p>
                          </div>
                        </div>
                        {/* End of Widget custom block */}
                        <div className="widget widget-tags">
                          <h3 className="widget-title bb-no">Browse Tags</h3>
                          <div className="widget-body tags">
                            <a href="#" className="tag">
                              Fashion
                            </a>
                            <a href="#" className="tag">
                              Style
                            </a>
                            <a href="#" className="tag">
                              Travel
                            </a>
                            <a href="#" className="tag">
                              Women
                            </a>
                            <a href="#" className="tag">
                              Men
                            </a>
                            <a href="#" className="tag">
                              Hobbies
                            </a>
                            <a href="#" className="tag">
                              Shopping
                            </a>
                            <a href="#" className="tag">
                              Photography
                            </a>
                          </div>
                        </div>
                        <div className="widget widget-calendar">
                          <h3 className="widget-title bb-no">Calendar</h3>
                          <div className="widget-body">
                            <div
                              className="calendar-container"
                              data-calendar-options="{
                                        'dayExcerpt': 1
                                    }"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
            {/* End of Page Content */}
          </main>
          {/* End of Main */}
          {/* Start of Footer */}
          <footer
            className="footer appear-animate"
            data-animation-options="{
    'name': 'fadeIn'
}"
          >
            <div className="footer-newsletter bg-primary pt-6 pb-6">
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-5 col-lg-6">
                    <div className="icon-box icon-box-side text-white">
                      <div className="icon-box-icon d-inline-flex">
                        <i className="w-icon-envelop3" />
                      </div>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title text-white text-uppercase mb-0">Subscribe To Our Newsletter</h4>
                        <p className="text-white">Get all the latest information on Events, Sales and Offers.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
                    <form action="#" method="get" className="input-wrapper input-wrapper-inline input-wrapper-rounded">
                      <input type="email" className="form-control mr-2 bg-white" name="email" id="email" placeholder="Your E-mail Address" />
                      <button className="btn btn-dark btn-rounded" type="submit">
                        Subscribe
                        <i className="w-icon-long-arrow-right" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="footer-top">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <div className="widget widget-about">
                      <a href="demo1.html" className="logo-footer">
                        <img src="assets/images/logo_footer.png" alt="logo-footer" width={144} height={45} />
                      </a>
                      <div className="widget-body">
                        <p className="widget-about-title">Got Question? Call us 24/7</p>
                        <a href="tel:18005707777" className="widget-about-call">
                          1-800-570-7777
                        </a>
                        <p className="widget-about-desc">Register now to get updates on pronot get up icons &amp; coupons ster now toon.</p>
                        <div className="social-icons social-icons-colored">
                          <a href="#" className="social-icon social-facebook w-icon-facebook" />
                          <a href="#" className="social-icon social-twitter w-icon-twitter" />
                          <a href="#" className="social-icon social-instagram w-icon-instagram" />
                          <a href="#" className="social-icon social-youtube w-icon-youtube" />
                          <a href="#" className="social-icon social-pinterest w-icon-pinterest" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="widget">
                      <h3 className="widget-title">Company</h3>
                      <ul className="widget-body">
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="#">Team Member</a>
                        </li>
                        <li>
                          <a href="#">Career</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Affilate</a>
                        </li>
                        <li>
                          <a href="#">Order History</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="widget">
                      <h4 className="widget-title">My Account</h4>
                      <ul className="widget-body">
                        <li>
                          <a href="#">Track My Order</a>
                        </li>
                        <li>
                          <a href="cart.html">View Cart</a>
                        </li>
                        <li>
                          <a href="login.html">Sign In</a>
                        </li>
                        <li>
                          <a href="#">Help</a>
                        </li>
                        <li>
                          <a href="wishlist.html">My Wishlist</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="widget">
                      <h4 className="widget-title">Customer Service</h4>
                      <ul className="widget-body">
                        <li>
                          <a href="#">Payment Methods</a>
                        </li>
                        <li>
                          <a href="#">Money-back guarantee!</a>
                        </li>
                        <li>
                          <a href="#">Product Returns</a>
                        </li>
                        <li>
                          <a href="#">Support Center</a>
                        </li>
                        <li>
                          <a href="#">Shipping</a>
                        </li>
                        <li>
                          <a href="#">Term and Conditions</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-middle">
                <div className="widget widget-category">
                  <div className="category-box">
                    <h6 className="category-name">Consumer Electric:</h6>
                    <a href="#">TV Television</a>
                    <a href="#">Air Condition</a>
                    <a href="#">Refrigerator</a>
                    <a href="#">Washing Machine</a>
                    <a href="#">Audio Speaker</a>
                    <a href="#">Security Camera</a>
                    <a href="#">View All</a>
                  </div>
                  <div className="category-box">
                    <h6 className="category-name">Clothing &amp; Apparel:</h6>
                    <a href="#">Men's T-shirt</a>
                    <a href="#">Dresses</a>
                    <a href="#">Men's Sneacker</a>
                    <a href="#">Leather Backpack</a>
                    <a href="#">Watches</a>
                    <a href="#">Jeans</a>
                    <a href="#">Sunglasses</a>
                    <a href="#">Boots</a>
                    <a href="#">Rayban</a>
                    <a href="#">Acccessories</a>
                  </div>
                  <div className="category-box">
                    <h6 className="category-name">Home, Garden &amp; Kitchen:</h6>
                    <a href="#">Sofa</a>
                    <a href="#">Chair</a>
                    <a href="#">Bed Room</a>
                    <a href="#">Living Room</a>
                    <a href="#">Cookware</a>
                    <a href="#">Utensil</a>
                    <a href="#">Blender</a>
                    <a href="#">Garden Equipments</a>
                    <a href="#">Decor</a>
                    <a href="#">Library</a>
                  </div>
                  <div className="category-box">
                    <h6 className="category-name">Health &amp; Beauty:</h6>
                    <a href="#">Skin Care</a>
                    <a href="#">Body Shower</a>
                    <a href="#">Makeup</a>
                    <a href="#">Hair Care</a>
                    <a href="#">Lipstick</a>
                    <a href="#">Perfume</a>
                    <a href="#">View all</a>
                  </div>
                  <div className="category-box">
                    <h6 className="category-name">Jewelry &amp; Watches:</h6>
                    <a href="#">Necklace</a>
                    <a href="#">Pendant</a>
                    <a href="#">Diamond Ring</a>
                    <a href="#">Silver Earing</a>
                    <a href="#">Leather Watcher</a>
                    <a href="#">Rolex</a>
                    <a href="#">Gucci</a>
                    <a href="#">Australian Opal</a>
                    <a href="#">Ammolite</a>
                    <a href="#">Sun Pyrite</a>
                  </div>
                  <div className="category-box">
                    <h6 className="category-name">Computer &amp; Technologies:</h6>
                    <a href="#">Laptop</a>
                    <a href="#">iMac</a>
                    <a href="#">Smartphone</a>
                    <a href="#">Tablet</a>
                    <a href="#">Apple</a>
                    <a href="#">Asus</a>
                    <a href="#">Drone</a>
                    <a href="#">Wireless Speaker</a>
                    <a href="#">Game Controller</a>
                    <a href="#">View all</a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="footer-left">
                  <p className="copyright">Copyright © 2021 Wolmart Store. All Rights Reserved.</p>
                </div>
                <div className="footer-right">
                  <span className="payment-label mr-lg-8">We're using safe payment for</span>
                  <figure className="payment">
                    <img src="assets/images/payment.png" alt="payment" width={159} height={25} />
                  </figure>
                </div>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Page Wrapper */}
        {/* Start of Sticky Footer */}
        <div className="sticky-footer sticky-content fix-bottom">
          <a href="demo1.html" className="sticky-link active">
            <i className="w-icon-home" />
            <p>Home</p>
          </a>
          <a href="shop-banner-sidebar.html" className="sticky-link">
            <i className="w-icon-category" />
            <p>Shop</p>
          </a>
          <a href="my-account.html" className="sticky-link">
            <i className="w-icon-account" />
            <p>Account</p>
          </a>
          <div className="cart-dropdown dir-up">
            <a href="cart.html" className="sticky-link">
              <i className="w-icon-cart" />
              <p>Cart</p>
            </a>
            <div className="dropdown-box">
              <div className="products">
                <div className="product product-cart">
                  <div className="product-detail">
                    <h3 className="product-name">
                      <a href="product-default.html">
                        Beige knitted elas
                        <br />
                        tic runner shoes
                      </a>
                    </h3>
                    <div className="price-box">
                      <span className="product-quantity">1</span>
                      <span className="product-price">$25.68</span>
                    </div>
                  </div>
                  <figure className="product-media">
                    <a href="#">
                      <img src="assets/images/cart/product-1.jpg" alt="product" height={84} width={94} />
                    </a>
                  </figure>
                  <button className="btn btn-link btn-close" aria-label="button">
                    <i className="fas fa-times" />
                  </button>
                </div>
                <div className="product product-cart">
                  <div className="product-detail">
                    <h3 className="product-name">
                      <a href="https://www.portotheme.com/html/wolmart/product.html">
                        Blue utility pina
                        <br />
                        fore denim dress
                      </a>
                    </h3>
                    <div className="price-box">
                      <span className="product-quantity">1</span>
                      <span className="product-price">$32.99</span>
                    </div>
                  </div>
                  <figure className="product-media">
                    <a href="#">
                      <img src="assets/images/cart/product-2.jpg" alt="product" width={84} height={94} />
                    </a>
                  </figure>
                  <button className="btn btn-link btn-close" aria-label="button">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="cart-total">
                <label>Subtotal:</label>
                <span className="price">$58.67</span>
              </div>
              <div className="cart-action">
                <a href="cart.html" className="btn btn-dark btn-outline btn-rounded">
                  View Cart
                </a>
                <a href="checkout.html" className="btn btn-primary  btn-rounded">
                  Checkout
                </a>
              </div>
            </div>
            {/* End of Dropdown Box */}
          </div>
          <div className="header-search hs-toggle dir-up">
            <a href="#" className="search-toggle sticky-link">
              <i className="w-icon-search" />
              <p>Search</p>
            </a>
            <form action="#" className="input-wrapper">
              <input type="text" className="form-control" name="search" autoComplete="off" placeholder="Search" required />
              <button className="btn btn-search" type="submit">
                <i className="w-icon-search" />
              </button>
            </form>
          </div>
        </div>
        {/* End of Sticky Footer */}
        {/* Start of Scroll Top */}
        <a id="scroll-top" className="scroll-top" href="#top" title="Top" role="button">
          {" "}
          <i className="w-icon-angle-up" />{" "}
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
            {" "}
            <circle
              id="progress-indicator"
              fill="transparent"
              stroke="#000000"
              strokeMiterlimit={10}
              cx={35}
              cy={35}
              r={34}
              style={{ strokeDasharray: "16.4198, 400" }}
            />{" "}
          </svg>{" "}
        </a>
        {/* End of Scroll Top */}
        {/* Start of Mobile Menu */}
        <div className="mobile-menu-wrapper">
          <div className="mobile-menu-overlay" />
          {/* End of .mobile-menu-overlay */}
          <a href="#" className="mobile-menu-close">
            <i className="close-icon" />
          </a>
          {/* End of .mobile-menu-close */}
          <div className="mobile-menu-container scrollable">
            <form action="#" method="get" className="input-wrapper">
              <input type="text" className="form-control" name="search" autoComplete="off" placeholder="Search" required />
              <button className="btn btn-search" type="submit">
                <i className="w-icon-search" />
              </button>
            </form>
            {/* End of Search Form */}
            <div className="tab">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a href="#main-menu" className="nav-link active">
                    Main Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#categories" className="nav-link">
                    Categories
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane active" id="main-menu">
                <ul className="mobile-menu">
                  <li>
                    <a href="demo1.html">Home</a>
                  </li>
                  <li>
                    <a href="shop-banner-sidebar.html">Shop</a>
                    <ul>
                      <li>
                        <a href="#">Shop Pages</a>
                        <ul>
                          <li>
                            <a href="shop-banner-sidebar.html">Banner With Sidebar</a>
                          </li>
                          <li>
                            <a href="shop-boxed-banner.html">Boxed Banner</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Full Width Banner</a>
                          </li>
                          <li>
                            <a href="shop-horizontal-filter.html">
                              Horizontal Filter<span className="tip tip-hot">Hot</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-off-canvas.html">
                              Off Canvas Sidebar<span className="tip tip-new">New</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-infinite-scroll.html">Infinite Ajax Scroll</a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar.html">Right Sidebar</a>
                          </li>
                          <li>
                            <a href="shop-both-sidebar.html">Both Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Shop Layouts</a>
                        <ul>
                          <li>
                            <a href="shop-grid-3cols.html">3 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-4cols.html">4 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-5cols.html">5 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-6cols.html">6 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-7cols.html">7 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-8cols.html">8 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-list.html">List Mode</a>
                          </li>
                          <li>
                            <a href="shop-list-sidebar.html">List Mode With Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Product Pages</a>
                        <ul>
                          <li>
                            <a href="product-variable.html">Variable Product</a>
                          </li>
                          <li>
                            <a href="product-featured.html">Featured &amp; Sale</a>
                          </li>
                          <li>
                            <a href="product-accordion.html">Data In Accordion</a>
                          </li>
                          <li>
                            <a href="product-section.html">Data In Sections</a>
                          </li>
                          <li>
                            <a href="product-swatch.html">Image Swatch</a>
                          </li>
                          <li>
                            <a href="product-extended.html">Extended Info</a>
                          </li>
                          <li>
                            <a href="product-without-sidebar.html">Without Sidebar</a>
                          </li>
                          <li>
                            <a href="product-video.html">
                              360<sup>o</sup> &amp; Video<span className="tip tip-new">New</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Product Layouts</a>
                        <ul>
                          <li>
                            <a href="product-default.html">
                              Default<span className="tip tip-hot">Hot</span>
                            </a>
                          </li>
                          <li>
                            <a href="product-vertical.html">Vertical Thumbs</a>
                          </li>
                          <li>
                            <a href="product-grid.html">Grid Images</a>
                          </li>
                          <li>
                            <a href="product-masonry.html">Masonry</a>
                          </li>
                          <li>
                            <a href="product-gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="product-sticky-info.html">Sticky Info</a>
                          </li>
                          <li>
                            <a href="product-sticky-thumb.html">Sticky Thumbs</a>
                          </li>
                          <li>
                            <a href="product-sticky-both.html">Sticky Both</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="vendor-dokan-store.html">Vendor</a>
                    <ul>
                      <li>
                        <a href="#">Store Listing</a>
                        <ul>
                          <li>
                            <a href="vendor-dokan-store-list.html">Store listing 1</a>
                          </li>
                          <li>
                            <a href="vendor-wcfm-store-list.html">Store listing 2</a>
                          </li>
                          <li>
                            <a href="vendor-wcmp-store-list.html">Store listing 3</a>
                          </li>
                          <li>
                            <a href="vendor-wc-store-list.html">Store listing 4</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Vendor Store</a>
                        <ul>
                          <li>
                            <a href="vendor-dokan-store.html">Vendor Store 1</a>
                          </li>
                          <li>
                            <a href="vendor-wcfm-store-product-grid.html">Vendor Store 2</a>
                          </li>
                          <li>
                            <a href="vendor-wcmp-store-product-grid.html">Vendor Store 3</a>
                          </li>
                          <li>
                            <a href="vendor-wc-store-product-grid.html">Vendor Store 4</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                    <ul>
                      <li>
                        <a href="blog.html">Classic</a>
                      </li>
                      <li>
                        <a href="blog-listing.html">Listing</a>
                      </li>
                      <li>
                        <a href="https://www.portotheme.com/html/wolmart/blog-grid.html">Grid</a>
                        <ul>
                          <li>
                            <a href="blog-grid-2cols.html">Grid 2 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-3cols.html">Grid 3 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-4cols.html">Grid 4 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-sidebar.html">Grid sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Masonry</a>
                        <ul>
                          <li>
                            <a href="blog-masonry-2cols.html">Masonry 2 columns</a>
                          </li>
                          <li>
                            <a href="blog-masonry-3cols.html">Masonry 3 columns</a>
                          </li>
                          <li>
                            <a href="blog-masonry-4cols.html">Masonry 4 columns</a>
                          </li>
                          <li>
                            <a href="blog-masonry-sidebar.html">Masonry sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Mask</a>
                        <ul>
                          <li>
                            <a href="blog-mask-grid.html">Blog mask grid</a>
                          </li>
                          <li>
                            <a href="blog-mask-masonry.html">Blog mask masonry</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="post-single.html">Single Post</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about-us.html">Pages</a>
                    <ul>
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="become-a-vendor.html">Become A Vendor</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQs</a>
                      </li>
                      <li>
                        <a href="error-404.html">Error 404</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="elements.html">Elements</a>
                    <ul>
                      <li>
                        <a href="element-products.html">Products</a>
                      </li>
                      <li>
                        <a href="element-titles.html">Titles</a>
                      </li>
                      <li>
                        <a href="element-typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="element-categories.html">Product Category</a>
                      </li>
                      <li>
                        <a href="element-buttons.html">Buttons</a>
                      </li>
                      <li>
                        <a href="element-accordions.html">Accordions</a>
                      </li>
                      <li>
                        <a href="element-alerts.html">Alert &amp; Notification</a>
                      </li>
                      <li>
                        <a href="element-tabs.html">Tabs</a>
                      </li>
                      <li>
                        <a href="element-testimonials.html">Testimonials</a>
                      </li>
                      <li>
                        <a href="element-blog-posts.html">Blog Posts</a>
                      </li>
                      <li>
                        <a href="element-instagrams.html">Instagrams</a>
                      </li>
                      <li>
                        <a href="element-cta.html">Call to Action</a>
                      </li>
                      <li>
                        <a href="element-vendors.html">Vendors</a>
                      </li>
                      <li>
                        <a href="element-icon-boxes.html">Icon Boxes</a>
                      </li>
                      <li>
                        <a href="element-icons.html">Icons</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="tab-pane" id="categories">
                <ul className="mobile-menu">
                  <li>
                    <a href="shop-fullwidth-banner.html">
                      <i className="w-icon-tshirt2" />
                      Fashion
                    </a>
                    <ul>
                      <li>
                        <a href="#">Women</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">New Arrivals</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Best Sellers</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Trending</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Clothing</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Shoes</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Bags</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Accessories</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Jewlery &amp; Watches</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Sale</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Men</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">New Arrivals</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Best Sellers</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Trending</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Clothing</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Shoes</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Bags</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Accessories</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Jewlery &amp; Watches</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop-fullwidth-banner.html">
                      <i className="w-icon-home" />
                      Home &amp; Garden
                    </a>
                    <ul>
                      <li>
                        <a href="#">Bedroom</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">Beds, Frames &amp; Bases</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Dressers</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Nightstands</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Kid's Beds &amp; Headboards</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Armoires</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Living Room</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">Coffee Tables</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Chairs</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Tables</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Futons &amp; Sofa Beds</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Cabinets &amp; Chests</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Office</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">Office Chairs</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Desks</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Bookcases</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">File Cabinets</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Breakroom Tables</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Kitchen &amp; Dining</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">Dining Sets</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Kitchen Storage Cabinets</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Bashers Racks</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Dining Chairs</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Dining Room Tables</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Bar Stools</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop-fullwidth-banner.html">
                      <i className="w-icon-electronics" />
                      Electronics
                    </a>
                    <ul>
                      <li>
                        <a href="#">Laptops &amp; Computers</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">Desktop Computers</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Monitors</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Laptops</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Hard Drives &amp; Storage</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Computer Accessories</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">TV &amp; Video</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">TVs</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Home Audio Speakers</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Projectors</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Media Streaming Devices</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Digital Cameras</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">Digital SLR Cameras</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Sports &amp; Action Cameras</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Camera Lenses</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Photo Printer</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Digital Memory Cards</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Cell Phones</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">Carrier Phones</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Unlocked Phones</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Phone &amp; Cellphone Cases</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Cellphone Chargers</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop-fullwidth-banner.html">
                      <i className="w-icon-furniture" />
                      Furniture
                    </a>
                    <ul>
                      <li>
                        <a href="#">Furniture</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">Sofas &amp; Couches</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Armchairs</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Bed Frames</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Beside Tables</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Dressing Tables</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Lighting</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">Light Bulbs</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Lamps</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Celling Lights</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Wall Lights</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Bathroom Lighting</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Home Accessories</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">Decorative Accessories</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Candals &amp; Holders</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Home Fragrance</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Mirrors</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Clocks</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Garden &amp; Outdoors</a>
                        <ul>
                          <li>
                            <a href="shop-fullwidth-banner.html">Garden Furniture</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Lawn Mowers</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Pressure Washers</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">All Garden Tools</a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">Outdoor Dining</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop-fullwidth-banner.html">
                      <i className="w-icon-heartbeat" />
                      Healthy &amp; Beauty
                    </a>
                  </li>
                  <li>
                    <a href="shop-fullwidth-banner.html">
                      <i className="w-icon-gift" />
                      Gift Ideas
                    </a>
                  </li>
                  <li>
                    <a href="shop-fullwidth-banner.html">
                      <i className="w-icon-gamepad" />
                      Toy &amp; Games
                    </a>
                  </li>
                  <li>
                    <a href="shop-fullwidth-banner.html">
                      <i className="w-icon-ice-cream" />
                      Cooking
                    </a>
                  </li>
                  <li>
                    <a href="shop-fullwidth-banner.html">
                      <i className="w-icon-ios" />
                      Smart Phones
                    </a>
                  </li>
                  <li>
                    <a href="shop-fullwidth-banner.html">
                      <i className="w-icon-camera" />
                      Cameras &amp; Photo
                    </a>
                  </li>
                  <li>
                    <a href="shop-fullwidth-banner.html">
                      <i className="w-icon-ruby" />
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a href="shop-banner-sidebar.html" className="font-weight-bold text-primary text-uppercase ls-25">
                      View All Categories
                      <i className="w-icon-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End of Mobile Menu */}
        {/* Plugin JS File */}
        {/* Mirrored from portotheme.com/html/wolmart/blog-listing.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 21 Oct 2021 16:00:16 GMT */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data: getCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/category&chk=1");

  const { data: getCatagoryWisieProduct } = await axios.get(process.env.API_URL + "/api/ev1/GetCategoryWishProduct");

  const { data: getAllBrand } = await axios.get(process.env.API_URL + "/GetInformationSingle/categoryBrand&chk=1");

  const { data: recentItem } = await axios.get(process.env.API_URL + "/api/ev1/RecentProduct");

  const { data: recentAllBlog } = await axios.get(process.env.API_URL + "/api/ev1/RecentAllBlog");

  const { data: getVendorInfo } = await axios.get(process.env.API_URL + "/GetVendorInfo");

  return {
    props: { getCatagory, getAllBrand, getCatagoryWisieProduct, recentItem, recentAllBlog, getVendorInfo },
  };
}

export default blog;
