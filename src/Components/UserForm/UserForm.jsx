import React from 'react';
import './Home.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function UserForm() {
	const [formInput, setFormInput] = useState({
		password: "",
		confirmPassword: "",
	  });
	const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
	if (formInput.confirmPassword !== formInput.password) {
		  alert( "confirmPassword : Password and confirm password should be same")
		}
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await fetch('http://localhost:4000/home/LoginPage/userForm', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            console.log(response)
        } catch (err) {
            console.error(err.message)
        }
    }

	return (
		<div className='background'>
			<h3 className='userTitle'>User registration</h3>
			{/* <!-- Body of Form starts --> */}
			<div className="container">
				<form method="post" autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
					{/* <!--First name--> */}
					<div className="box">
						<label htmlFor="firstName" className="fl fontLabel"> First Name: </label>

						<div className="fr">
							<input type="text" name="firstName"
								className="textBoxe" autoFocus="on" required {...register("firstName")} />
						</div>
						<div className="clr"></div>
					</div>
					{/* <!--First name--> */}

					{/* <!--Second name--> */}
					<div className="box">
						<label htmlFor="secondName" className="fl fontLabel"> Second Name: </label>

						<div className="fr">
							<input type="text" required name="secondName"
								className="textBoxe" {...register("secondName")} />
						</div>
						<div className="clr"></div>
					</div>
					{/* <!--Second name--> */}

					{/* <!--address--> */}
					<div className="box">
						<label htmlFor="Address" className="fl fontLabel"> Address: </label>

						<div className="fr">
							<input type="text" required name="address"
								className="textBoxe" {...register("address")} />
						</div>
						<div className="clr"></div>
					</div>
					{/* <!--Address--> */}
					{/* <!--city + zip--> */}
					<div className="box">
						<label htmlFor="zip" className="fl fontLabel"> Zip Code & City: </label>

						<div className="fr">
							<input type="text" required name="secondName"
								className="textBoxe" {...register("postCode")} />
						</div>
						<div className="clr"></div>
					</div>
					{/* <!--city + zip--> */}


					{/* <!---Phone No.------> */}
					<div className="box">
						<label htmlFor="phone" className="fl fontLabel"> Phone No.: </label>

						<div className="fr">
							<input type="text" required name="phoneNo" maxLength="10" className="textBoxe" {...register("phone")} />
						</div>
						<div className="clr"></div>
					</div>
					{/* <!---Phone No.----> */}


					{/* <!---Email ID----> */}
					<div className="box">
						<label htmlFor="email" className="fl fontLabel"> Email : </label>

						<div className="fr">
							<input type="email" required name="email" className="textBoxe" {...register("email")} />
						</div>
						<div className="clr"></div>
					</div>
					{/* <!--Email ID-----> */}

					{/* <!---Password----> */}
					<div className="box">
						<label htmlFor="password" className="fl fontLabel"> Password </label>

						<div className="fr">
							<input type="Password" required name="password" id="password" className="textBoxe" {...register("password")} value={formInput.password}/>
						</div>
						<div className="clr"></div>
					</div>

					{/* <!---Password----> */}
					<div className="box">
						<label htmlFor="password" className="fl fontLabel"> Confirm Password:</label>

						<div className="fr">
							<input type="Password" required name="password" className="textBoxe" id="password_confirm" input="check" value={formInput.confirmPassword}/>
						</div>
						<div className="clr"></div>
					</div> &nbsp;


					{/* <!--Terms and Conditions------> */}
					<div className="boxContainer">
						<input className='checkbox' type="checkbox" name="Terms" required />
						<div className="boxTerms">I accept the terms and conditions</div>
					</div>&nbsp;
					{/* <!--Terms and Conditions------> */}



					{/* <!---Submit Button------> */}
					<div className="box">
						<input type="Submit" name="Submit" className="submit" defaultValue="submit" />
					</div>
					{/* <!---Submit Button-----> */}
				</form>
			</div>

		</div>
	)
}