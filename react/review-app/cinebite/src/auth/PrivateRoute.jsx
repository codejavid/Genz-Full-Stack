import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { auth } from "../firebase"



const PrivateRoute = ({children}) => {

  const [user, setUser] = useState(null);  
  const [loading, setLoding] = useState(true);  

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {

      console.log(currentUser);

      setUser(currentUser);
      setLoding(false);

    })

    return () => unsubscribe();

  }, []);

  if(loading){
    return <p>Loading...</p>
  }

  return user ? children : <Navigate to="/signin"/>
}

export default PrivateRoute