import './Home.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function RegisterForm() {

  const [avatar, setAvatar] = useState(null);
  const [cuisineType, setCuisineType] = useState('select');

  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm();

  const handleAvatarUpload = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleCuisineType = (event) => {
    setCuisineType(event.target.value);
    console.log(event.target.value, 'cuisineType');
  }

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch('http://localhost:3001/home/LoginPage/chefForm', {
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
      <h3 className='userTitleu'> Become A Chef</h3>
      <form className="form-container" method='post' id='addAmenuForm' onSubmit={handleSubmit(onSubmit)}>
        <div className="avatar-upload-container">
          <input id="avatar-input" className="input-field" type="file" onChange={handleAvatarUpload} accept="image/*"  {...register("chefPhoto")}/>
          {avatar ? (
            <img src={URL.createObjectURL(avatar)} alt="Avatar" />
          ) : (
            <label htmlFor="avatar-input">
              <div className="upload-text">Upload your avatar</div>
            </label>
          )}
        </div><br />
        <label>
          Your Chef Name
          <input type='text' className="input-field"  {...register("chefName")} />
        </label><br />
        <label>
          First Name
          <input type='text' className="input-field"  {...register("firstName")} />
        </label>  <br />
        <label>
          Second Name
          <input className="input-field" type="text"  {...register("secondName")} />
        </label><br />

        <label>
          About you
          <textarea className="input-field center-text "   {...register("aboutMe")} />
        </label><br />
        <label>
          Phone<br />
          <input className="input-field" type="text"   {...register("phone")} />
        </label><br />
        <label>
          Email<br />
          <input className="input-field" type="email"   {...register("email")} />
        </label><br />
        <label htmlFor="cuisineTypes">Select Cuisine Type</label>
        <select className="dropDowm" id="cuisineType" {...register("cuisineType")}>
          <option value=""> Cuisine Type </option>
          <option value="1">Italian</option>
          <option value="2">Indian</option>
          <option value="3">American</option>
          <option value="4">Thai</option>
          <option value="5">Mexican</option>
          <option value="6">European</option>
          <option value="7">French</option>
          <option value="8">Vegan</option>
        </select>
        <br />
        <label>
          Zip Code
          <input className="input-field" type="text"   {...register("postCode")} />
        </label><br />
        <label>
          Address
          <input className="input-field" type="text"   {...register("address")} />
        </label><br />
        <label>
          Password
          <input className="input-field" type="password"  {...register("password")} />
        </label><br />
        <label>
          Confirm Password
          <input className="input-field" type="password"  {...register("password")} />
        </label>
        <br />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        </div>
        <br />
       
        <button className="submitButton" type="submit">Submit</button>
        <Link to="/home/chefForm/chefMenu"><button className="submit-button" type="submit">Upload your Menu</button><br /><br /></Link>
      </form>


    </div>
  );
}

export default RegisterForm;
