//SURVEYFIELD CONTAINS LOGIC TO RENDER A SINGLE LABEL AND TEXT
import React from 'react';

export default ({ input, label, meta:{error, touched} }) => {

 return (
  <div>
  <label>{label}</label>
  <input {...input} style={{marginBottom: '5px'}}/>
  <div className="red-text" style={{marginBottom: '2ppx'}}>
  {touched && error}
  </div>
  </div>
 );
};