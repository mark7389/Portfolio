import React from 'react';
import Subheader from 'material-ui/Subheader/Subheader';
import Paper from 'material-ui/Paper/Paper';
import List, {ListItem} from 'material-ui/List';
import {default as Call} from 'material-ui/svg-icons/communication/call';
import {default as Email} from 'material-ui/svg-icons/communication/email';
import {default as Social} from 'material-ui/svg-icons/social/public';
import './Contact.css';
import BackToTop from '../BackToTop';
import Links from '../Links';

const Contact = ()=>{

    return (

        <Paper className="contact" style={{width:"100%",minHeight:"730px", borderBottom:"2px solid black", backgroundColor:"#fff"}}>
            
            <Subheader inset={true} 
            style={{fontSize:"34px",textAlign:"center",fontStyle:"italic",backgroundColor:"#000",color:"#fff",fontWeight:"900", maxHeight:"48px", lineHeight:"48px", verticalAlign:"middle"}}>
            Contact<BackToTop /></Subheader>
            <div className="info">
                    <List style={{textAlign:"center"}}>
                        <ListItem leftIcon={<Call color="#000"/>} primaryText="347-933-0816"/>
                        <ListItem leftIcon={<Email color="#000"/>} primaryText="mark.soliman73@gmail.com"/>
                        <ListItem leftIcon={<Social color="#000" />} primaryText={<Links />} />
                    </List>
            </div>
        </Paper>


    )



}


export default Contact;