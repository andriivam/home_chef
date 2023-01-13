import './Home.css'
import React, { useState } from 'react';

function RegisterForm() {
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dishImage, setDishImage] = useState(null);
  const [dishDescription, setDishDescription] = useState('');

  const handleAvatarUpload = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleDishImageUpload = (event) => {
    setDishImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
	console.log(avatar);
    console.log(dishImage);
  };

  return (
	<div> 
		<hr/>
	<h3> Become A Chef</h3>
	<form className="form-container" onSubmit={handleSubmit}>
      <div className="avatar-upload-container">
        <input id="avatar-input" className="input-field" type="file" onChange={handleAvatarUpload} accept="image/*" />
        {avatar ? (
          <img src={URL.createObjectURL(avatar)} alt="Avatar" />
        ) : (
          <label htmlFor="avatar-input">
            <div className="upload-text">Upload your avatar</div>
          </label>
        )}
      </div>
      <label>
       Your Chef Name:
        <input className="input-field" type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
	  <label>
    Description:
    <textarea className="input-field center-text" value={description} onChange={(event) => setDescription(event.target.value)} />
	</label>
      <br />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
	  <div className="dish-container">
    <label>
        Dish Image:
        <input className="input-field hide-file-text chooseFile" type="file"  onChange={handleDishImageUpload} accept="image/*" />
    </label>
    <label>
        Dish Description: <br/>
        <textarea className="input-field" type="text" value={dishDescription} onChange={(event) => setDishDescription(event.target.value)} />
    </label>
</div>

</div>
<br />
<button className="submit-button" type="submit">Submit</button>
</form></div>
);
}

export default RegisterForm;
