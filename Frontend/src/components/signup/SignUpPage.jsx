import Axios from "axios";
import { useState } from "react";
import Title from "../utils/Title";
import PageBody from "./PageBody";
import SignInBox from "./SignInBox";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  //react states
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({ valid: true, msg: "" });
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({ valid: true, msg: "" });
  const [signupSuccess, setSignupSuccess] = useState({
    success: null,
    msg: "",
    token: "",
  });

  const navigate = useNavigate();

  //handel all states
  const handelName = (event) => {
    setName(event.target.value);
  };
  const handelUsername = (event) => {
    setUsername(event.target.value);
  };
  const handelEmail = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    //email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(enteredEmail);
    if (!isValidEmail) {
      setEmailError({ valid: false, msg: "Not a valid email address" });
    } else {
      setEmailError({ valid: true, msg: "Valid email address" });
    }
  };
  const handelPassword = (event) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);

    //password validation
    const hasUpperCase = /[A-Z]/.test(enteredPassword);
    const hasLowerCase = /[a-z]/.test(enteredPassword);
    const hasNumbers = /\d/.test(enteredPassword);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(enteredPassword);
    const isValidLength = enteredPassword.length >= 8;

    if (!hasUpperCase) {
      setPasswordError({
        valid: false,
        msg: "Must contain Uppercase character",
      });
    } else if (!hasLowerCase) {
      setPasswordError({
        valid: false,
        msg: "Must contain Lowercase characters",
      });
    } else if (!hasNumbers) {
      setPasswordError({
        valid: false,
        msg: "Must contain Number",
      });
    } else if (!hasSpecialChars) {
      setPasswordError({
        valid: false,
        msg: "Must contain Special Character",
      });
    } else if (!isValidLength) {
      setPasswordError({
        valid: false,
        msg: "Must contain at least 8 characters",
      });
    } else {
      setPasswordError({ valid: true, msg: "Valid Password" });
    }
  };

  // submit data to server
  const onSubmit = async () => {
    let success = false;
    let token = "";
    await Axios.post("http://localhost:3000/signup", {
      name: name === "" ? null : name,
      username: username === "" ? null : username,
      email: email === "" ? null : email,
      password: password === "" ? null : password,
    })
      .then((res) => {
        setSignupSuccess({
          success: res.data.success,
          msg: res.data.msg,
          token: res.data.token,
        });
        success = true;
        token = res.data.token;
      })
      .catch((err) => {
        setSignupSuccess({
          success: err.response.data.success,
          msg: err.response.data.msg,
          token: "",
        });
        return;
      });

    if (success) {
      navigate("/posts", { state: { token: token, showEmailVerify: true } });
    }
  };

  return (
    <div className="h-screen bg-[#131D3B]">
      <div className=" flex flex-col items-center justify-center">
        <Title description="Kickstart your journey with us! Sign Up here" />
        <PageBody
          handelName={handelName}
          handelUsername={handelUsername}
          handelEmail={handelEmail}
          handelPassword={handelPassword}
          onSubmit={onSubmit}
        />
        <SignInBox />
        <Alert
          emailError={emailError}
          passwordError={passwordError}
          signupSuccess={signupSuccess}
        />
      </div>
    </div>
  );
};

export default SignUpPage;