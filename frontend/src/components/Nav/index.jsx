import React from "react";
import Anchor from "../Anchor";
import { LINK } from "../../variables/const";
import "./style.css";

export default function Nav() {
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
      </div>
    </nav>
  );
}
