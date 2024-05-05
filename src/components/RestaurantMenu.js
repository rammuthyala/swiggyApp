import React from 'react'
import useRestaurentMenu from '../utils/useRestaurentMenu'
import { useParams } from 'react-router-dom'
import RestaurantCategory from './RestaurantCategory'
import Shimmer from './Shimmer'
import { useState } from 'react'

const RestaurantMenu = () => {
  const {resId}=useParams();
  const [showIndex, setShowIndex] = useState(null);
  
  
  
  const resInfo = useRestaurentMenu(resId)
  if (resInfo === null) return <Shimmer />;
  
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  
  const { itemCards }=  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
 
  const categories =
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  
  return (
      <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory 
        key={index} 
        data={category}
        setShowIndex={() => index===showIndex?setShowIndex(null):setShowIndex(index)}
        showItems={index === showIndex ? true : false}
       />
      ))}
    </div>
  )
}

export default RestaurantMenu