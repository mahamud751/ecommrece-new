import axios from "axios";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { addToCartProductInfo, cartState } from "../../atom/addTocartAtom";
import useScript from "../../commonFunction/ReloadJs";
function categoryWiseProduct(props) {
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

  const AllProductInfo = props.getCatagoryWiseProductShow["0"].products;
  console.log(props);

  return (
    <div>
      {/* Start of Main */}
      <main className="main">
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb bb-no">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <a href="shop-banner-sidebar.html">Categories</a>
              </li>
              <li>Shop</li>
            </ul>
          </div>
        </nav>

        {/* End of Breadcrumb */}
        {/* Start of Page Content */}
        <div className="page-content">
          <div className="container">
            {/* Start of Shop Banner */}
            <dir></dir>

            <div className="shop-default-banner banner d-flex align-items-center mb-5 br-xs">
              {props.getCatagory.data.map((item, index) => (
                <div>
                  <img src={"https://baybridgebd.com/upload/" + item.desktopicon} alt="Brand" height={200} />
                  <div className="banner-content">
                    <h4 className="banner-subtitle font-weight-bold"> {item.title} Collection</h4>

                    <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">
                      {item.title}
                      <i className="w-icon-long-arrow-right" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="shop-content row gutter-lg mb-10">
              <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
                <div className="sidebar-overlay" />
                <a className="sidebar-close" href="#">
                  <i className="close-icon" />
                </a>
                <div className="sidebar-content scrollable">
                  <div className="sticky-sidebar">
                    <div className="filter-actions">
                      <label>Filter :</label>
                      <a href="#" className="btn btn-dark btn-link filter-clean">
                        Clean All
                      </a>
                    </div>

                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <span>All Categories</span>
                      </h3>
                      {/* <ul className="widget-body filter-items search-ul">
                        {props.getCatagory.data.map((item, index) => (
                          <li>
                            <a href="#">{item.title}</a>
                          </li>
                        ))}
                      </ul> */}
                    </div>
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <span>Price</span>
                      </h3>
                      <div className="widget-body">
                        <ul className="filter-items search-ul">
                          <li>
                            <a href="#">$0.00 - $100.00</a>
                          </li>
                          <li>
                            <a href="#">$100.00 - $200.00</a>
                          </li>
                          <li>
                            <a href="#">$200.00 - $300.00</a>
                          </li>
                          <li>
                            <a href="#">$300.00 - $500.00</a>
                          </li>
                          <li>
                            <a href="#">$500.00+</a>
                          </li>
                        </ul>
                        <form className="price-range">
                          <input type="number" name="min_price" className="min_price text-center" placeholder="$min" />
                          <span className="delimiter">-</span>
                          <input type="number" name="max_price" className="max_price text-center" placeholder="$max" />
                          <a href="#" className="btn btn-primary btn-rounded">
                            Go
                          </a>
                        </form>
                      </div>
                    </div>
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <span>Size</span>
                      </h3>
                      <ul className="widget-body filter-items item-check mt-1">
                        <li>
                          <a href="#">Extra Large</a>
                        </li>
                        <li>
                          <a href="#">Large</a>
                        </li>
                        <li>
                          <a href="#">Medium</a>
                        </li>
                        <li>
                          <a href="#">Small</a>
                        </li>
                      </ul>
                    </div>
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <span>Brand</span>
                      </h3>
                      <ul className="widget-body filter-items item-check mt-1">
                        <li>
                          <a href="#">Elegant Auto Group</a>
                        </li>
                        <li>
                          <a href="#">Green Grass</a>
                        </li>
                        <li>
                          <a href="#">Node Js</a>
                        </li>
                        <li>
                          <a href="#">NS8</a>
                        </li>
                        <li>
                          <a href="#">Red</a>
                        </li>
                        <li>
                          <a href="#">Skysuite Tech</a>
                        </li>
                        <li>
                          <a href="#">Sterling</a>
                        </li>
                      </ul>
                    </div>
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <span>Color</span>
                      </h3>
                      <ul className="widget-body filter-items item-check mt-1">
                        <li>
                          <a href="#">Black</a>
                        </li>
                        <li>
                          <a href="#">Blue</a>
                        </li>
                        <li>
                          <a href="#">Brown</a>
                        </li>
                        <li>
                          <a href="#">Green</a>
                        </li>
                        <li>
                          <a href="#">Grey</a>
                        </li>
                        <li>
                          <a href="#">Orange</a>
                        </li>
                        <li>
                          <a href="#">Yellow</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="main-content">
                <nav className="toolbox sticky-toolbox sticky-content fix-top">
                  <div className="toolbox-left">
                    <a
                      href="#"
                      className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                    btn-icon-left d-block d-lg-none"
                    >
                      <i className="w-icon-category" />
                      <span>Filters</span>
                    </a>
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
                      <a href="shop-banner-sidebar.html" className="icon-mode-grid btn-layout active">
                        <i className="w-icon-grid" />
                      </a>
                      <a href="shop-list.html" className="icon-mode-list btn-layout">
                        <i className="w-icon-list" />
                      </a>
                    </div>
                  </div>
                </nav>

                <div className="swiper-wrapper row cols-xl-3 cols-lg-3 cols-2">
                  {AllProductInfo.map((item, index) => (
                    <div key={index} className="swiper-slide product-col">
                      <div className="product-wrap product text-center">
                        <div className="product product-slideup-content">
                          <figure className="product-media">
                            <Link href={"/product-details/[productId]"} as={`/product-details/${item.id}`}>
                              <a>
                                {" "}
                                <img src={"https://baybridgebd.com/upload/" + JSON.parse(item.img)} alt="Product" width={300} height={338} />
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
                                <a>{item.name}</a>
                              </Link>
                            </h3>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }} />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">{item.realPrice}</ins>
                              <del className="old-price">{item.buyPrice}</del>
                            </div>
                          </div>
                          <div className="product-hidden-details">
                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart" title="Add to Cart" onClick={() => cartUpdate(item)}>
                                <i className="w-icon-cart" />
                                <span>Add To Cart</span>
                              </a>
                              {cart[item.id] && (
                                <button
                                  className="btn-product btn-cart"
                                  onClick={() => {
                                    cartRemove(item);
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
                <div className="toolbox toolbox-pagination justify-content-between">
                  <p className="showing-info mb-2 mb-sm-0">
                    Showing<span>1-12 of 60</span>Products
                  </p>
                  <ul className="pagination">
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// export const getStaticPaths = async () => {
//   const { data } = await axios.get("https://baybridgebd.com/GetAllProduct");
//   const paths = data?.map((current) => {
//     return {
//       params: {
//         categoryId: current?.id?.toString(),
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export async function getStaticProps(context) {
//   const id = context.params.categoryId;

//   const { data: getCatagoryWiseProductShow } = await axios.get("https://baybridgebd.com/api/ev1/CategoryAllProduct/" + id);

//   return {
//     props: { getCatagoryWiseProductShow },
// revalidate: 1,
//   };
// }

export async function getServerSideProps(context) {
  const id = context.params.categoryId;

  const { data: getCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/category&chk=1");
  const { data: getCatagoryWiseProductShow } = await axios.get(process.env.API_URL + "/api/ev1/CategoryAllProduct/" + id);

  return {
    props: { getCatagory, getCatagoryWiseProductShow },
  };
}

export default categoryWiseProduct;
