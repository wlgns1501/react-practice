import React, { useState } from "react";
import Photo from "../componant/Photo";
import dummydatas from "../static/dummydatas";
import "./Cat.css";

const Cat = () => {
  const Catdatas = dummydatas.filter((photos) => {
    return photos.title === "cat";
  });

  return (
    <div>
      <h1>Cat</h1>
      <div className="container">
        <Photo photos={Catdatas} />
      </div>
    </div>
  );
};

export default Cat;
