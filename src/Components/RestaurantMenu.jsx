import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const [restinfo, setRestinfo]  = useState(null);
    const {id}  = useParams();

    useEffect(()=>{
        fetchmenu();
    },[id])

    
    

    const fetchmenu = async()=>{
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const val = await res.json();
        console.log(val);
        setRestinfo(val);
    }


    if(restinfo === null) return <Shimmer/>

    // Get restaurant info
    const info = restinfo?.data?.cards[2]?.card?.card?.info;
    // Get menu items
    const menuCards = restinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
    

    /* 
            
    */
    return (
      <div>
        <div className="resname">
            <h1>{info?.name}</h1>
        <h3>{info?.cuisines?.join(', ')}</h3>
        </div>
        
        <br />
        <div >
           {
            menuCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}  
              </li>
            ))
          }
        </div>
      </div>
    )
}

export default RestaurantMenu
