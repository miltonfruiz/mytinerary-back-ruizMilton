import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import userActions from "../../store/actions/user";
import "./style.css";

export default function LogIn() {
  let userInStore = useSelector((store) => store.userReducer.user);
  let inputEmail = useRef();
  let inputPassword = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.sign_in());
  }, []);

  let handleSignIn = (event) => {
    event.preventDefault();
    dispatch(
      userActions.sign_in(inputEmail.current.value, inputPassword.current.value)
    );
  };
  return (
    <>
      <div className="row justify-content-center d-flex ">
        <h2 className="col-8 mt-5 mb-5">Login</h2>
      </div>
      <div className="row justify-content-center d-flex divFormContainer">
        <form className="col-3 align-self-center formContainer">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label mt-5">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={inputEmail}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              ref={inputPassword}
              autoComplete="on"
            />
          </div>
          <div className="mb-3 ms-2 mt-4">
            <a
              href="/register"
              className="form-check-label createClass"
              htmlFor="exampleCheck1"
            >
              * Create Account
            </a>
          </div>
          <button
            onClick={() => handleSignIn()}
            type="submit"
            className="btn btn-outline-primary buttonSignIn mb-4"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
