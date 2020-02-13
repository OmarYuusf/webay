import React from "react";
import { MDBIcon } from "mdbreact";
import "./ProductsLike.css";
// react-slick Import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class ProductsLike extends React.Component {
  state = {
    src:"",
    photoIndex: 0,
    isOpen: false,
  };

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
    var settingsSec = {
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
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="products-like">
        <h3>اختار قطعة</h3>
        <div className="products-like-container">
          <Slider {...settings}>
            <div>
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
                  <Slider {...settingsSec}>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1556008059/N23423233A_2.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191590/N23423233A_7.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                  </Slider>
                  {isOpen && (
                    <Lightbox
                      mainSrc={this.state.src}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                  )}
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
            <div>
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
                  <Slider {...settingsSec}>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1556008059/N23423233A_2.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191590/N23423233A_7.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                  </Slider>
                  {isOpen && (
                    <Lightbox
                      mainSrc={this.state.src}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                  )}
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
            <div>
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
                  <Slider {...settingsSec}>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1556008059/N23423233A_2.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191590/N23423233A_7.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                  </Slider>
                  {isOpen && (
                    <Lightbox
                      mainSrc={this.state.src}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                  )}
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
            <div>
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
                  <Slider {...settingsSec}>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1556008059/N23423233A_2.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191590/N23423233A_7.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                  </Slider>
                  {isOpen && (
                    <Lightbox
                      mainSrc={this.state.src}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                  )}
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
            <div>
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
                  <Slider {...settingsSec}>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1556008059/N23423233A_2.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191590/N23423233A_7.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                  </Slider>
                  {isOpen && (
                    <Lightbox
                      mainSrc={this.state.src}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                  )}
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
            <div>
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
                  <Slider {...settingsSec}>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1556008059/N23423233A_2.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191590/N23423233A_7.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                  </Slider>
                  {isOpen && (
                    <Lightbox
                      mainSrc={this.state.src}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                  )}
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
            <div>
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
                  <Slider {...settingsSec}>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1556008059/N23423233A_2.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191590/N23423233A_7.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                  </Slider>
                  {isOpen && (
                    <Lightbox
                      mainSrc={this.state.src}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                  )}
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
            <div>
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
                  <Slider {...settingsSec}>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191588/N23423233A_1.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1556008059/N23423233A_2.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src="https://k.nooncdn.com/t_desktop-pdp-v1/v1570191590/N23423233A_7.jpg"
                        onClick={e =>
                          this.setState({ src: e.target.src, isOpen: true })
                        }
                      />
                    </div>
                  </Slider>
                  {isOpen && (
                    <Lightbox
                      mainSrc={this.state.src}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                  )}
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
          </Slider>
        </div>
      </div>
    );
  }
}

export default ProductsLike;
