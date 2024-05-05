import Items from "./Items"
import { useState } from "react";
const RestaurantCategory = ({data,showItems,setShowIndex}) => {
  
  const handleClick = () => {
    setShowIndex();
  };
  const{title,itemCards}=data?.card?.card
  return (
    
    <div className=" w-6/12 mx-auto my-5 bg-gray-50 shadow-lg p-4 ">
       <div className='flex justify-between cursor-pointer'onClick={handleClick}>
       <span className="font-bold text-lg"> {title} - ({itemCards.length})</span>
       <span>⬇️</span>
    </div>
    {showItems && <Items items={itemCards} actionKey={"Add +"}/>}
    </div>
  )
}

export default RestaurantCategory