import React, { useState } from "react";
import "./Photo.css";
// import dummydatas from "../static/dummydatas";
// import Photo from "../componant/Photo";

const Photos = ({ photos }) => {
  const [isChecked, setChecked] = useState(false);

  const handleChecked = (e) => {
    // console.log(e.target.src);
    setChecked(e.target.src);
    console.log(e.target);
  };

  return (
    <div>
      <div className="main">
        {photos.map((photo) => {
          return (
            <div className="photos" onClick={handleChecked}>
              <img value={isChecked} className="item" src={photo.address} />
            </div>
          );
        })}
      </div>
      <div>
        <img className="clickedImg" src={isChecked} />
      </div>
    </div>
  );
};

export default Photos;
