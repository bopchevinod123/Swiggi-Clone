import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { setCategory } from "../redux/slices/CategorySlice";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import DifferentMenu from "./DifferentMenu";

const RestrauMenu = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    data1,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    data9,
    data10,
    isError,
  } = useSelector((state) => state.todo);

  const concatenatedData = useMemo(
    () => [
      ...data1,
      ...data2,
      ...data3,
      ...data4,
      ...data5,
      ...data6,
      ...data7,
      ...data8,
      ...data9,
      ...data10,
    ],
    [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10]
  );

  const uniqueTimings = useMemo(
    () => [...new Set(concatenatedData.map((food) => food.restaurant.timing))],
    [concatenatedData]
  );

  const uniqueOffers = useMemo(
    () => [...new Set(concatenatedData.map((food) => food.restaurant.offers))],
    [concatenatedData]
  );

  const uniqueName = useMemo(
    () => [...new Set(concatenatedData.map((food) => food.restaurant.name))],
    [concatenatedData]
  );

  const uniqueRating = useMemo(
    () => [...new Set(concatenatedData.map((food) => food.restaurant.rating))],
    [concatenatedData]
  );

  const uniqueAddress = useMemo(
    () => [...new Set(concatenatedData.map((food) => food.restaurant.address))],
    [concatenatedData]
  );

  const uniqueAbout = useMemo(
    () => [...new Set(concatenatedData.map((food) => food.restaurant.about))],
    [concatenatedData]
  );




  const slideLeft = () =>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () =>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }



  return (
    <>
    <div className='ml-6 mr-[90px]'>
      <h3 className="text-xl font-semibold ml-7">
        Top restaurant chains in Bangalore
      </h3>
          {/* <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 mb-16' onClick={slideLeft} size={40} /> */}
            <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'> 
              
      {/* <div className="my-8 mb-[200px] flex gap-3 h-[220px] w-auto bg-blac"> */}
      <div className="mt-[50px] mb-[120px] relative flex items-center gap-6 h-[220px] ">
      <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 mb-14' onClick={slideLeft} size={40} />
      
      {/* <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide '> */}


        <div
          onClick={() => dispatch(setCategory("Tandoori Nights"))}
          className="hover:scale-110 cursor-grab transition-all duration-500 ease-in-out relative"
        >
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f44bc9708c514cd2dd6ae0d8b4677214"
            className="w-[350px] h-[220px] rounded-xl"
          />

          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl mb-12">
            <div class="text-white text-center mt-[160px]">
              <h3 class="text-lg font-semibold">{uniqueName[0]}</h3>
              <p class="text-xl font-bold">{uniqueOffers[0]}</p>
            </div>
          </div>

          <div className=" w-[280px] ml-6">
            <span className="text-[17px] font-semibold text-gray-550">
              {uniqueAddress[0]}
            </span>
            <div className="flex items-center">
              <FaStar className="text-green-700 mb-[3px]" />
              <span className="text-[15px] font-bold text-gray-550">
                {uniqueRating[0]}
              </span>

              <span className="ml-2 text-[15px] font-semibold text-gray-550">
                {uniqueTimings[0]}{" "}
              </span>
            </div>
            {/* <div className="text-[15px] text-gray-600  bg-black">
              {uniqueAbout[0]}
              
            </div> */}
          </div>
        </div>





        <div
          onClick={() => dispatch(setCategory("All"))}
          className="hover:scale-110 cursor-grab transition-all duration-500 ease-in-out relative"
        >
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f44bc9708c514cd2dd6ae0d8b4677214"
            className="w-[350px] h-[220px] rounded-xl"
          />

          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl mb-12">
            <div class="text-white text-center mt-[160px]">
              <h3 class="text-lg font-semibold">{uniqueName[0]}</h3>
              <p class="text-xl font-bold">{uniqueOffers[0]}</p>
            </div>
          </div>

          <div className=" w-[280px] ml-6">
            <span className="text-[17px] font-semibold text-gray-550">
              {uniqueAddress[0]}
            </span>
            <div className="flex items-center">
              <FaStar className="text-green-700 mb-[3px]" />
              <span className="text-[15px] font-bold text-gray-550">
                {uniqueRating[0]}
              </span>

              <span className="ml-2 text-[15px] font-semibold text-gray-550">
                {uniqueTimings[0]}{" "}
              </span>
            </div>
            {/* <div className="text-[15px] text-gray-600  bg-black">
              {uniqueAbout[0]}
              
            </div> */}
          </div>
        </div>




        <div
          onClick={() => dispatch(setCategory("All"))}
          className="hover:scale-110 cursor-grab transition-all duration-500 ease-in-out relative"
        >
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f44bc9708c514cd2dd6ae0d8b4677214"
            className="w-[350px] h-[220px] rounded-xl"
          />

          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl mb-12">
            <div class="text-white text-center mt-[160px]">
              <h3 class="text-lg font-semibold">{uniqueName[0]}</h3>
              <p class="text-xl font-bold">{uniqueOffers[0]}</p>
            </div>
          </div>

          <div className=" w-[280px] ml-6">
            <span className="text-[17px] font-semibold text-gray-550">
              {uniqueAddress[0]}
            </span>
            <div className="flex items-center">
              <FaStar className="text-green-700 mb-[3px]" />
              <span className="text-[15px] font-bold text-gray-550">
                {uniqueRating[0]}
              </span>

              <span className="ml-2 text-[15px] font-semibold text-gray-550">
                {uniqueTimings[0]}{" "}
              </span>
            </div>
            {/* <div className="text-[15px] text-gray-600  bg-black">
              {uniqueAbout[0]}
              
            </div> */}
          </div>
        </div>
       



        <div
          onClick={() => dispatch(setCategory("All"))}
          className="hover:scale-110 cursor-grab transition-all duration-500 ease-in-out relative"
        >
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f44bc9708c514cd2dd6ae0d8b4677214"
            className="w-[350px] h-[220px] rounded-xl"
          />

          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl mb-12">
            <div class="text-white text-center mt-[160px]">
              <h3 class="text-lg font-semibold">{uniqueName[0]}</h3>
              <p class="text-xl font-bold">{uniqueOffers[0]}</p>
            </div>
          </div>

          <div className=" w-[280px] ml-6">
            <span className="text-[17px] font-semibold text-gray-550">
              {uniqueAddress[0]}
            </span>
            <div className="flex items-center">
              <FaStar className="text-green-700 mb-[3px]" />
              <span className="text-[15px] font-bold text-gray-550">
                {uniqueRating[0]}
              </span>

              <span className="ml-2 text-[15px] font-semibold text-gray-550">
                {uniqueTimings[0]}{" "}
              </span>
            </div>
            {/* <div className="text-[15px] text-gray-600  bg-black">
              {uniqueAbout[0]}
              
            </div> */}
          </div>
        </div>


       


        
        <div
          onClick={() => dispatch(setCategory("All"))}
          className="hover:scale-110 cursor-grab transition-all duration-500 ease-in-out relative"
        >
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f44bc9708c514cd2dd6ae0d8b4677214"
            className="w-[350px] h-[220px] rounded-xl"
          />

          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl mb-12">
            <div class="text-white text-center mt-[160px]">
              <h3 class="text-lg font-semibold">{uniqueName[0]}</h3>
              <p class="text-xl font-bold">{uniqueOffers[0]}</p>
            </div>
          </div>

          <div className=" w-[280px] ml-6">
            <span className="text-[17px] font-semibold text-gray-550">
              {uniqueAddress[0]}
            </span>
            <div className="flex items-center">
              <FaStar className="text-green-700 mb-[3px]" />
              <span className="text-[15px] font-bold text-gray-550">
                {uniqueRating[0]}
              </span>

              <span className="ml-2 text-[15px] font-semibold text-gray-550">
                {uniqueTimings[0]}{" "}
              </span>
            </div>
            {/* <div className="text-[15px] text-gray-600  bg-black">
              {uniqueAbout[0]}
              
            </div> */}
          </div>
        </div>




        <div
          onClick={() => dispatch(setCategory("All"))}
          className="hover:scale-110 cursor-grab transition-all duration-500 ease-in-out relative"
        >
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f44bc9708c514cd2dd6ae0d8b4677214"
            className="w-[350px] h-[220px] rounded-xl"
          />

          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl mb-12">
            <div class="text-white text-center mt-[160px]">
              <h3 class="text-lg font-semibold">{uniqueName[0]}</h3>
              <p class="text-xl font-bold">{uniqueOffers[0]}</p>
            </div>
          </div>

          <div className=" w-[280px] ml-6">
            <span className="text-[17px] font-semibold text-gray-550">
              {uniqueAddress[0]}
            </span>
            <div className="flex items-center">
              <FaStar className="text-green-700 mb-[3px]" />
              <span className="text-[15px] font-bold text-gray-550">
                {uniqueRating[0]}
              </span>

              <span className="ml-2 text-[15px] font-semibold text-gray-550">
                {uniqueTimings[0]}{" "}
              </span>
            </div>
            {/* <div className="text-[15px] text-gray-600  bg-black">
              {uniqueAbout[0]}
              
            </div> */}
          </div>
        </div>

       



      
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 mb-16 mr-12' onClick={slideRight} size={40} />

</div>

{/* <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 mb-16 ml-12' onClick={slideRight} size={40} /> */}






      </div>
   
     </div>
      
     <DifferentMenu/>
     </> 
  );
};

export default RestrauMenu;
