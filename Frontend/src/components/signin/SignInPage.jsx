import Title from "../utils/Title";
import PageBody from "./PageBody";
import SignUpBox from "./SignUpBox";
import Alert from "./Alert";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  //react states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({ valid: true, msg: "" });
  const [signinSuccess, setSigninSuccess] = useState({
    success: null,
    msg: "",
    token: "",
  });

  const navigate = useNavigate();

  //handel states
  const handelUsername = (event) => {
    setUsername(event.target.value);
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
    await Axios.post("http://localhost:3000/signin", {
      username: username === "" ? null : username,
      password: password === "" ? null : password,
    })
      .then((res) => {
        setSigninSuccess({
          success: res.data.success,
          msg: res.data.msg,
          token: res.data.token,
        });
        success = true;
        token = res.data.token;
      })
      .catch((err) => {
        setSigninSuccess({
          success: err.response.data.success,
          msg: err.response.data.msg,
          token: "",
        });
        return;
      });

    if (success) {
      navigate("/posts", { state: { token: token, showEmailVerify: false } });
    }
  };

  return (
    <div className="h-screen bg-[#111d3f]">
      <div className=" flex flex-col items-center justify-center">
        <Title description="Want to See latest posts? Sign in here." />
        <PageBody
          handelUsername={handelUsername}
          handelPassword={handelPassword}
          onSubmit={onSubmit}
        />
        <SignUpBox />
        <Alert passwordError={passwordError} signinSuccess={signinSuccess} />
      </div>
    </div>
  );
};

export default SignInPage;