import React, { useEffect } from "react";
import Anchor from "../Anchor";
import { LINK } from "../../variables/const";
import "./style.css";
import { useDispatch } from "react-redux";
import userActions from "../../store/actions/user";

export default function Nav() {
  const dispatch = useDispatch();

  let token = localStorage.getItem("token");
  // if (token) {
  //   LINK[3].tittle = "Logout";
  // }
  let handlerLogOut = () => {
    dispatch(userActions.log_out());
  };
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
          />
        ))}
        <button onClick={() => handlerLogOut()}> HOLA</button>
      </div>
    </nav>
  );
}
