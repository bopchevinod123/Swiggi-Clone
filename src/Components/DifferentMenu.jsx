import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategory,setRating } from '../redux/slices/CategorySlice';
// import { PiArrowsLeftRightFill } from "react-icons/pi";


const DifferentMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className='ml-20'>
      <button className="  px-6 py-[6px] text-black bg-white hover:bg-gray-200 rounded-2xl text-sm border-[1px]   border-gray-400 ml-2 font-bold
      ">Filter  </button>
     
      <button className='px-6 py-[6px] text-black bg-white hover:bg-gray-200 rounded-2xl text-sm border-[1px]   border-gray-400 ml-2 font-semibold'>Sort By</button>
      <button className='px-5 py-[6px] text-black bg-white hover:bg-gray-200 rounded-2xl text-sm border-[1px]   border-gray-400 ml-2 font-medium'>Fast Delivery</button>
      <button className='px-5 py-[6px] text-black bg-white hover:bg-gray-200 rounded-2xl text-sm border-[1px]   border-gray-400 ml-2 mt-1 font-medium'>Offers</button>
      <button className='px-5 py-[6px] text-black bg-white hover:bg-gray-200 rounded-2xl text-sm border-[1px]   border-gray-400 ml-2 font-medium'>New on Swiggy</button>
      <button onClick={()=> dispatch(setCategory("Vegetarian"))} className='px-5 py-[6px] text-black bg-white hover:bg-gray-200 rounded-2xl text-sm border-[1px]  border-gray-400 ml-2 mb-1 mt-1 font-medium'>Pure Veg</button>
      <button onClick={()=> dispatch(setCategory("Non-Vegetarian"))} className='px-5 py-[6px] text-black bg-white hover:bg-gray-200 rounded-2xl text-sm border-[1px]  border-gray-400 ml-2 mb-1 mt-1 font-medium'>Non Veg</button>

      <button onClick={()=> dispatch(setRating(10))} className='px-5 py-[6px] text-black bg-white hover:bg-gray-200 rounded-2xl text-sm border-[1px]  border-gray-400 ml-2 font-medium'>Ratings 4.0+</button>
      <button className='px-5 py-[6px] text-black bg-white hover:bg-gray-200 rounded-2xl text-sm border-[1px]  border-gray-400 ml-2 font-medium'>Less than Rs.300</button>
      <button className='px-5 py-[6px] text-black bg-white hover:bg-gray-200 rounded-2xl text-sm border-[1px]  border-gray-400 ml-2 sm:mt-2 mt-1 font-medium'>Rs.300-Rs.600</button>
    </div>
  )
}

export default DifferentMenu
