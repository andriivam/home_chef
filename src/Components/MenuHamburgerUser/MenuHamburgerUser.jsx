import { slide as Menu } from 'react-burger-menu';
import React from 'react'

export default function MenuHamburger() {

    // showSettings (event) {
    //     event.preventDefault();
        
    //   }
  return (
    <div className='menuHamburger'>
    <Menu>
      <a id="myorders" className="menu-item" href="/myorders">My orders</a>
        
        <a id="history" className="menu-item" href="/history">History</a>
        <a id="editprofile" className="menu-item" href="/editprofile">Edit profile</a>
        <a id="invitefriends" className="menu-item" href="/invitefriends">Invite friends</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
      
    </div>
  )
}
