import React from "react";
import ReactDOM from "react-dom";

function Card (props) {
  return <div>
     <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
}


ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce" tel ="111" email="123@gmail.com" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"/>
    <Card name="Eyonce" tel ="222" email="222@gmail.com" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"/>
    <input id="fName" />
  </div>,
  document.getElementById("root")
);
