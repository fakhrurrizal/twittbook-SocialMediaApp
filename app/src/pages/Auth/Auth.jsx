import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../action/AuthAction";
import { useNavigate } from "react-router-dom"

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);

  // const dispatch = useDispatch()

  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };

  return (
    <div className="Auth">
      {/* left side */}

      <div className="a-left">
        <img src={Logo} alt="" />

        <div className="Webname">
          <h1>Santri Programming</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* right form side */}

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Register" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
            </span>
            <button
              className="button infoButton"
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;

// function SignUp() {
//   return (
//     <div className="a-right">
//       <form action="" className="infoForm authForm">
//         <h3>Sign Up</h3>
//         <div>
//           <input
//             type="text"
//             name="firstname"
//             placeholder="First Name"
//             className="infoInput"
//           />
//           <input
//             type="text"
//             name="lastname"
//             placeholder="Last Name"
//             className="infoInput"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             className="infoInput"
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="infoInput"
//           />
//           <input
//             type="password"
//             name="confirmpassword"
//             placeholder="Confirm Password"
//             className="infoInput"
//           />
//         </div>
//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Already have an account? Login!
//           </span>
//         </div>
//         <button type="submit" className="button infoButton">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div className="a-right">
//       <form action="" className="infoForm authForm">
//         <h3>Login</h3>
//         <div>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             className="infoInput"
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="infoInput"
//           />
//         </div>
//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Don't have an account sign up? Sign Up!
//           </span>
//         </div>
//         <button type="submit" className="button infoButton">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
