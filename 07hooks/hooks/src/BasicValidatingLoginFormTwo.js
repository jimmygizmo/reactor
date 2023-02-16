import {useEffect, useState} from 'react'
import  mockLogin  from "./mockLoginFunction.js";
import "./loginstyles.css";

// This file number "..Two" is just a refactoring of the first one. Moved onClick code out into it's
// own handler for much cleaner JSX. Always intended to do that. Maybe a few other improvements.
// I was using error.toString() which works fine but changed this to error.message which is much more
// explicit and correct. I just threw toString() in there working really fast with the intention of fixing it.
// The first version was initially done fast, similar to a coding test.
// More improvements: Got rid of useEffect, trading it and a state var for a simple boolean const switch.
// But added a new state var for loading, which I like better. It's just a slightly different way to
// manage the Login button enabling. I do like my feature of making the error go away as soon as the user starts
// re-entering after a login error. This is better than another solution I saw where the error hung around
// until the next submit. I think logical thing is that as soon as the user starts typing new or corrected login
// information, then the error is no longer relevant and should disappear immediately. My solution does
// this by using the extra state vars for emailIsValid and passwordIsValid.


const BasicValidatingLoginFormTwo = () => {

  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [error, setError] = useState('');
  // const [loginIsEnabled, setLoginIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setLoginIsEnabled(
  //     emailIsValid && passwordIsValid
  //   );
  // }, [emailIsValid, passwordIsValid])

  const loginIsEnabled = !isLoading &&  emailIsValid && passwordIsValid

  const handleLogin = async (event) => {
    try {
      // setLoginIsEnabled(false);
      setIsLoading(true);
      await mockLogin({email, password}).then(
        (authToken) => {
          setIsLoading(false);
          console.log("LOGIN SUCCESS RETURNED TO UI - auth-token: " + authToken);
          // The next three settings are purely cosmetic as a crude way to show the login completed, as the alert says.
          setEmail("YOU ARE NOW LOGGED-IN");
          setPassword("");
          setPasswordIsValid(false);
          window.alert("LOGIN SUCCESS RETURNED TO UI - auth-token: " + authToken);
        }
      ).catch(
        (errorInner) => {
          setIsLoading(false);
          console.log("ERROR (errorInner), WOW!! " + errorInner);
          setError(errorInner);
          // Here we assume for simplicity for this demo. We assume that this backend can only throw
          // one single possible error. (Real backends can throw many errors which might give a different
          // UI to the user so there would be more logic involved here or elsewhere for that.) So all
          // we have to do to make sure our validation feedback works correctly is empty they password
          // field. We have to do this or our simple validation feedback logic would get a little stuck.
          // We also have to empty the password field for the correct and logical user experience.
          setPassword("");
          setPasswordIsValid(false);
        }
      )
    } catch (errorOuter) {
      console.log("ERROR (errorOuter), WOW!! " + errorOuter);
      setError(errorOuter);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <label className="label" htmlFor={"email"}>Email</label>

        <input onChange={
          (e) => {
            if ( e.target.value.length < 1 ) { setEmailIsValid(false)
            } else { setEmailIsValid(true) }
            setEmail(e.target.value);
            setError("");
          }
        } id={"email"} type={"email"} value={email}/>

      </div>
      <div className="row">
        <label className="label" htmlFor={"password"}>Password</label>

        <input onChange={
          (e) => {
            if ( e.target.value.length < 6 ) { setPasswordIsValid(false)
            } else { setPasswordIsValid(true) }
            setPassword(e.target.value);
            setError("");
          }
        }  id={"password"} type={"password"} value={password}/>

      </div>

      {/* Login error goes here where the styling has red text. hidden=true unless there is an error. */}
      <div className="errorMessage" hidden={!error}>{error.message}</div>

      <div className="button">
        <button onClick={handleLogin}
                disabled={!loginIsEnabled}
        >Login</button>
      </div>
    </div>
  );
}

export default BasicValidatingLoginFormTwo;

