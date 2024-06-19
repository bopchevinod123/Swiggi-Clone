import React, { useState } from 'react'
import "./LoginSignUp.css";
import { IoMdCloseCircle } from "react-icons/io";

const LoginSignUp1 = () => {
    const [activePage, setActivePage] = useState(true);
const [action,setAction] = useState("Sign Up")

  return (
    <>

<button onClick={()=>{setActivePage(!activePage)}} className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg'>SignIN</button>

{/* <div className={`fixed top-0 w-full lg:w-[40vw] h-full p-5  
        ${activePage ? "translate-y-0" : "translate-y-full"} transition-all duration-500 z-50`
        }> */}
      <div class="container" className={`fixed top-0  lg:right-80 lg:left-80 w-full lg:w-[50vw] h-full   
        ${activePage ? "translate-y-0" : "translate-y-full"} transition-all duration-500 z-50`
        }>
        <div class="form-box">

        <IoMdCloseCircle
          onClick={()=> setActivePage(!activePage)} 
           className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'/>

            <h1 class="title">{action}</h1>
            
            <div class={action === "Sign In" ? "underline scroll" : "underline scroll2"}></div>

            <form>
                <div class="input-group">
                    
                    {action === "Sign In" ? <div></div> :
                    <div class="input-field namefield">
                    <i class="fa-solid fa-user"></i>
                     <input type="text" placeholder='Name'/>
                    </div>
                     }
                    
                    {action === "Sign In" ? <div></div> :
                    <div class="input-field namefield1">
                    <i class="fa-solid fa-user-secret"></i>
                    <input type="text" placeholder='Last Name' />
                    </div>  
                    }
                    
                    
                    <div class="input-field">
                    <i class="fa-solid fa-at"></i>
                  
                    <input type="email" placeholder='Email' />
                    </div> 
                    
                    <div class="input-field">
                    <i class="fa-solid fa-key"></i>
                   
                    <input type="password" placeholder='Password' />
                    </div>
                {action === "Sign Up" ?
                    <p><span class="text">Password Suggestion</span><a href="#"> Click Here!</a></p> :  <p><span class="text">Lost Password</span><a href="#"> Click Here!</a></p>
                  }
                   
                   </div> 

                <div class="btn-field">
                   
                    <div class={action === "Sign In" ?"signupbtn gray":"signupbtn"} onClick={()=>setAction("Sign Up")}><p>Sign Up</p></div>
                    <div   class={action ==="Sign Up"?"signinbtn gray":"signinbtn"} onClick={()=>setAction("Sign In")}><p>Sign In</p></div>
                </div> 

            </form>





            <div id="line">
               
                <hr className='line'/>
                <p>or</p>
               
                <hr className='line'/>
            </div>
            
        
        <div class="icons">
            <div class="div1">
                <div class="div2 btn1">
                    <i class="fa-brands fa-google  fa-2x" ></i>
                    <a href=""><button className='a1'>Google</button></a>
            </div>
            <div class="div2 btn2"> 
                <i class="fa-brands fa-square-facebook  fa-2x" ></i>
                <a href=""><button className='a2'>Facebook</button></a>
            </div>
          </div>
        
          <div class="div1">
            <div class="div2 btn3">
                <i class="fa-brands fa-linkedin  fa-2x" ></i>
                <a href=""><button className='a3'>LinkedIn</button></a>
            </div>
            <div class="div2 btn4">
                <i class="fa-brands fa-github  fa-2x" ></i>
                <a href=""><button className='a4'>GitHud</button></a>
               
            </div>
        </div>
        </div>
        
        
        <h4>Why Create An Account?</h4>
        
        
        
        
        
        </div> 
    </div> 


   
    </>
  )
}

export default LoginSignUp1
