import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiFillDelete } from "react-icons/ai";
import { useDispatch,useSelector } from "react-redux";
import { decreament, increament, removeFromCart } from "../redux/slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";


const ItemCard = ({id,name,price,img ,qty}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=> state.cart.cart);
  // console.log(cartItems);
  // const handleToast = (name) => {toast.success(`Remove ${name}`)};
  return (
    <>
     {/* <Toaster
     position="top-center"
     reverseOrder={false}
    /> */}

      <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <AiFillDelete onClick={()=>{dispatch(removeFromCart({id,name,price,img,qty}))
      // handleToast(name); or
      toast(`${name} Removed!`, {
        icon: '👏',
      });
    }} className="absolute right-7 text-gray-600 cursor-pointer"/>
        <img
          src= {img}
          alt=""
          className="w-[50px] h-[50px] "
        />

        <div className="leading-5"> 
          <h2 className="font-bold text-gray-800">{name}</h2>
          <div className="flex justify-between">
            <span className="text-green-500 font-bold">{price}</span>
            <div className="flex justify-center items-center gap-2 absolute right-7">
              <AiOutlinePlus onClick={()=>dispatch(increament({id,name,price,img,qty}))}
                className="border-2 border-gray-600 text-gray-600 hover:text-white
         hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />
              <span>{qty}</span>
              <AiOutlineMinus onClick={()=> qty>1 ? dispatch(decreament({id,name,price,img,qty})): null}
                className="border-2 border-gray-600 text-gray-600 hover:text-white
         hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>



      {/* {cartItems.map((food)=>{
         <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
         <AiFillDelete onClick={()=>{dispatch(removeFromCart({food}))
         // handleToast(name); or
         toast(`${food.dish} Removed!`, {
           icon: '👏',
         });
       }} className="absolute right-7 text-gray-600 cursor-pointer"/>
           <img
             src= {food.image}
             alt=""
             className="w-[50px] h-[50px] "
           />
   
           <div className="leading-5"> 
             <h2 className="font-bold text-gray-800">{food.dish}</h2>
             <div className="flex justify-between">
               <span className="text-green-500 font-bold">{food.price}</span>
               <div className="flex justify-center items-center gap-2 absolute right-7">
                 <AiOutlinePlus onClick={()=>dispatch(increament({food}))}
                   className="border-2 border-gray-600 text-gray-600 hover:text-white
            hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
                 />
                 <span>{food.qty}</span>
                 <AiOutlineMinus onClick={()=> food.qty>1 ? dispatch(decreament({food})): null}
                   className="border-2 border-gray-600 text-gray-600 hover:text-white
            hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
                 />
               </div>
             </div>
           </div>
         </div>
      })} */}
    </>
  );
};

export default ItemCard;
