import React from 'react'
import '../LoginPage/ForgotPasswordStyle.css'
import { Link } from 'react-router-dom';
import image from "./images/image.png";

export default function ForgotPassword() {
  return (
    <div className="forgotPwdPage">
        <div className="imgDiv">
            <div className="logoImg">
                    <Link to="/home">
                        <img src={image} alt='Logo'/>
                    </Link>
                </div>
        </div>
        <div>
        <form className='forgotpwdform'  color="#000000">
             <div className="forgotPAsswordPage">
                     <div className="enterMail">
                         <label htmlFor="email" className="loginemail" > Enter Email  </label>
                     </div>
                     <div className="mailinput">
                         <input type="email" required name="email" placeholder="Email" className="textBox" />
                     </div>
                     <div className="newPwd">
                         <label htmlFor="password" className="loginemail" >New Password </label>
                     </div>
                     <div className="newPwdinput">
                         <input type="Password" required name="password" placeholder="Password" className="textBox" />
                     </div>
                     <div className="confirmPwd">
                         <label htmlFor="password" className="loginemail" >Confirm Password </label>
                     </div>
                     <div className="confirmPwdinput">
                         <input type="Password" required name="password" placeholder="Password" className="textBox" />
                     </div>
                     <input type="Submit" name="Submit" className="submitLogin" defaultValue="Log in" />    
             </div>
         </form>
        </div>

    </div>



    // <div className="forgotPwdPage" align='center'color="#000000" >
    //     <div className="logoImg">
    //         <Link to="/home">
    //         <img src={image} alt='Logo' />
    //         </Link>
    //     </div>
        
    //     <form className='forgotpwdform'  color="#000000">
    //         <div className="forgotPAsswordPage">
    //                 <div className="enterMail">
    //                     <label htmlFor="email" className="loginemail" > Enter Email  </label>
    //                 </div>
    //                 <div className="mailinput">
    //                     <input type="email" required name="email" placeholder="Email" className="textBox" />
    //                 </div>
    //                 <div className="newPwd">
    //                     <label htmlFor="password" className="loginemail" >New Password </label>
    //                 </div>
    //                 <div className="newPwdinput">
    //                     <input type="Password" required name="password" placeholder="Password" className="textBox" />
    //                 </div>
    //                 <div className="confirmPwd">
    //                     <label htmlFor="password" className="loginemail" >Confirm Password </label>
    //                 </div>
    //                 <div className="confirmPwdinput">
    //                     <input type="Password" required name="password" placeholder="Password" className="textBox" />
    //                 </div>
    //                 <input type="Submit" name="Submit" className="submitLogin" defaultValue="Log in" />    
    //         </div>
    //     </form>
    // </div>
  )
}
