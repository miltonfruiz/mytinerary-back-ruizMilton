import React from "react";
import "./style.css";
import { FaArrowAltCircleRight, FaCity } from "react-icons/fa";

export default function Accordion({ itineraryDuration }) {
  return (
    <div className="accordion col-8 mt-5" id="accordionExample">
      <div className="accordion-item accordionContainer">
        <h2 class="accordion-header">
          <button
            className="accordion-button col-8"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <p className="buttonName">
              <FaArrowAltCircleRight size={20} className="arrowIcon" />
              View more
            </p>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Itinerary #1
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show row"
                >
                  <div class="accordion-body row justify-content-center d-flex">
                    <div className="col-3 justify-content-center d-flex">
                      <h6 className="h6">
                        <FaCity size={20} className="classIcon" />
                        Duration:
                      </h6>
                      <p className="p">{itineraryDuration}</p>
                    </div>
                    <div className="col-3 justify-content-center d-flex">
                      <h6 className="h6">
                        <FaCity size={20} className="classIcon" />
                        Price:
                      </h6>
                      <p className="p">{itineraryDuration}</p>
                    </div>
                    <div className="col-3 justify-content-center d-flex">
                      <h6 className="h6">
                        <FaCity size={20} className="classIcon" />
                        Likes:
                      </h6>
                      <p className="p">{itineraryDuration}</p>
                    </div>
                    <div className="col-3 justify-content-center d-flex">
                      <h6 className="h6">
                        <FaCity size={20} className="classIcon" />
                        Tags:
                      </h6>
                      <p className="p">{itineraryDuration}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
