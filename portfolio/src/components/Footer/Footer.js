import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import icons from './icons';


const Footer = ()=>{


      return(
        
        <List style={{display:"inline-block", margin:"auto"}}>
          {icons.map((icon,i)=>{
            return <img src={icon.src} alt="" style={{width:"84px",height:"64px", marginLeft:"75px"}}/>
          })}
        </List>

      )



}

export default Footer;