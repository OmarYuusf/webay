import React from "react";
import { MDBIcon } from "mdbreact";
import "./ProductsLike.css"
// react-slick Import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsLike = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="products-like">
      <h3>اختار قطعة</h3>
      <div className="products-like-container">
        <div className="products-like-item">
          <div className="item-head">
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>اللون</p>
              </span>
              <span>احمر</span>
            </div>
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>وحدة التخزين</p>
              </span>
              <span>32 جيجا</span>
            </div>
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>عرض الشاشة</p>
              </span>
              <span>12 بوصة</span>
            </div>
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>واي فاي</p>
              </span>
              <span>متواجد</span>
            </div>
          </div>
          <div className="item-center">
            <Slider {...settings}>
              <div>
                <img src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg" />
              </div>
              <div>
                <img src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg" />
              </div>
              <div>
                <img src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg" />
              </div>
            </Slider>
          </div>
          <div className="item-footer">
            <h5>99 ريال</h5>
            <div className="item-footer-discount">
              <p>135 ريال </p>
              <span>خصم 27 %</span>
            </div>
            <p className="discount-end">الخصم سينتهي خلال شهرين</p>
          </div>
          <div className="item-button-select">
            <button>اختار القطعة</button>
          </div>
        </div>
        <div className="products-like-item">
          <div className="item-head">
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>اللون</p>
              </span>
              <span>احمر</span>
            </div>
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>وحدة التخزين</p>
              </span>
              <span>32 جيجا</span>
            </div>
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>عرض الشاشة</p>
              </span>
              <span>12 بوصة</span>
            </div>
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>واي فاي</p>
              </span>
              <span>متواجد</span>
            </div>
          </div>
          <div className="item-center">
            <Slider {...settings}>
              <div>
                <img src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg" />
              </div>
              <div>
                <img src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg" />
              </div>
              <div>
                <img src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg" />
              </div>
            </Slider>
          </div>
          <div className="item-footer">
            <h5>99 ريال</h5>
            <div className="item-footer-discount">
              <p>135 ريال </p>
              <span>خصم 27 %</span>
            </div>
            <p className="discount-end">الخصم سينتهي خلال شهرين</p>
          </div>
          <div className="item-button-select">
            <button>اختار القطعة</button>
          </div>
        </div>
        <div className="products-like-item">
          <div className="item-head">
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>اللون</p>
              </span>
              <span>احمر</span>
            </div>
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>وحدة التخزين</p>
              </span>
              <span>32 جيجا</span>
            </div>
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>عرض الشاشة</p>
              </span>
              <span>12 بوصة</span>
            </div>
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>واي فاي</p>
              </span>
              <span>متواجد</span>
            </div>
          </div>
          <div className="item-center">
            <Slider {...settings}>
              <div>
                <img src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg" />
              </div>
              <div>
                <img src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg" />
              </div>
              <div>
                <img src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg" />
              </div>
            </Slider>
          </div>
          <div className="item-footer">
            <h5>99 ريال</h5>
            <div className="item-footer-discount">
              <p>135 ريال </p>
              <span>خصم 27 %</span>
            </div>
            <p className="discount-end">الخصم سينتهي خلال شهرين</p>
          </div>
          <div className="item-button-select">
            <button>اختار القطعة</button>
          </div>
        </div>
        <div className="products-like-item">
          <div className="item-head">
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>اللون</p>
              </span>
              <span>احمر</span>
            </div>
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>وحدة التخزين</p>
              </span>
              <span>32 جيجا</span>
            </div>
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>عرض الشاشة</p>
              </span>
              <span>12 بوصة</span>
            </div>
            <div>
              <span>
                <MDBIcon icon="check-circle" />
                <p>واي فاي</p>
              </span>
              <span>متواجد</span>
            </div>
          </div>
          <div className="item-center">
            <Slider {...settings}>
              <div>
                <img src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg" />
              </div>
              <div>
                <img src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg" />
              </div>
              <div>
                <img src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg" />
              </div>
            </Slider>
          </div>
          <div className="item-footer">
            <h5>99 ريال</h5>
            <div className="item-footer-discount">
              <p>135 ريال </p>
              <span>خصم 27 %</span>
            </div>
            <p className="discount-end">الخصم سينتهي خلال شهرين</p>
          </div>
          <div className="item-button-select">
            <button>اختار القطعة</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductsLike;
