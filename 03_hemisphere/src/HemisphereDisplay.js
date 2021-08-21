import React from "react";
import northPic from "./image/northern_hemisphere.png";
import southPic from "./image/southern_hemisphere.jpg";
import "./Hemisphere.css";

const hemisphereConfig = {
  Northern: {
    text: "It is Northern Hemisphere",
    picture: northPic,
  },
  Southern: {
    text: "It is Southern Hemisphere",
    picture: southPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  // console.log(latitude)
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  console.log(hemisphereConfig[hemisphere]);
  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="hemisphere" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};
// const HemisphereDisplay = (aliveli) => {
//     console.log(aliveli.latitude)
//     return (
//         <div>
//             Hey you are in Northern hemisphere!
//         </div>
//     )
// }

export default HemisphereDisplay;
