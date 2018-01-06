import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader/Subheader';
import BackToTop from '../BackToTop';
import './Bio.css'

const Bio = ()=>{
  return(
    <Paper className="overview" style={{width:"100%",minHeight:"730px", borderBottom:"2px solid black", backgroundColor:"#fff"}}>
        <Subheader inset={true} style={{fontSize:"34px",textAlign:"center",fontStyle:"italic",backgroundColor:"#000",color:"#fff",fontWeight:"900"}}>Overview<BackToTop /></Subheader>
        <div className="about">
          <img src="/imgs/mark.jpg" alt="" style={{float:"left",borderRadius:"50%", width:"20%", margin:"0.8%", boxShadow:"0.5px 0.5px 5px black"}} />
          <p style={{textAlign:"center", fontSize:"23px", marginTop:"9%", color:"#000"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum.</p>
        </div>
        
    </Paper>
  )
}

export default Bio;