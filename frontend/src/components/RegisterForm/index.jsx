import React from "react";
import "./style.css";
import { GoogleLogin } from "@react-oauth/google";
import jwtdecode from "jwt-decode";

export default function RegisterForm() {
  const signUpGoogle = (credentialResponse) => {
    let dataUser = jwtdecode(credentialResponse.credential);
  };
  return (
    <>
      <div className="row justify-content-center d-flex ">
        <h2 className="col-8 mt-5 mb-5">Register</h2>
      </div>
      <div className="row justify-content-center d-flex">
        <form className="formRegister">
          <div className="col-12 mt-3">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div className="col-12 mt-2">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div className="col-12 mt-2">
            <label for="inputAddress" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12 mt-2">
            <label for="inputAddress2" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-12 mt-2">
            <label for="inputCity" class="form-label">
              Image
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div className="col-12 mt-2">
            <label for="inputState" className="form-label">
              Country
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-12 mt-2">
            <button
              type="submit"
              className="btn btn-outline-primary mb-4 mt-3 buttonRegister"
            >
              Register
            </button>
            <GoogleLogin
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
