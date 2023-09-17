import React, { useEffect } from "react";
import Anchor from "../Anchor";
import { LINK } from "../../variables/const";
import "./style.css";
import { useDispatch } from "react-redux";
import userActions from "../../store/actions/user";

export default function Nav() {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");

  return (
    <nav>
      <div className="row justify-content-center d-flex align-items-center navContainer">
        {LINK.map((each, key) => (
          <Anchor
            key={key}
            href={each.href}
            styles={each.styles}
            tittle={each.tittle}
            position={each.position}
            name={each.name}
            onClick={() => handlerLogOut()}
          />
        ))}
        {!token ? (
          <a href="/login" className="btn btn-primary px-4 col-1  logClass">
            {" "}
            Login
          </a>
        ) : (
          <button
            className="btn btn-primary px-4 col-1  logClass"
            onClick={() => dispatch(userActions.log_out())}
          >
            {" "}
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
