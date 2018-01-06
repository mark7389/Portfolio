import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import {default as Icon } from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import Tabs, {Tab} from 'material-ui/Tabs';
const smoothScroll = require('smoothscroll');

class MenuIcon extends Component{
  
  handleClick = (str)=> {
          console.log(str);
          const div = document.querySelector(`.${str}`);
          console.log(div);
          this.scrollTo(div);
          
  }
  scrollTo = (element)=>{
        smoothScroll(element);
  }
  render(){
    return (

      <IconMenu iconStyle={{color:"#000"}} iconButtonElement={
        <IconButton ><Icon color="#000"/></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      > 
          <MenuItem onClick={()=>{this.handleClick("overview")}} primaryText="About" />
          <MenuItem onClick={()=>{this.handleClick("projectImgs")}} primaryText="Projects" />
          <MenuItem onClick={()=>{this.handleClick("contact")}} primaryText="Contact" />
          <MenuItem href="https://docs.google.com/document/d/1UUygN_g8QIsuttXbiapOdEnfBb0a6vUkms0dWs-iy9s/edit?usp=sharing" target="_blank" primaryText="Resume" />

      </IconMenu>
    )
  }
}


export default MenuIcon;