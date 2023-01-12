import React from 'react'
import './Home.css'
import { FaHome, FaPhoneAlt, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import {MdPassword} from 'react-icons/md';


export default function MainSection() {
    
    return( 
        <div className='background'>
          <h3>Become a chef</h3>
    {/* <!-- Body of Form starts --> */}
  	<div className="container">
      <form method="post" autoComplete="on">
        {/* <!--First name--> */}
		
    		<div className="box">
          <label htmlFor="firstName" className="fl fontLabel"> First Name: </label>
    			<div className="new iconBox"><FaUserAlt />
	          </div>
    			<div className="fr">
    					<input type="text" name="firstName" placeholder="First Name"
              className="textBox" autoFocus="on" required/>
    			</div>
    			<div className="clr"></div>
    		</div>
    		{/* <!--First name--> */}


        {/* <!--Second name--> */}
    		<div className="box">
          <label htmlFor="secondName" className="fl fontLabel"> Second Name: </label>
    			<div className="fl iconBox"><FaUserAlt /></div>
    			<div className="fr">
    					<input type="text" required name="secondName"
              placeholder="Last Name" className="textBox"/>
    			</div>
    			<div className="clr"></div>
    		</div>
    		{/* <!--Second name--> */}

            {/* <!--address--> */}
    		<div className="box">
          <label htmlFor="Address" className="fl fontLabel"> Address: </label>
    			<div className="fl iconBox"><FaHome /></div>
    			<div className="fr">
    					<input type="text" required name="address"
              placeholder="Last Name" className="textBox"/>
    			</div>
    			<div className="clr"></div>
    		</div>
    		{/* <!--Address--> */}
            {/* <!--city + zip--> */}
    		<div className="box">
          <label htmlFor="zip" className="fl fontLabel"> Zip Code & City: </label>
    			<div className="fl iconBox"><FaHome /></div>
    			<div className="fr">
    					<input type="text" required name="secondName"
              placeholder="Zip Code & City" className="textBox"/>
    			</div>
    			<div className="clr"></div>
    		</div>
    		{/* <!--Second name--> */}


    		{/* <!---Phone No.------> */}
    		<div className="box">
          <label htmlFor="phone" className="fl fontLabel"> Phone No.: </label>
    			<div className="fl iconBox"><FaPhoneAlt /></div>
    			<div className="fr">
    					<input type="text" required name="phoneNo" maxLength="10" placeholder="Phone No." className="textBox"/> 
    			</div>
    			<div className="clr"></div>
    		</div>
    		{/* <!---Phone No.----> */}


    		{/* <!---Email ID----> */}
    		<div className="box">
          <label htmlFor="email" className="fl fontLabel"> Email : </label>
    			<div className="fl iconBox"><FaEnvelope /></div>
    			<div className="fr">
    					<input type="email" required name="email" placeholder="Email" className="textBox"/>
    			</div>
    			<div className="clr"></div>
    		</div>
    		{/* <!--Email ID-----> */}

    		{/* <!---Password----> */}
            <div className="box">
          <label htmlFor="password" className="fl fontLabel"> Password </label>
    			<div className="fl iconBox"><MdPassword /></div>
    			<div className="fr">
    					<input type="Password" required name="password" placeholder="Password" className="textBox"/>
    			</div>
    			<div className="clr"></div>
    		</div> &nbsp;	
    	

    		{/* <!--Terms and Conditions------> */}
    		<div className="box terms">
    				<input type="checkbox" name="Terms" required /> &nbsp; I accept the terms and conditions
    		</div>  &nbsp;
    		{/* <!--Terms and Conditions------> */}



    		{/* <!---Submit Button------> */}
    		<div className="box">
    				<input type="Submit" name="Submit" className="submit"  defaultValue="submit"/>
    		</div>
    		{/* <!---Submit Button-----> */}
      </form>&nbsp;&nbsp;
  </div>
 
        </div>
    ) 
}
