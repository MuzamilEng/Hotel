import style from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbar_container}>
        <div className={style.hotel_imgcontainer}>
          <h1 className={style.hotel_img_title}>
            Your <span className={style.red}> Hotel </span> booking made easy
          </h1>
          <img
            src={`../../../assets/img/images.png`}
            alt="hotel"
            className={style.hotel_mainImage}
          />
        </div>
        <div className={style.hotel_testimonials}>
          <div className={style.testimonial_container}>
            <li className={style.testimonial}>
              <img
                className={style.testmonial_img}
                src={`../../../assets/img/hotel.png`}
                alt="flight"
              />
              <p className={style.testimonial_title}>Hotel</p>
            </li>
            <li className={style.testimonial}>
              <img
                className={style.testmonial_img}
                src={`../../../assets/img/Flight.png`}
                alt="flight"
              />
              <p className={style.testimonial_title}>Flight</p>
            </li>
            <li className={style.testimonial}>
              <img
                className={style.testmonial_img}
                src={`../../../assets/img/car.png`}
                alt="flight"
              />
              <p className={style.testimonial_title}>car</p>
            </li>
            <li className={style.testimonial}>
              <img
                className={style.testmonial_img}
                src={`../../../assets/img/Ship.png`}
                alt="flight"
              />
              <p className={style.testimonial_title}>Boat</p>
            </li>
            <li className={style.testimonial}>
              <img
                className={style.testmonial_img}
                src={`../../../assets/img/car.png`}
                alt="flight"
              />
              <p className={style.testimonial_title}>Bus</p>
            </li>
            <li className={style.testimonial}>
              <img
                className={style.testmonial_img}
                src={`../../../assets/img/car.png`}
                alt="flight"
              />
              <p className={style.testimonial_title}>Keke</p>
            </li>
            <li className={style.testimonial}>
              <img
                className={style.testmonial_img}
                src={`../../../assets/img/car.png`}
                alt="flight"
              />
              <p className={style.testimonial_title}>Train</p>
            </li>
            <li className={style.testimonial}>
              <img
                className={style.testmonial_img}
                src={`../../../assets/img/car.png`}
                alt="flight"
              />
              <p className={style.testimonial_title}>Bike</p>
            </li>
            <li className={style.testimonial}>
              <img
                className={style.testmonial_img}
                src={`../../../assets/img/car.png`}
                alt="flight"
              />
              <p className={style.testimonial_title}>Dilevery</p>
            </li>
          </div>
        </div>
        <div className={style.nav_container}>
          <div className={style.nav_input_lists}>
            <div className={style.booking_info_container}>
              <li className={style.booking_info}>
                <label
                  className={style.booking_info_labels}
                  htmlFor="Your City"
                >
                  Your City
                </label>
                <br />
                <input
                  type="text"
                  name="city"
                  placeholder="Thiland"
                  className={style.info_placeholder}
                />
              </li>
              <li className={style.booking_info}>
                <label
                  className={style.booking_info_labels}
                  htmlFor="Your City"
                >
                  Check in
                </label>
                <br />
                <input
                  type="text"
                  name="city"
                  placeholder="01-26-22"
                  className={style.info_placeholder}
                />
              </li>
              <li className={style.booking_info}>
                <label
                  className={style.booking_info_labels}
                  htmlFor="Your City"
                >
                  Check out
                </label>
                <br />
                <input
                  type="text"
                  name="city"
                  placeholder="01-30-22"
                  className={style.info_placeholder}
                />
              </li>
            </div>
            <div className={style.booking_info_container1}>
              <button className={style.nav_search}>Search Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
