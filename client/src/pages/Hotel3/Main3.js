import BookingForm from '../../Compoment/BookingForm';
import Para from '../../Compoment/Para';
import ReviewForm from '../../Compoment/ReviewForm';
import DropdownList from '../../Compoment/DropdownList'
import Ratings from '../../Props/Ratings';
import Rooms from '../../Props/Rooms';
import style  from "./main3.module.css"
import GroupsIcon from "@mui/icons-material/Groups";
import RatingBord from '@/Compoment/RatingBord';

const Main3 = () => {
  return (
    <div className={style.main3}>
      <div className={style.main3_container}>
        <div className={style.dropdown}>
          <DropdownList />
        </div>
        <div className={style.main3_content}>
          <div className={style.border}>
            <div className={style.main3_img_section}>
              <img
                src={`../../../assets/img/room (1).jpg`}
                alt="hotel 103"
                className={style.main3_img}
              />
            </div>
            <div className={style.hotel_policy}>
              <li className={style.policies}>
                <a
                  className={`{style.main3_policy} ${style.my_property}`}
                  href="/knownfor"
                >
                  Known for
                </a>
              </li>
              <li className={style.policies}>
                <a className={style.main3_policy} href="/knownfor">
                  Choose Rooms
                </a>
              </li>
              <li className={style.policies}>
                <a
                  className={` ${style.main3_policy} ${style.my_property}`}
                  href="/knownfor"
                >
                  Aminities
                </a>
              </li>
              <li className={style.policies}>
                <a
                  className={` ${style.main3_policy} ${style.my_property}`}
                  href="/knownfor"
                >
                  Reviews
                </a>
              </li>
              <li className={style.policies}>
                <a
                  className={` ${style.main3_policy} ${style.my_property}`}
                  href="/knownfor"
                >
                  Hotel Policy
                </a>
              </li>
            </div>
            {/* paragraph section */}

            <Para />
            {/* languages */}
            <div className={style.languages}>
              <div className={style.language}>
                <img
                  src={`../../../assets/img/chat.svg`}
                  alt="chat"
                  className={style.chat_icon}
                />
              </div>
              <div className={style.language}>
                <h2 className={` ${style.Staf} ${style.headings}`}>
                  Staff Speak
                </h2>
                <p className={`$ {style.staf_language} ${style.my_property} `}>
                  English, Hindi, Spanish, Arabic, Russian
                </p>
              </div>
            </div>
            {/* room section */}
            <div className={style.rooms_sections}>
              <div className={style.choose_logo}>
                <h1 className={` ${style.choose_room_title} ${style.headings}`}>
                  Choose Rooms
                </h1>
              </div>
              {/* first container */}
              <Rooms
                roomTitle="Standard Room"
                bedSize="King Size"
                roomSize="3.66x3.66sq.mtr"
                airCondition="Shower"
                bathHub="BathHub"
                tv="TV"
                tea="TeaMaker"
                dryer="HairDryer"
                price="$219"
                discount="$250"
                off="16 off%"
                stayTime="1 Room / Night"
              />
            </div>
            {/* 2nd container */}
            <Rooms
              roomTitle="Dulex Room"
              bedSize="Double Size"
              roomSize="3.66x3.66sq.mtr"
              airCondition="AirConditioning"
              bathHub="BathHub"
              tv="TV"
              tea="TeaMaker"
              dryer="HairDryer"
              price="$219"
              discount="$250"
              off="16 off%"
              stayTime="1 Room / Night"
            />
            {/* 3rd container */}
            <Rooms
              roomTitle="Premium Room"
              bedSize="Tripple Size"
              roomSize="4.66x4.66sq.mtr"
              airCondition="AirConditioning"
              bathHub="BathHub"
              tv="TV"
              tea="Trrace"
              dryer="HairDryer"
              price="$300"
              discount="$250"
              off="16 off%"
              stayTime="1 Room / Night"
            />
            {/* amenities */}
            <div className={style.amenities_section}>
              <h1 className={` ${style.aminities} ${style.headings}`}>
                Aminities
              </h1>
              <div className={style.aminities_icons}>
                <img
                  src={`../../../assets/img/wifi.svg`}
                  alt="aminities"
                  className={style.ami_icons}
                />
                <img
                  src={`../../../assets/img/knife.svg`}
                  alt="aminities"
                  className={style.ami_icons}
                />
                <img
                  src={`../../../assets/img/glass.svg`}
                  alt="aminities"
                  className={style.ami_icons}
                />
                <img
                  src={`../../../assets/img/beach.svg`}
                  alt="aminities"
                  className={style.ami_icons}
                />
                <GroupsIcon className={style.ami_icons1} />
                <img
                  src={`../../../assets/img/leaves.svg`}
                  alt="aminities"
                  className={style.ami_icons}
                />
                <img
                  src={`../../../assets/img/gym.svg`}
                  alt="aminities"
                  className={style.ami_icons}
                />
              </div>
            </div>
            {/* review container */}
            <div className={style.review_container}>
              <h1 className={style.review_title}>Reviews</h1>
              <div className={style.review_section}>
                <div className={style.review_content}>
                  <div className={style.review_box}>
                    <h1 className={style.revie}>4.5</h1> <br />
                    <p className={style.excellent}>Excellent</p> <br />
                    <p className={style.based}>Based on 245 reviews</p>
                  </div>
                </div>
                <div className={style.review_content}>
                  <RatingBord />
                </div>
               
              </div>
            </div>
            {/* person rattings */}
            <Ratings
              profileImg={`../../../assets/img/81.png`}
              username="Robbi Klintion"
              date="jan 8, 2022"
              ratingTitle="Excellent Hotel with great location"
              para="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quae impedit laudantium provident sunt cumque, voluptatibus
                    enim voluptatem eius inventore ullam saepe neque voluptates"
            />
            {/* 2nd */}
            <Ratings
              profileImg={`../../../assets/img/81.png`}
              username="Robbi Klintion"
              date="jan 8, 2022"
              ratingTitle="Excellent Hotel with great location"
              para="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quae impedit laudantium provident sunt cumque, voluptatibus
                    enim voluptatem eius inventore ullam saepe neque voluptates"
            />
            {/* 3rd */}
            <Ratings
              profileImg={`../../../assets/img/81.png`}
              username="Robbi Klintion"
              date="jan 8, 2022"
              ratingTitle="Excellent Hotel with great location"
              para="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quae impedit laudantium provident sunt cumque, voluptatibus
                    enim voluptatem eius inventore ullam saepe neque voluptates"
            />

            {/* review button */}
            <div className={style.review_button}>
              <div className={style.button_review}>View More Reviews</div>
            </div>
            {/* submit review section */}
            <ReviewForm />
          </div>
        </div>
        {/* booking form  */}
        <div className={style.bookings}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

export default Main3
