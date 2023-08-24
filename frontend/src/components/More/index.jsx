import React from "react";
import "./style.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link as Anchors } from "react-router-dom";

export default function More() {
  return (
    <>
      <div className="more">
        <Anchors to="/details" id="more" className="btn btn-primary bton-title">
          <p className="moreDetails">
            {" "}
            More Details! <FaAngleDoubleRight size={20} />
          </p>{" "}
        </Anchors>
      </div>
    </>
  );
}
