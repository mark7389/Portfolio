import React from 'react';
import Card, { CardTitle } from 'material-ui/Card';
import "./Project.css";
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardText from 'material-ui/Card/CardText';

const Project = (props) =>{
 
        return (
            
            <Card className="cards" 
            style={{"maxWidth":"26%", float:"left", "margin":"3%", "textAlign":"center" ,background:"rgba(0,0,0,1)",border:"2px solid #fff"}}>
            <CardHeader actAsExpander={true}
            showExpandableButton={true} iconStyle={{color:"#fff"}} style={{padding:"0px",background:"rgba(0,0,0,0.9)", border:"2px solid #fff"}} subtitleStyle={{display:"none"}}><CardTitle subtitle={props.title} subtitleColor="#fff" subtitleStyle={{height:"25px", "marginBottom":"18px"}}/> </CardHeader>   
                <a className="cards" href={props.link} target="_blank">
                    <CardMedia>
                        <img style={{width:"100%",height:"175px", border:"0.5px solid rgba(0,0,0,0.6)"}} src={props.src} alt="" />
                    </CardMedia>
                </a>
            <CardText expandable={true} style={{background:"#000", color:"#fff"}}>
                    {props.text}
            </CardText>   
            </Card>


        )



}

export default Project;