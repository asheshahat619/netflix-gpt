import { useDispatch } from "react-redux"
import { removeUser } from "../utilil/userSlice"
import { auth } from "../utilil/firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import HeaderComponent from "./HeaderComponent"
const BrowseComponent=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleSignout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
        dispatch(removeUser())
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
          
    }
    return(
        <div className="flex  justify-between  ">
        <HeaderComponent/>
        <div className=" cursor-pointer" onClick={handleSignout}>
            SignOut
        </div>
        </div>
    )
}
export default BrowseComponent