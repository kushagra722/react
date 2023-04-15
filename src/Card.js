import React from "react";

const Card = (props) => {

  return (
    <div>
      <img src={props.imageUrl} height={100} width={100}></img>
      <div>
        <span>{props.location}</span>
      </div>
      <div>
        <span>{props.startDate}</span>-<span>{props.endDate}</span>
      </div>
      <div>{props.description}</div>
    </div>
  );
};
export default Card;
