import { slide as Menu } from 'react-burger-menu';
import React from 'react'

export default function MenuHamburger() {

    // showSettings (event) {
    //     event.preventDefault();
        
    //   }
  return (
    <div className='menuHamburger'>
    <Menu>
        <a id="home" className="menu-item" href="/mymenu<">My Menu</a>
        <a id="addmenu" className="menu-item" href="/addmenu">Add menu</a>
        <a id="orders" className="menu-item" href="/orders">Orders</a>
        <a id="editprofile" className="menu-item" href="/editprofile">Edit profile</a>
        <a id="myrating" className="menu-item" href="/myrating">My rating</a>
        <a id="invitefriends" className="menu-item" href="/invitefriends">Invite friends</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
      
    </div>
  )
}
