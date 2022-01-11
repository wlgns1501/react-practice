import React from "react";
import Photo from "../componant/Photo";
import dummydatas from "../static/dummydatas";
import "./Dog.css";

function Dog() {
  const Dogdatas = dummydatas.filter((photos) => {
    return photos.title === "dog";
  });
  return (
    <div>
      <h1>Dog</h1>
      <Photo photos={Dogdatas} />
    </div>
  );
}

export default Dog;
