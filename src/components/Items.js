import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from "react-redux";
import { addItems } from '../utils/cartSlice';
import { removeItems } from '../utils/cartSlice';
import { NOIMAGE } from '../utils/constants';
const Items = ({items,actionKey}) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItems(item));
  };
  const handleRemoveItem=(item)=>{
    dispatch(removeItems(item));
  }
  return (
    <div>
       {items.map((item,index)=>(
          <div key={index} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
            <div className='w-9/12'>
            <div className='py-2'>
           <span>{item.card.info.name}</span>
           <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
            </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
            <div className="absolute">
            <button
             className="p-2 mx-10 rounded-lg bg-white text-black shadow-lg"
             onClick={() => (actionKey === "Add +" ? handleAddItem(item) : handleRemoveItem(item))}
            >
            {actionKey === "Add +" ? "Add +" : "Remove -"}
            </button>

            </div>
            <div>
            {item.card.info.imageId?
            (<img src={CDN_URL + item.card.info.imageId} className="w-full" />):
            (<img src={NOIMAGE} className="w-full"/>)
            
            }
            </div>
            </div>
            </div>
            
        ))}
    </div>
  )
}

export default Items