import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import {default as Icon} from 'material-ui/svg-icons/navigation/arrow-upward';
import './BackToTop.css'
const smoothScroll = require('smoothscroll');

class BackToTop extends Component{

    handleClick = ()=>{
        smoothScroll(0);
    }



    render(){
      return(
          
            <IconButton tooltip="Back to Top" onClick={this.handleClick} mini="true" style={{float:"right"}}> <Icon color="#fff"/></IconButton>
          
      )
    }



}

export default BackToTop;