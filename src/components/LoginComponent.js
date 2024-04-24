import { useState, useRef } from "react"
import HeaderComponent from "./HeaderComponent"
import { formValidate } from "../utilil/validate"
import { auth } from "../utilil/firebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
const LoginComponent = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [errorMessgae, setErrorMessage] = useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const name=useRef(null)
    const navigate=useNavigate()
    const isSignBtnCLicked = () => {
        setIsSignIn(!isSignIn)
    }
    const submitForm = () => {
        console.log(email)
        const isFormDetailsValid = formValidate(email.current.value, password.current.value)
        setErrorMessage(isFormDetailsValid)
        if (errorMessgae) return
        const authSignup = auth

        if (isSignIn) {
            // sign in logic
            signInWithEmailAndPassword(authSignup, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    console.log(userCredential)
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert("entered email or password is invalid")
                });
        }
        else {
            //signup loc
            createUserWithEmailAndPassword(authSignup, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    console.log(userCredential)
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert("could not signup")
                    // ..
                });
        }
    }
    return (
        <div className="">
            {/* use formic library  */}
            <HeaderComponent />
            <div className="absolute">
                <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background.png"></img>

            </div>
            <form onSubmit={(event) => {
                event.preventDefault()
            }} className="absolute  bg-black bg-opacity-70 p-4 w-3/12 my-36 mx-auto left-0 right-0 text-white  ">
                <h1 className="  text-3xl text-bold font-bold ">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignIn && <input type="text" ref={name} className="p-2 my-4 w-full  bg-gray-500" placeholder="Enter name"></input>
                }
                <input type="email" placeholder="Email or phone number " ref={email} className="p-2 my-4 w-full  bg-gray-500"></input>
                <input type="password" placeholder="password" ref={password} className="p-2 my-4 w-full bg-gray-500"></input>
           
                {
                    errorMessgae && <div className=" text-red-600">{errorMessgae}</div>
                }
                <button className="p-2 my-4 w-full bg-red-600" onClick={submitForm} >Submit</button>
                <div className="text-center cursor-pointer" onClick={isSignBtnCLicked}>{isSignIn ? "New to Netflix? Sign Up":"Already a user? Sign In "  }</div>
            </form>
        </div>
    )
}
export default LoginComponent