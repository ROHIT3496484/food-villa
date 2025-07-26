import React from 'react'
import "./Header.css"

  
const Restcard=({restaurantData})=>{
 if(!restaurantData) return null;


  return (
    <div className="restaurant-card">
      <img 
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurantData.cloudinaryImageId
        }
        alt={restaurantData.name}
        className="restaurant-logo"
      />
      <div className="restaurant-details">
        <h3 className="restaurant-name">
          {restaurantData.name}
         
        </h3>
        <div className="esa-rating">
          <h4>{restaurantData.costForTwo}</h4>
          <h4>{restaurantData.deliveryTime} mins</h4>
        </div>
        <h6 className="cousine">
          {restaurantData.cuisines}
          
        </h6>
        <h6 className="location">{restaurantData.areaName}</h6>
      </div>
    </div>
  )
}

export default Restcard
