import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { addToCartProductInfo, cartState } from "../atom/addTocartAtom";
import { listOfVendorAtom } from "../atom/ListOfVendorAtom";
import useScript from "../commonFunction/ReloadJs";
import OurClients from "../component/OurClients";
export default function Home(props) {
  useScript("/assets/js/main.min.js");

  const [vendor, updateVendor] = useRecoilState(listOfVendorAtom);

  useEffect(() => {
    updateVendor(props.getVendorInfo);
  }, [updateVendor]);

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
  const vendorList = useRecoilValue(listOfVendorAtom);

  return (
    <div>
      {/* End of .intro-section */}
      <div className="container">
        <section className="vendor-banner-section mb-10 mb-lg-7">
          <h2 className="title title-center mb-5">With Banner</h2>
          <div
            className="swiper-container swiper-theme show-code-action"
            data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 1,
                      'breakpoints': {
                          '576': {
                              'slidesPerView': 2
                          },
                          '768': {
                              'slidesPerView': 3
                          },
                          '992': {
                              'slidesPerView': 4
                          }
                      }
                  }"
          >
            <div className="swiper-wrapper row cols-xl-4 cols-md-3 cols-sm-2 cols-1">
              {props.getCatagory.data.map((item, index) => (
                <div key={index} className="swiper-slide vendor-widget">
                  <div className="vendor-widget-banner">
                    <figure className="vendor-banner">
                      <Link href="/category/[categoryId]" as={`/category/${item.id}`}>
                        <a>
                          <img src={"https://baybridgebd.com/upload/" + item.desktopicon} alt="Brand" width={85} height={48} />
                        </a>
                      </Link>
                    </figure>
                    <div className="vendor-details">
                      <figure className="vendor-logo">
                        <Link href="/category/[categoryId]" as={`/category/${item.id}`}>
                          <a>
                            <img src={"https://baybridgebd.com/upload/" + item.mobileicon} alt="Brand" width={85} height={48} />
                          </a>
                        </Link>
                      </figure>
                      <div className="vendor-personal">
                        <h4 className="vendor-name">
                          <Link href="/category/[categoryId]" as={`/category/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination" />
          </div>
        </section>

        <div
          className="swiper-container appear-animate icon-box-wrapper br-sm mt-6 mb-6"
          data-swiper-options="{
              'slidesPerView': 1,
              'loop': false,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 2
                  },
                  '768': {
                      'slidesPerView': 3
                  },
                  '1200': {
                      'slidesPerView': 4
                  }
              }
          }"
        >
          <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
            <div className="swiper-slide icon-box icon-box-side icon-box-primary">
              <span className="icon-box-icon icon-shipping">
                <i className="w-icon-truck" />
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title font-weight-bold mb-1">Free Shipping &amp; Returns</h4>
                <p className="text-default">For all orders over $99</p>
              </div>
            </div>
            <div className="swiper-slide icon-box icon-box-side icon-box-primary">
              <span className="icon-box-icon icon-payment">
                <i className="w-icon-bag" />
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title font-weight-bold mb-1">Secure Payment</h4>
                <p className="text-default">We ensure secure payment</p>
              </div>
            </div>
            <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-money">
              <span className="icon-box-icon icon-money">
                <i className="w-icon-money" />
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title font-weight-bold mb-1">Money Back Guarantee</h4>
                <p className="text-default">Any back within 30 days</p>
              </div>
            </div>
            <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-chat">
              <span className="icon-box-icon icon-chat">
                <i className="w-icon-chat" />
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title font-weight-bold mb-1">Customer Support</h4>
                <p className="text-default">Call or email us 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* List of vendor */}
      <section className="category-section top-category bg-grey pt-10 pb-10 appear-animate">
        <div className="container pb-2">
          <h2 className="title justify-content-center pt-1 ls-normal mb-5">List of vendor</h2>
          <div className="swiper">
            <div
              className="swiper-container swiper-theme pg-show"
              data-swiper-options="{
              'spaceBetween': 20,
              'slidesPerView': 2,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 3
                  },
                  '768': {
                      'slidesPerView': 5
                  },
                  '992': {
                      'slidesPerView': 6
                  }
              }
          }"
            >
              <div className="swiper-wrapper row cols-lg-6 cols-md-5 cols-sm-3 cols-2">
                {vendorList.map((item) => (
                  <div className="swiper-slide category category-classic category-absolute overlay-zoom br-xs">
                    <Link href="/vendor-all-product/[vendorId]" as={`/vendor-all-product/${item.id}`}>
                      <a className="category-media">
                        <img src="assets/images/demos/demo1/categories/2-1.jpg" alt="Category" style={{ width: "300px" }} />
                      </a>
                    </Link>
                    <div className="category-content">
                      <h4 className="category-name">{item.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="category-section top-category bg-grey pt-10 pb-10 appear-animate">
        <div className="container pb-2">
          {props.getCatagoryWisieProduct.map((item, index) => (
            <div key={index} className="product-wrapper-1 appear-animate mb-5">
              <div className="title-link-wrapper pb-1 mb-4">
                <h2 className="title ls-normal mb-0">{item.title}</h2>
                <a href="shop-boxed-banner.html" className="font-size-normal font-weight-bold ls-25 mb-0">
                  More Products
                  <i className="w-icon-long-arrow-right" />
                </a>
              </div>
              <div className="row">
                {/* End of Banner */}
                <div className="col-lg-12 col-sm-12">
                  <div
                    className="swiper-container swiper-theme"
                    data-swiper-options="{
                          'spaceBetween': 20,
                          'slidesPerView': 2,
                          'breakpoints': {
                              '992': {
                                  'slidesPerView': 6
                              },
                              '1200': {
                                  'slidesPerView': 6
                              }
                          }
                      }"
                  >
                    <div className="swiper-wrapper row cols-xl-3 cols-lg-3 cols-2">
                      {item.products.map((item1, index1) => (
                        <div key={index1} className="swiper-slide product-col">
                          <div className="product-wrap product text-center">
                            <div className="product product-slideup-content">
                              <figure className="product-media">
                                <Link href={"/product-details/[productId]"} as={`/product-details/${item1.id}`}>
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
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Start our client */}
      <OurClients />

      {/* Start blog */}
      <div className="container">
        <div className="post-wrapper appear-animate mb-4">
          <div className="title-link-wrapper pb-1 mb-4">
            <h2 className="title ls-normal mb-0">From Our Blog</h2>
            <a href="blog-listing.html" className="font-weight-bold font-size-normal">
              View All Articles
            </a>
          </div>
          <div className="swiper">
            <div
              className="swiper-container swiper-theme"
              data-swiper-options="{
                      'slidesPerView': 1,
                      'spaceBetween': 20,
                      'breakpoints': {
                          '576': {
                              'slidesPerView': 2
                          },
                          '768': {
                              'slidesPerView': 3
                          },
                          '992': {
                              'slidesPerView': 4
                          }
                      }
                  }"
            >
              <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
                {props.getAllBlog.data.map((user) => (
                  <div className="swiper-slide post text-center overlay-zoom">
                    <figure className="brand">
                      <img src={"https://baybridgebd.com/upload/" + user.img} alt="Brand" width={85} height={48} />
                    </figure>
                    <div className="post-details">
                      <div className="post-meta">
                        by <a href="#" className="post-author"></a>-{" "}
                        <a href="#" className="post-date mr-0">
                          03.05.2021
                        </a>
                      </div>
                      <h4 className="post-title">
                        <a href="title">{user.tittle}</a>
                      </h4>
                      <h4 className="post-description">
                        <a href="description">{user.shortDis}</a>
                      </h4>
                      <Link href="/blog-details/[blogId]" as={`/blog-details/${user.id}`}>
                        <a>
                          {" "}
                          <a href="">Read more</a>
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Views */}
      <div className="container">
        <h2 className="title title-underline mb-4 ls-normal appear-animate">Your Recent Views</h2>
        <div
          className="swiper-container swiper-theme shadow-swiper appear-animate pb-4 mb-8"
          data-swiper-options="{
              'spaceBetween': 20,
              'slidesPerView': 2,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 3
                  },
                  '768': {
                      'slidesPerView': 5
                  },
                  '992': {
                      'slidesPerView': 6
                  },
                  '1200': {
                      'slidesPerView': 8
                  }
              }
          }"
        >
          <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">
            {props.recentItem.map((user) => (
              <div className="swiper-slide product-wrap mb-0">
                <div className="product text-center product-absolute">
                  <figure className="brand">
                    <a>
                      {" "}
                      <img src={"https://baybridgebd.com/upload/" + JSON.parse(user.img)} alt="Product" width={300} height={338} />
                    </a>
                  </figure>
                  <h4 className="product-name">
                    <Link href={"/product-details/[productId]"} as={`/product-details/${user.id}`}>
                      <a>
                        {" "}
                        <a href="">{user.name}</a>
                      </a>
                    </Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps(context) {
//   const { data: getCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/category&chk=1");

//   const { data: getCatagoryWisieProduct } = await axios.get(process.env.API_URL + "/api/ev1/GetCategoryWishProduct");

//   const { data: getAllBrand } = await axios.get(process.env.API_URL + "/GetInformationSingle/categoryBrand&chk=1");

//   return {
//     props: { getCatagory, getAllBrand, getCatagoryWisieProduct },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps(context) {
  const { data: getCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/category&chk=1");

  const { data: getCatagoryWisieProduct } = await axios.get(process.env.API_URL + "/api/ev1/GetCategoryWishProduct");
  console.log(getCatagoryWisieProduct);

  const { data: getAllBrand } = await axios.get(process.env.API_URL + "/GetInformationSingle/categoryBrand&chk=1");

  const { data: getAllBlog } = await axios.get(process.env.API_URL + "/GetInformationSingle/blog&chk=1");

  const { data: recentItem } = await axios.get(process.env.API_URL + "/api/ev1/RecentProduct");

  const { data: recentAllBlog } = await axios.get(process.env.API_URL + "/api/ev1/RecentAllBlog");

  const { data: getVendorInfo } = await axios.get(process.env.API_URL + "/GetVendorInfo");

  // const id = context.params.categoryId;

  // const { data: getCatagoryWiseProductShow } = await axios.get(process.env.API_URL + "/api/ev1/CategoryAllProduct/" + id);

  return {
    props: { getCatagory, getAllBrand, getAllBlog, getCatagoryWisieProduct, recentItem, recentAllBlog, getVendorInfo },
  };
}
