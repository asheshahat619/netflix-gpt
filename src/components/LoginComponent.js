import { useState } from "react"
import HeaderComponent from "./HeaderComponent"

const LoginComponent=()=>{
    const [isSignIn,setIsSignIn]=useState(true)
    const isSignBtnCLicked=()=>{
        setIsSignIn(!isSignIn)
    }
    return(
        <div className="">
            {/* use formic library  */}
            <HeaderComponent/>
            <div className="absolute">
            <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background.png"></img>
            
            </div> 
            <form className="absolute  bg-black bg-opacity-70 p-4 w-3/12 my-36 mx-auto left-0 right-0 text-white  ">
                <h1 className="  text-3xl text-bold font-bold ">{isSignIn?"Sign In":"Sign Up"}</h1>
                <input type="email" placeholder="Emai or phone number " className="p-2 my-4 w-full  bg-gray-500"></input>
                <input type="password" placeholder="password" className="p-2 my-4 w-full bg-gray-500"></input>
                {
                    !isSignIn && <input type="text" className="p-2 my-4 w-full  bg-gray-500" placeholder="Enter name"></input>
                }
                <button className="p-4 my-4 w-full bg-red-600">Submit</button>
                <div  className="text-center cursor-pointer" onClick={isSignBtnCLicked}>{isSignIn?"Already a user? Sign In ":"New to Netflix? Sign Up"}</div>
            </form>
        </div>
    )
}
export default LoginComponent