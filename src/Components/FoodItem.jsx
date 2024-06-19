import React, { useEffect } from "react";


import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import {add} from "../redux/slices/CartSlice"
import { Mytodos1,Mytodos2,Mytodos3, Mytodos4,Mytodos5, Mytodos6,Mytodos7,Mytodos8,Mytodos9, Mytodos10,Mytodos11,Mytodos12, Mytodos13,Mytodos14 } from "../redux/slices/FetchSlice.js";






const FoodItem = () => {
const dispatch = useDispatch();
const category = useSelector((state)=> state.category.category);
const rating = useSelector((state)=> state.category.rating);
const search = useSelector((state) =>state.search.search);
// console.log(rating);

const {isloading,data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14, isError} = useSelector((state)=>state.todo);
const concatenatedData = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7, ...data8, ...data9, ...data10, ...data11, ...data12, ...data13, ...data14];
// console.log(concatenatedData);

useEffect(()=>{
 dispatch(Mytodos1());
 dispatch(Mytodos2());
 dispatch(Mytodos3());
 dispatch(Mytodos4());
 dispatch(Mytodos5());
 dispatch(Mytodos6());
 dispatch(Mytodos7());
 dispatch(Mytodos8());
 dispatch(Mytodos9());
 dispatch(Mytodos10());
 dispatch(Mytodos11());
 dispatch(Mytodos12());
 dispatch(Mytodos13());
 dispatch(Mytodos14());
},[])



  const handleToast = (name) => {toast.success(`Added ${name}`)};
  return (
    <>
    {/* <Toaster
     position="top-center"
     reverseOrder={false}
    />
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10 bg-black">
      
      {concatenatedData.filter((food) => {
        if(category === "All") {
          return food.category.toLowerCase().includes(search.toLowerCase()); // 03:17 ke bad 
        } else {
          // return category === food.category;
          return( category === food.category && food.category.toLowerCase().includes(search.toLowerCase())
          );
        }
      }).map((food) =>(<div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
            <img
              src={food.image}
              alt={food.dish} 
              className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
            />
            <div className="text-sm flex justify-between">
              <h2>{food.dish}</h2>
              <span className="text-green-500"><span>₹</span>{food.price}</span>
            </div>
            <p className="text-sm font-normal">{food.desc.slice(0, 50)}... </p>
            <div className="flex justify-between">
              <span className="flex justify-center items-center">
                <FaStar className="mr-1 text-yellow-400" /> {food.rating}
              </span>
              <button 
                onClick={()=>{dispatch(add({...food, qty: 1}))
                handleToast(food.dish);
              }}
                className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
              > 
                Add to cart 
              </button>
            </div>
          </div> ))}
          
        </div> */}












{/* <Toaster
     position="top-center"
     reverseOrder={false}
    />
    <div className="flex flex-wrap gap-3 justify-center  mx-6 my-10 bg-blac">
      
      {concatenatedData.filter((food) => {
        if(category === "All") {
          return food.category.toLowerCase().includes(search.toLowerCase()); // 03:17 ke bad 
        } else {
          // return category === food.category;
          return( category === food.category && food.category.toLowerCase().includes(search.toLowerCase())
          );
        }
      }).map((food) =>(<div className="font-bold w-[345px] p-1 flex flex-col rounded-lg gap-2">
            <img
              src={food.image}
              alt={food.dish} 
              className="w-auto h-[190px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
            />
            <div className="text-sm flex justify-between mt-[1px]">
              <h2>{food.dish}</h2>
              <span className="text-green-500"><span>₹</span>{food.price}</span>
              
            </div>
            <p className="font-medium">{food.restaurant.name}</p>
            <p className="text-sm font-normal">{food.desc.slice(0, 50)}... </p>
            <div className="flex justify-between">
              <span className="flex justify-center items-center">
                <FaStar className="mr-1 text-yellow-400" /> {food.rating}
              </span>
              <button 
                onClick={()=>{dispatch(add({...food, qty: 1}))
                handleToast(food.dish);
              }}
                className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
              > 
                Add to cart 
              </button>
            </div>
          </div> ))}
          
        </div> */}





<Toaster
     position="top-center"
     reverseOrder={false}
    />
    <div className="flex flex-wrap gap-3 justify-center  mx-6 my-10 bg-blac">
      
      {concatenatedData.filter((food) => {
        if(category === "All") {
          return food.category.toLowerCase().includes(search.toLowerCase()); // 03:17 ke bad 
        } else if(category === "Vegetarian"){
          // return category === food.category;
          return(category === food.type && food.type.toLowerCase().includes(search.toLowerCase())
          );
        } else if(category === "Non-Vegetarian"){
          // return category === food.category;
          return(category === food.type && food.type.toLowerCase().includes(search.toLowerCase())
          );
        } 
        // else if(category){
          
        //   return(category === food.restaurant.name && food.restaurant.name.toLowerCase().includes(search.toLowerCase())
        // );
        // }
        else if(true){
          console.log(rating);
        //   return(rating >= food.rating && food.rating.toLowerCase().includes(search.toLowerCase())
        // );
        }
        else{
          return(category === food.category && food.category.toLowerCase().includes(search.toLowerCase())
          );
        }
      }).map((food) =>(<div className="font-bold w-[345px] p-1 flex flex-col rounded-lg gap-2">
            <img
              src={food.image}
              alt={food.dish} 
              className="w-auto h-[190px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
            />
            <div className="text-sm flex justify-between mt-[1px]">
              <h2>{food.dish}</h2>
              <span className="text-green-500"><span>₹</span>{food.price}</span>
              
            </div>
            <p className="font-medium">{food.restaurant.name}</p>
            <p className="text-sm font-normal">{food.desc.slice(0, 50)}... </p>
            <div className="flex justify-between">
              <span className="flex justify-center items-center">
                <FaStar className="mr-1 text-yellow-400" /> {food.rating}
              </span>
              <button 
                onClick={()=>{dispatch(add({...food, qty: 1}))
                handleToast(food.dish);
              }}
                className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
              > 
                Add to cart 
              </button>
            </div>
          </div> ))}
          
        </div>
    </>
  );
};

export default FoodItem;
