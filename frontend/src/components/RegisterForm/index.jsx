import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import userActions from "../../store/actions/user";
import "./style.css";
import { GoogleLogin } from "@react-oauth/google";
import jwtdecode from "jwt-decode";

export default function RegisterForm() {
  let inputName = useRef();
  let inputLastName = useRef();
  let inputEmail = useRef();
  let inputPassword = useRef();
  let inputImages = useRef();
  let inputCountry = useRef();
  const dispatch = useDispatch();

  let handleRegister = () => {
    dispatch(
      userActions.register({
        name: inputName.current.value,
        lastName: inputLastName.current.value,
        email: inputEmail.current.value,
        password: inputPassword.current.value,
        images: inputImages.current.value,
        country: inputCountry.current.value,
      })
    );
  };

  const signUpGoogle = (credentialResponse) => {
    let dataUser = jwtdecode(credentialResponse.credential);
    dispatch(
      userActions.sign_in({
        name: dataUser.name,
        lastName: dataUser.lastName,
        email: dataUser.email,
        password: dataUser.password,
        images: dataUser.images,
        country: dataUser.country,
      })
    );
  };
  return (
    <>
      <div className="row justify-content-center d-flex ">
        <h2 className="col-8 mt-5 mb-5">Register</h2>
      </div>
      <div className="row justify-content-center d-flex">
        <form className="formRegister">
          <div className="col-12 mt-3">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              ref={inputEmail}
            />
          </div>
          <div className="col-12 mt-2">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              ref={inputPassword}
            />
          </div>
          <div className="col-12 mt-2">
            <label htmlFor="inputAddress" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              ref={inputName}
            />
          </div>
          <div className="col-12 mt-2">
            <label htmlFor="inputAddress2" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              ref={inputLastName}
            />
          </div>
          <div className="col-12 mt-2">
            <label htmlFor="inputCity" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              ref={inputImages}
            />
          </div>
          <div className="col-12 mt-2">
            <label htmlFor="inputState" className="form-label">
              Country
            </label>
            <select id="inputState" className="form-select">
              <option>Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="col-12 mt-2">
            <button
              type="submit"
              className="btn btn-outline-primary mb-4 mt-3 buttonRegister"
              onClick={() => handleRegister()}
            >
              Register
            </button>
            <GoogleLogin
              text="signup_with"
              size="large "
              onSuccess={signUpGoogle}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
