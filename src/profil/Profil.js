import React from 'react';
import PropTypes from 'prop-types';

export default function Profil(props) {
  function handleName(e){
    e.preventDefault();
    alert(`${props.name}`);
  }
    return (
        <div className="">
          <h1 style={{color:'blue'}}>{props.name}</h1>
          <p style={{textDecoration: 'underline'}}>
            {props.bio}
          </p>
          <img src={props.children} alt="photo-profil" style={{borderRadius: '30px'}} /><br />
          <button type="submit" onClick={(e)=>props.handleName(props.name,e)} >Salut</button>
          
        </div>
      );
}
Profil.defaultProps = {
  name: "Vous avez oublié d'entrer votre nom",
  bio: "Vous avez oublié d'entrer votre bio",
  children:"/point.png"
 };
 Profil.propTypes={
   name:PropTypes.string,
   bio:PropTypes.string,
 }
   