

import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';
import RestrauMenu from './RestrauMenu';
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

const CategoryMenu = () => {
 const dispatch = useDispatch();
  

const slideLeft = () =>{
  var slider = document.getElementById('slider')
  slider.scrollLeft = slider.scrollLeft - 500
}
const slideRight = () =>{
  var slider = document.getElementById('slider')
  slider.scrollLeft = slider.scrollLeft + 500
}


  return (
//     <>
//     <div className='ml-6'>
//     <h3 className='text-xl font-semibold'>What's on your mind?</h3>
//     <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden h-[150px]'>
      
     

// <button onClick={()=> dispatch(setCategory("All"))}  className="w-[100px] h-[5px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png'/></button>

    



// <button onClick={()=> dispatch(setCategory("North Indian"))}  className="w-[100px] h-[5px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png'/></button>

// <button onClick={()=> dispatch(setCategory("South Indian"))}  className="w-[100px] h-[5px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png'/></button>

// <button onClick={()=> dispatch(setCategory("chinease"))}  className="w-[100px] h-[5px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png'/></button>


// <button onClick={()=> dispatch(setCategory("italian"))}  className="w-[100px] h-[5px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png'/></button>


// <button onClick={()=> dispatch(setCategory("drinks"))}  className="w-[100px] h-[5px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png'/></button>


// <button onClick={()=> dispatch(setCategory("sweet"))}  className="w-[100px] h-[5px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Rasmalai.png'/></button>


// <button onClick={()=> dispatch(setCategory("pizza"))}  className="w-[100px] h-[5px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png'/></button>


// <button onClick={()=> dispatch(setCategory("Breads"))}  className="w-[100px] h-[5px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png'/></button>


// <button onClick={()=> dispatch(setCategory("Starters"))}  className="w-[100px] h-[5px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png'/></button>


// <button onClick={()=> dispatch(setCategory("tandoor"))}  className="w-[100px] h-[5px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png'/></button>


// {/* <button onClick={()=> dispatch(setCategory("fast food"))}  className="w-[100px] h-[5px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png'/></button> */}


//     </div>
//     </div>

//      <RestrauMenu/>
//     </>








<>
    <div className='ml-6 mr-6'>
    <h3 className='text-xl font-semibold ml-9'>What's on your mind?</h3>
    <div className='my-5 relative flex items-center   h-[230px]'>

    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 mb-16' onClick={slideLeft} size={40} />
      
     <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide '>

<button onClick={()=> dispatch(setCategory("All"))}  className="w-[160px] h-[1px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out inline-block  bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png ' /><p></p></button>

    



<button onClick={()=> dispatch(setCategory("North Indian"))}  className="w-[160px] h-[1px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out inline-block bg-white "><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png'/></button>

<button onClick={()=> dispatch(setCategory("South Indian"))}  className="w-[160px] h-[1px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out inline-block bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png'/></button>

<button onClick={()=> dispatch(setCategory("chinease"))}  className="w-[160px] h-[1px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out inline-block bg-white "><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png'/></button>


<button onClick={()=> dispatch(setCategory("italian"))}  className="w-[160px] h-[1px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out inline-block bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png'/></button>


<button onClick={()=> dispatch(setCategory("drinks"))}  className="w-[160px] h-[1px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out inline-block bg-white "><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png'/></button>


<button onClick={()=> dispatch(setCategory("sweet"))}  className="w-[160px] h-[1px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out inline-block bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Rasmalai.png'/></button>


<button onClick={()=> dispatch(setCategory("pizza"))}  className="w-[160px] h-[1px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out inline-block bg-white "><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png'/></button>


<button onClick={()=> dispatch(setCategory("Breads"))}  className="w-[160px] h-[1px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out inline-block bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png'/></button>


<button onClick={()=> dispatch(setCategory("Starters"))}  className="w-[160px] h-[1px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out inline-block bg-white "><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png'/></button>


<button onClick={()=> dispatch(setCategory("tandoor"))}  className="w-[160px] h-[1px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out inline-block bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png'/></button>


<button onClick={()=> dispatch(setCategory("fast food"))}  className="w-[160px] h-[1px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png'/></button>

<button onClick={()=> dispatch(setCategory("sandwich"))}  className="w-[160px] h-[1px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ibvtgsayrbcarr4w1lgd' className='mb-10  '/></button>


<button onClick={()=> dispatch(setCategory("Momos"))}  className="w-[160px] h-[1px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/11/b3d3669c-55dc-4448-ae6f-3b0e47c5bd8e_4d23f4d9-69d5-4f84-aca3-413766f4b5cb.jpg' className='mb-14 ml-5 rounded-full w-[118px]  '/></button>


<button onClick={()=> dispatch(setCategory("Bakery"))}  className="w-[160px] h-[1px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-white"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/iykcd4aqw8degrqe6mwh' className='mb-14 ml-5 rounded-full w-[118px]  '/></button>


</div>
<MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 mb-16 ml-[48px]' onClick={slideRight} size={40} />
    </div>
    
    </div>

     <RestrauMenu/>
    </>
  )

}

export default CategoryMenu;
