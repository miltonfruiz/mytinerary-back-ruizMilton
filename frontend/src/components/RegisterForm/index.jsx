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
        <form class="row g-3 formRegister">
          <div class="col-12">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-12 mt-0">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12 mt-0">
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
          <div class="col-12 mt-0">
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
          <div class="col-12 mt-0">
            <label for="inputCity" class="form-label">
              Image
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-12 mt-0">
            <label for="inputState" class="form-label">
              Country
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-12 mt-0">
            <button type="submit" className="btn btn-primary mb-3">
              Sign in
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
