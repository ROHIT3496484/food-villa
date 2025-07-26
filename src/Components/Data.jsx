import React, {useState, useEffect} from 'react'
import { restaurantList } from './Restolist';
import Restcard from './Restcard';

import "./Header.css"
import Shimmer from './Shimmer';





const Data=()=>{
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(()=>{
   
    fetched();
  },[])

  const fetched=async()=>{
      const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
    
   
    const json = await res.json();
    console.log(json); // First log the entire response to see its structure
    
    // Try different paths to find the restaurants data
    const restaurants = 
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];
    
    console.log(restaurants)
    setData(restaurants)
    setFiltered(restaurants)
  }
  if(data.length === 0){
    return <Shimmer/>
  }
  return(
    <div>
      <div className="classname">
        <input placeholder="Search" onChange={(e)=> setSearch(e.target.value)}></input>
        <button onClick={()=>{
          const filtereddata = data.filter((item)=>item.info.name.toLowerCase().includes(search.toLowerCase()))
          setFiltered(filtereddata)
        }}>Search</button>
      </div>
      <br />
      <div className="reslist">
        {
          filtered.map((restaurant) => (
            <Restcard restaurantData={restaurant.info} key={restaurant.info?.id } />
          ))
      }
      </div>
    </div>
  )
}

export default Data
