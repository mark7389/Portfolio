import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MenuIcon from './Menu';
import Links from '../Links';
import MyTabs from './MyTabs';
class NavBar extends Component {

styles = {
    
    background:"transparent",
    // borderTop: "2px solid black",
    borderBottom: "2px solid black",
    boxShadow: "none",
}
render(){
      return (
          <div >
            <AppBar className="nav" title="Mark Soliman" showMenuIconButton={false}
                    iconElementLeft={<MenuIcon />}
                    style={this.styles} 
                    titleStyle={{color:"#000", fontWeight:"900", fontStyle:"bold", fontSize:"28px"}}>
                    <MyTabs />
            </AppBar>
        </div> 
          
      )
    }


}


export default NavBar;