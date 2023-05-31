import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import MailList from "../../Components/MailList/MailList"
import Footer from "../../Components/Footer/Footer"
import "./Hotel.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ClearIcon from '@mui/icons-material/Clear';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const location = useLocation();
  const id = location.split("/"[2])
  const [slideNumber, setSlideNumber]=useState(0);
  const [open, setOpen]=useState(false);

const { data, loading, error } = useFetch(`/hotels/${id}`)


  const photos = [
    {
      src: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=683&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=683&q=80",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction==="l") {
      newSlideNumber = slideNumber === 0 ? 6 : slideNumber-1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber);
  };
  

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
       {open && <div className="slider">
        <ClearIcon className="close" onClick={()=>setOpen(false)}/>
        <ArrowLeftIcon className="arrow" onClick={()=>handleMove("l")}/>
        <div className="slideWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
        </div>
        <ArrowRightIcon className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress"></div>
          <LocationOnIcon />
          <span> Elton st 125 New York</span>
        </div>
        <span className="hotelDistance">
          Excellent Location - 500m from the City
        </span>
        <span className="hotelPriceHighLight">
          Book a stay over Ksh. 3000 at this property and get a free airport
          Taxi
        </span>
        <div className="hotelImages">
          {photos.map((photo, i) => (
            <div className="hotelImgWrapper" key={photo.src}>
              <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle"> Stay in The Heart of krakow</h1>
            <p className="hotelDesc">
            "Stay in the Heart of Krakow" offers you the perfect accommodation option for 
            immersing yourself in the vibrant and captivating city of Krakow, Poland. Located in 
            the very heart of the city, this accommodation provides convenient access to all the major 
            attractions, historical landmarks, bustling streets, and cultural treasures that Krakow has to offer.

            By choosing to stay in the heart of Krakow, you'll find yourself surrounded by the enchanting blend of
            medieval architecture, charming cobblestone streets, and a lively atmosphere.
            Immerse yourself in the rich history and culture as you explore the nearby iconic sites 
            such as the magnificent Main Market Square, the historic Wawel Castle, and the vibrant Kazimierz district, 
            known for its thriving nightlife and Jewish heritage.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay </h1>
            <span>
             Located in Nyali, a 5-minute walk from Nyali Beach, Ayodya Suites Nyali
             has accommodations with an outdoor swimming pool, free private parking,
              a shared lounge and a terrace.
            </span>
            <h2>
              <b>ksh. 10000</b> (9 nights)
            </h2>
            <button>Reserve or book Now!</button>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Hotel;
