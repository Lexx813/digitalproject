import React from 'react';
import {Link} from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
 return <div >
     <div>
       <SurveyList />
       <div className="dashboard">
         <Link to="/surveys/new" className="btn-text">
         Add Survey &rarr;
         </Link>
         <Link to="/blog/new" className="btn-text">
         Add Blog &rarr;
         </Link>
       </div>
     </div>
   </div>;
};

export default Dashboard;
