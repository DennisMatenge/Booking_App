import './List.css'
import Header from '../../Components/Header/Header'
import Navbar from "../../Components/Navbar/Navbar"
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; 
import { DateRange } from 'react-date-range'
import SearchItem from '../../Components/SearchItem/SearchItem'
import useFetch from '../../Hooks/useFetch'

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin]= useState(undefined);
  const [max, setMax]= useState(undefined);

  const handleDateChange = (item) => {
    setDates([item.selection]);
  };

  const { data, loading, error, reFetch} = useFetch(`/hotels?city=${destination}&{min || 0}&{max || 999}`);

  const handleClick = ()=>{
    reFetch()
  }

  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input type='text' placeholder={destination}/>
            </div>
            <div className='lsItem'>
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to 
              ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>

              { openDate && (
              <DateRange onChange={handleDateChange}
              minDate={new Date()} ranges={dates}/>)}
            </div>
            <div className='lsitem'>
              <div className='lsOptions'>
              <label>Options</label>
              <div className='lsOptionItem'>
              <span className='lsOptionText'>
                Min Prize <small> Per night</small>
              </span>
              <input onChange={(e)=>setMin(e.target.value)} type='number' className='lsOptionInput'/>
            </div>

            <div className='lsOptionItem'>
              <span className='lsOptionText'>
                Max Prize <small> Per night</small>
              </span>
              <input onChange={(e)=>setMax(e.target.value)} type='number' className='lsOptionInput'/>
            </div>

            <div className='lsOptionItem'>
              <span className='lsOptionText'>
                Adult 
              </span>
              <input type='number' className='lsOptionInput' min={1} placeholder={options.adult}/>
            </div>

            <div className='lsOptionItem'>
              <span className='lsOptionText'>
                Children 
              </span>
              <input type='number' className='lsOptionInput' min={0} placeholder={options.children}/>
            </div>

            <div className='lsOptionItem'>
              <span className='lsOptionText'>
                Room 
              </span>
              <input type='number' className='lsOptionInput' min={1} placeholder={options.room}/>
            </div>
            </div>

            <button onClick={handleClick} className='Btn'>search</button>
            </div>
          </div>
          <div className='listResult'>
            {loading ? "loading" : <>
            {data.map(item=>{ 
            <SearchItem item={item} key={item._id}/>
            })}
             </>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
