
import React from "react";
// import { useMediaQuery } from 'react-responsive'
import "./Logo.css";
import image from "./images/image.png";
// import { Button } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo">
      <button className="logoButton">
        <img src={image} />
      </button>
    </div>
  );
}

// class redirection extends Component {

//     faireRedirection=()=> {
//       let url = "maNouvelleURL"
//       let history = useHistory()
//       history.push(url)
//     }

//     render() {
//       return (
//         <div>
//         <Button onClick={this.faireRedirection} style={{backgroundImage:"url('./images/images.png')",backgroundSize:"cover", width:"40px", height:"40px"}}>

//         </Button>
//         </div>
//       )
//     }
//