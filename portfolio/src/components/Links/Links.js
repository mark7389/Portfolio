import React from 'react';
import IconButton from 'material-ui/IconButton/IconButton';
import './Links.css';

const Links = ()=>{

      return (
        
        <div className="myLinks" style={{padding:0}}>
          <IconButton href="https://github.com/mark7389" target="_blank" iconClassName="linkIconsGithub" style={{padding:0}}/>
          <IconButton href="https://www.linkedin.com/in/m-soliman/" target="_blank" iconClassName="linkIconsIn" style={{padding:0}}/>
        </div>
      )



}

export default Links;