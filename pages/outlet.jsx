import axios from "axios";
import Link from "next/link";
import React from "react";
import useScript from "../commonFunction/ReloadJs";

function outlet(props) {
  useScript("/assets/js/main.min.js");
  console.log(props);
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title mb-0">Our Outlet</h1>
        </div>
      </div>
      {/* End of Page Header */}
      {/* Start of Breadcrumb */}
      <nav className="breadcrumb-nav mb-10 pb-8">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="demo1.html">Home</a>
            </li>
            <li>Our Outlet</li>
          </ul>
        </div>
      </nav>
      <section className="vendor-banner-section mb-10 mb-lg-7">
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
            {props.outlet.map((item) => (
              <div className="swiper-slide vendor-widget">
                <div className="vendor-widget-banner">
                  <figure className="vendor-banner">
                    <Link href="/outlet/[outletId]" as={`/outlet/${item.id}`}>
                      <a>
                        <img src={"https://baybridgebd.com/upload/" + item.img} alt="Brand" width={85} height={48} />
                      </a>
                    </Link>
                  </figure>
                  <div className="vendor-details">
                    <div className="vendor-personal">
                      <h4 className="vendor-name">
                        <a href="">{item.name}</a>
                      </h4>
                      <h4 className="vendor-name">
                        <a href="">{item.email}</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{ width: "100%" }} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                      </div>
                      <span className="vendor-product-count">27 Products</span>
                    </div>
                  </div>
                </div>
                {/* End of Vendor Widget Banner */}
              </div>
            ))}
          </div>

          <div className="swiper-pagination" />
        </div>
      </section>

      {/* End of Element Section */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data: outlet } = await axios.get(process.env.API_URL + "/api/ev1/AllOutlet");

  return {
    props: { outlet },
  };
}
export default outlet;
