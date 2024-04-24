import { createBrowserRouter,RouterProvider } from "react-router-dom"
import LoginComponent from "./LoginComponent"
import BrowseComponent from "./BrowseComponent"
import { auth } from "../utilil/firebase"
import { useEffect } from "react"
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux"
import { addUser } from "../utilil/userSlice"
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<LoginComponent></LoginComponent>
    },
    {
        path:"/browse",
        element:<BrowseComponent/>
    }
])


const BodyComponent=()=>{
    const dispath=useDispatch()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email} = user;
              dispath(addUser({uid:uid,email:email}))
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    },[])
    return(
        <div >
                
    <RouterProvider router={appRouter}></RouterProvider>
  
        </div>
    )
}
export default BodyComponent