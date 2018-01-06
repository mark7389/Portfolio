import React from 'react';
import Project from '../Project';
import imgs from './data';
import "./Projects.css"
import Paper from 'material-ui/Paper/Paper';
import Subheader from 'material-ui/Subheader';
import BackToTop from '../BackToTop';
const Projects = () => {


    return (
        
        
        <div className="projectImgs" id="projects">
            
            <Paper className="gird" style={{width:"100%",minHeight:"850px", borderBottom:"2px solid black", backgroundColor:"#fff"}} rounded={false} zDepth={0}>
             
            <Subheader inset={true} 
            style={{fontSize:"34px",fontStyle:"italic",backgroundColor:"#000",color:"#fff",fontWeight:"900", textAlign:"center"}}>
            Projects<BackToTop /></Subheader>
               {imgs.map((img, i)=>{
                return <Project {...img} key={i}/>
                })}
        
            </Paper>
             

         </div>     
        
        
    )




}

export default Projects;