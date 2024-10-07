import { useState } from "react";
import SignIn from "../components/signIn";
import SignUp from "../components/signup";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [isSignUp, setIsSignUp] = useState(false)

    const signedIn = () => {
      setIsSignIn(false)
      setIsSignUp(true)
    }
    const signedUp = () => {
      setIsSignUp(false)
      setIsSignIn(true)
    }
    return ( 
        <div className="login">
           {isSignIn ? (<SignIn isopen={isSignIn} signedIn={signedIn}/>): (<SignUp isOpen={isSignUp} signedUp={signedUp}/>)}
        </div>
     ); 
}
 
export default Login;