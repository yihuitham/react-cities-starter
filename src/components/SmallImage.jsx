import React from "react";

export default function SmallImage(props) {
  return (
    <img
      className="thumb"
      src={props.img}
      alt={props.city}
      onClick={props.enlargeImg}
    />
  );
}
