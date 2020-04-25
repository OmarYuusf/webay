import React from "react";
import "./Points.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGifts } from "@fortawesome/free-solid-svg-icons";

const Points = () => {
  return (
    <div className="points">
      <div>
        <FontAwesomeIcon icon={faGifts} />
      </div>
      <h1>
        لديك <span>25</span> نقطه
      </h1>
    </div>
  );
};

export default Points;
