
import React from "react";
// import { useMediaQuery } from 'react-responsive'
import "./Loginpage.css";
import image from '../LoginPage/images/image.png';



import {Link} from 'react-router-dom';

// import { Button } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";

export default function Loginpage() {
  return (
    <div className="loginpagelogo">
    <Link to="/home" >
        <img src={image} alt='Logo' />
      </Link>
      {/* <form onSubmit={this.handleSubmit}> */}
        {/* <label>
          Email
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Password
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Sign in" />
      </form> */}
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
