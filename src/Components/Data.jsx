import React, {useState, useEffect} from 'react'
import { restaurantList } from './Restolist';
import { Link} from 'react-router-dom';
import Restcard from './Restcard';

import "./Header.css"
import Shimmer from './Shimmer';





const Data=()=>{
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  //if no dependency array => useEffect is called on every render
  // if dependency array is empty => useEffect is called on initial render(just once)
  // if dependency array is [search] => called everytime search is updated
  useEffect(()=>{
   
    fetched();
  },[])

  const fetched=async()=>{
      const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    
   
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
            <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> <Restcard restaurantData={restaurant.info} key={restaurant.info?.id } />
           </Link>))
      }
      </div>
    </div>
  )
}

export default Data
