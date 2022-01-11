import React from "react";
import Photo from "../componant/Photo";
import dummydatas from "../static/dummydatas";
import "./Horse.css";

function Horse() {
  const Horsedatas = dummydatas.filter((photos) => {
    return photos.title === "horse";
  });
  return (
    <div>
      <h1>Horse</h1>
      <Photo photos={Horsedatas} />
    </div>
  );
}

export default Horse;
