import './Home.css'
import React, { useState } from 'react';
import {Link} from 'react-router-dom';


function RegisterForm() {
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  

  const handleAvatarUpload = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
	console.log(avatar);
  };

  return (
	<div className='background'> 
		<hr/>
	<h3 className='userTitle'> Become A Chef</h3>
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
      </div><br/>
      <label>
       Your Chef Name:
        <input className="input-field" type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
	  <label>
    Description:
    <textarea className="input-field center-text " value={description} onChange={(event) => setDescription(event.target.value)} />
	</label>
      <br />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
	  </div>
<br />
<Link to="/home/chefForm/chefMenu"><button className="submit-button" type="submit">Upload your Menu</button><br/><br/></Link>
<button className="submit-button" type="submit">Submit</button>
</form> 


</div>
);
}

export default RegisterForm;
