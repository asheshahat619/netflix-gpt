import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilil/firebase";
import { addUser } from "../utilil/userSlice";
const HeaderComponent=()=>{
    const dispath=useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email} = user;
              dispath(addUser({uid:uid,email:email}))
              navigate("/browse")
              // ...
            } else {
                navigate("/")
              // User is signed out
              // ...
            }
          });
    },[])
    return(
        <div className="flex items-center  bg-slate-600">
                <div className="absolute w-44  z-10      mt-24  ml-16  bg-gradient-to-b from-black">
            <img className="" src="
https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt=""></img>
        </div>
        </div>
    )
}
export default HeaderComponent