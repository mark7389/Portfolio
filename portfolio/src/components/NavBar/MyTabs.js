import React, { Component } from 'react';
import Tabs, {Tab} from 'material-ui/Tabs';
const smoothScroll = require('smoothscroll');

class MyTabs extends Component {
    style={
        color:"#000",
    }
    handleClick = (str)=> {
        console.log(str);
        const div = document.querySelector(`.${str}`);
        console.log(div);
        this.scrollTo(div);
        
    }
    scrollTo = (element)=>{
      
      smoothScroll(element,1000);
    }

    render(){
      return (

          <Tabs  inkBarStyle={{background:"#000"}} style={{width:"35%", marginTop:"1%"}} tabItemContainerStyle={{background:"transparent"}} >
              <Tab label="About" style={this.style} onActive={()=>{this.handleClick("overview")}}/>
              <Tab label="Projects" style={this.style} onActive={()=>{this.handleClick("projectImgs")}}/>
              <Tab label="Contact" style={this.style} onActive={()=>{this.handleClick("contact")}}/>
          </Tabs>




      )
    }





}

export default MyTabs;