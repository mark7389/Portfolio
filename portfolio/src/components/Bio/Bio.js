import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader/Subheader';
import BackToTop from '../BackToTop';
import './Bio.css'
import Footer from '../Footer/Footer';

const Bio = ()=>{
  return(
    <Paper className="overview" style={{width:"100%",minHeight:"500px", borderBottom:"2px solid black", backgroundColor:"#fff"}}>
        <Subheader inset={true} style={{fontSize:"34px",textAlign:"center",fontStyle:"italic",backgroundColor:"#000",color:"#fff",fontWeight:"900"}}>Overview<BackToTop /></Subheader>
        <div className="about">
          <div style={{margin:"auto", width:"80%"}}
          >
          <img src="/imgs/mark.jpg" alt="" style={{borderRadius:"50%", width:"20%", margin:"5%",marginLeft:"40%", boxShadow:"0.5px 0.5px 5px black"}} /></div>
          <p style={{textAlign:"justified", fontSize:"18px", margin:"2%", color:"#fff", background:"#000", padding:"16px"}}>
          BA in general Business Management and Administration from the City College of New York. I was a single owner and manager of a transportation company based in Orlando, FL. As a member of the owner/operator community I established positive working relationships at all levels. As the first step of transitioning my career to web development, currently building on my previous knowledge of programming and learning new technologies to implement purposeful applications. I have the ability to learn quickly and love solving complex problems. 
          My major interests include using logic to solve convoluted questions and data manipulation / representation. I am aspiring to become a productive member of the software development community.
          
          </p>
          
        </div>
        
    </Paper>
  )
}

export default Bio;