import DropdownList from "../../Compoment/DropdownList";
import style from "./main.module.css";
import Groups2Icon from "@mui/icons-material/Groups2";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.main_body}>
        <DropdownList />
        <div className={style.main_content}>
          <div className={style.main_content_body}>
            <div className={style.main_featured_content}>
              <div className={style.main_content_logo}>
                <h1 className={style.popular_imgcontent_title}>
                  Featured Offers
                </h1>
                <p className={style.content_para}>
                  Get Best Offers & Discounts
                </p>
              </div>
              <div className={style.offer_info}>
                <img
                  src={`../../../assets/img/hotel (3).jpg`}
                  alt="hotel"
                  className={style.offer_img}
                />
                <img
                  src={`../../../assets/img/hotel (2).jpg`}
                  alt="hotel"
                  className={style.offer_img}
                />
              </div>
            </div>
            <div className={style.main_popular_content}>
              <div className={style.popular}>
                <h1 className={` ${style.popular_title}${style.headings}`}>
                  Popular Destinations
                </h1>
                <p className={`${style.popular_para} ${style.my_property}`}>
                  Explore these places and other things here
                </p>
              </div>
              <div className={style.popular_places}>
                <div className={style.places_container}>
                  <img
                    src={`../../../assets/img/hotel (4).jpg`}
                    alt="hotel"
                    className={style.popular_img}
                  />
                  <p className={`${style.place_name} ${style.my_property}`}>
                    India
                  </p>
                  <p className={` ${style.properties} ${style.my_property}`}>
                    21345 properties
                  </p>
                </div>
                <div className={style.places_container}>
                  <img
                    src={`../../../assets/img/hotel (5).jpg`}
                    alt="hotel"
                    className={style.popular_img}
                  />
                  <p className={` ${style.place_name} ${style.my_property}`}>
                    London
                  </p>
                  <p className={` ${style.properties} ${style.my_property}`}>
                    21345 properties
                  </p>
                </div>
                <div className={style.places_container}>
                  <img
                    src={`../../../assets/img/hotel (2).jpg`}
                    alt="hotel"
                    className={style.popular_img}
                  />
                  <p className={` ${style.place_name} ${style.my_property}`}>
                    Bangkok
                  </p>
                  <p className={` ${style.properties} ${style.my_property}`}>
                    21345 properties
                  </p>
                </div>
                <div className={style.places_container}>
                  <img
                    src={`../../../assets/img/hotel (4).jpg`}
                    alt="hotel"
                    className={style.popular_img}
                  />
                  <p className={` ${style.place_name} ${style.my_property}`}>
                    Newyork
                  </p>
                  <p className={` ${style.properties} ${style.my_property}`}>
                    21345 properties
                  </p>
                </div>
                <div className={style.places_container}>
                  <img
                    src={`../../../assets/img/hotel (3).jpg`}
                    alt="hotel"
                    className={style.popular_img}
                  />
                  <p className={` ${style.place_name} ${style.my_property}`}>
                    Singapore
                  </p>
                  <p className={` ${style.properties} ${style.my_property}`}>
                    21345 properties
                  </p>
                </div>
                <div className={style.places_container}>
                  <img
                    src={`../../../assets/img/hotel (5).jpg`}
                    alt="hotel"
                    className={style.popular_img}
                  />
                  <p className={` ${style.place_name} ${style.my_property}`}>
                    Dubai
                  </p>
                  <p className={` ${style.properties} ${style.my_property}`}>
                    21345 properties
                  </p>
                </div>
              </div>
            </div>
            <div className={style.main_curated_content}>
              <div className={style.curated_hotels}>
                <h1 className={` ${style.curated_title} ${style.headings}`}>
                  Curated Hotels for you
                </h1>
                <p className={` ${style.curated_para} ${style.my_property}`}>
                  Explore our collection to find that perfect gateway
                </p>
              </div>
              <div className={style.curated_hotel_container}>
                <div className={style.curated_container}>
                  <img
                    src={`../../../assets/img/hotel (4).jpg`}
                    alt="hotel"
                    className={style.curated_img}
                  />
                  <p className={` ${style.place_name} ${style.my_property}`}>
                    Sea view hotels in India
                  </p>
                  <p className={` ${style.properties} ${style.my_property}`}>
                    212 properties avaible
                  </p>
                </div>
                <div className={style.curated_container}>
                  <img
                    src={`../../../assets/img/hotel (2).jpg`}
                    alt="hotel"
                    className={style.curated_img}
                  />
                  <p className={` ${style.place_name} ${style.my_property}`}>
                    Hill View Hotel in NewYork
                  </p>
                  <p className={` ${style.properties} ${style.my_property}`}>
                    200 properties avaible
                  </p>
                </div>
                <div className={style.curated_container}>
                  <img
                    src={`../../../assets/img/hotel (5).jpg`}
                    alt="hotel"
                    className={style.curated_img}
                  />
                  <p className={` ${style.place_name} ${style.my_property}`}>
                    Luxery Hotel Dubai
                  </p>
                  <p className={` ${style.properties} ${style.my_property}`}>
                    234 properties avaible
                  </p>
                </div>
              </div>
            </div>
            <div className={style.choose_container}>
              <h1 className={`${style.choose_title}${style.headings}`}>
                Why Choose Us
              </h1>
              <p className={` ${style.choose_para} ${style.my_property}`}>
                Book Hotels Online. Save Time and Money!
              </p>
            </div>
            <div className={style.main_footer}>
              <div className={style.footer_main}>
                <div className={style.footer_content}>
                  <div className={style.footer_logo_container}>
                    <Groups2Icon className={style.footer_logo} />
                  </div>
                </div>
                <div className={style.footer_content}>
                  <h4
                    className={`${style.footer_content_title}${style.headings}`}
                  >
                    10M+ Happy Costumers
                  </h4>
                  <p className={` ${style.footer_para} ${style.my_property}`}>
                    Block with one of the most trusted travel partials in the
                    world
                  </p>
                </div>
              </div>
              <div className={style.footer_main}>
                <div className={style.footer_content}>
                  <div className={style.footer_logo_container}>
                    <AttachMoneyIcon className={style.footer_logo} />
                  </div>
                </div>
                <div className={style.footer_content}>
                  <h4
                    className={` ${style.footer_content_title}${style.headings}`}
                  >
                    10M+ Happy Costumers
                  </h4>
                  <p className={`${style.footer_para} ${style.my_property}`}>
                    Block with one of the most trusted travel partials in the
                    world
                  </p>
                </div>
              </div>
              <div className={style.footer_main}>
                <div className={style.footer_content}>
                  <div className={style.footer_logo_container}>
                    <img
                      src={`../../../assets/img/wheel.png`}
                      alt="logo"
                      className={style.footer_logo}
                    />
                  </div>
                </div>
                <div className={style.footer_content}>
                  <h4
                    className={`${style.footer_content_title}${style.headings}`}
                  >
                    10M+ Happy Costumers
                  </h4>
                  <p className={` ${style.footer_para} ${style.my_property}`}>
                    Block with one of the most trusted travel partials in the
                    world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
