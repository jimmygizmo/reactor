import {useEffect, useState} from 'react'
import  mockLogin  from "./mockLoginFunction.js";
import "./loginstyles.css";


const BasicValidatingLoginForm = () => {

  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [error, setError] = useState('');
  const [loginIsEnabled, setLoginIsEnabled] = useState(false);

  useEffect( () => {
    setLoginIsEnabled(
      emailIsValid && passwordIsValid
    );
  }, [emailIsValid, passwordIsValid])

  return (
    <div className="container">
      <div className="row">
        <label htmlFor={"email"}>Email</label>

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
        <label htmlFor={"password"}>Password</label>

        <input onChange={
          (e) => {
            if ( e.target.value.length < 6 ) { setPasswordIsValid(false)
            } else { setPasswordIsValid(true) }
            setPassword(e.target.value);
            setError("");
          }
        }  id={"password"} type={"password"} value={password}/>

      </div>

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
      <div className="errorMessage" hidden={!error}>{error.toString()}</div>

      <div className="button">
        <button onClick={
          ( event) => {
            try {
              setLoginIsEnabled(false);
              mockLogin({ email, password } ).then(
                (authToken) => {
                  console.log("LOGIN SUCCESS RETURNED TO UI - auth-token: " + authToken);
                  setEmail("YOU ARE NOW LOGGED-IN");
                  setPassword("");
                  window.alert("LOGIN SUCCESS RETURNED TO UI - auth-token: " + authToken);
                }
              ).catch(
                (errorInner) => {
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
          }
        }
                disabled={!loginIsEnabled}
        >Login</button>
      </div>
    </div>
  );
}

export default BasicValidatingLoginForm;

