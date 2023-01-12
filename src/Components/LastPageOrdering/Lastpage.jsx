
import React from "react";
// import { useMediaQuery } from 'react-responsive'
import "./Lastpage.css";
import image from '../LoginPage/images/image.png';
import {Link} from 'react-router-dom';

// import { Button } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";

export default function Lastpage() {
  return (
    <div className="lastpage">
      <Link to="/home">
        <img src={image} alt='Logo' />
      </Link>
      {/* <h3 className="lastpagethanks">THANKS FOR ORDERING</h3>
      <button className="lastpageback">
        Back to the Homepage
      </button> */}
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
//   }
