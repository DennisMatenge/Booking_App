import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import MailList from "../../Components/MailList/MailList"
import Footer from "../../Components/Footer/Footer"
import "./Hotel.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ClearIcon from '@mui/icons-material/Clear';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useContext, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
import { AuthContext } from "../../Context/AuthContext";
import Reserve from "../../Components/Reserve/Reserve";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber]=useState(0);
  const [open, setOpen]=useState(false);
  const [openModel, setOpenModel] =useState(false);

const { data, loading, error } = useFetch(`/hotels/find/${id}`);
const { user } = useContext(AuthContext);
const navigate = useNavigate();

const { dates, options } = useContext(SearchContext);

const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
function dayDifference(date1, date2) {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  return diffDays;
} 

const days = dayDifference(dates[0].endDate, dates[0].startDate)


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

  const handleClick = ()=>{
    if(user) {
      setOpenModel(true);
    } else {
      navigate("/login")
    }
  };
  

  return (
    <div>
      <Navbar />
      <Header type="list" />
      { loading ? ("Loading...") : 
      (<div className="hotelContainer">
       {open && <div className="slider">
        <ClearIcon className="close" onClick={()=>setOpen(false)}/>
        <ArrowLeftIcon className="arrow" onClick={()=>handleMove("l")}/>
        <div className="slideWrapper">
          <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
        </div>
        <ArrowRightIcon className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress"></div>
          <LocationOnIcon />
          <span>{data.address}</span>
        </div>
        <span className="hotelDistance">
          Excellent Location - {data.distance}m from the City
        </span>
        <span className="hotelPriceHighLight">
          Book a stay over Ksh. ${data.cheapestprice} at this property and get a free airport
          Taxi
        </span>
        <div className="hotelImages">
          {data.photos?.map((photo, i) => (
            <div className="hotelImgWrapper" key={photo}>
              <img onClick={()=>handleOpen(i)} src={photo} alt="" className="hotelImg" />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle"> {data.title}</h1>
            <p className="hotelDesc">
            { data.desc }
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a {days}-night stay </h1>
            <span>
             Located in Nyali, a 5-minute walk from Nyali Beach, Ayodya Suites Nyali
             has accommodations with an outdoor swimming pool, free private parking,
              a shared lounge and a terrace.
            </span>
            <h2>
              <b>ksh.{days * data.cheapestprice * options.room}</b> ({days} nights)
            </h2>
            <button onClick={handleClick}>Reserve or book Now!</button>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div> )}
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id}/> }
    </div>
  );
};

export default Hotel;
