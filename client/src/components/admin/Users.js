import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../img/avatar.png';

const User = (props) => {
  let user = props.user.login;

  return (
    <div className="user_container">
      <div className="avatar">
        <img alt="avatar" src={Avatar} />
      </div>
      <div className="nfo">
        <div><span>Name:</span>{user.name}</div>
        <div><span>Lastname:</span>{user.lastname}</div>
        <div><span>Email:</span>{user.email}</div>
        <div className="dashboard">
          <Link to="/surveys/new" className="btn-text">
            Add Survey &rarr;
         </Link>
          <Link to="/blog/new" className="btn-text">
            Add Blog &rarr;
         </Link>
        </div>
      </div>
    </div>
  )
}


export default User;