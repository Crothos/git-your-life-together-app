import React from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectsList from '../components/ProjectsList';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Landing = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });
  
    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Navigate to="/landing" />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user?.username) {
      return (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      );
    }
    return (
        <div className="container-fluid">
            <Navbar />
            <ProjectsList
            projects={user.projects}
            title = {`${user.username}'s projects:`}
            showTitle = {false}
            showUsername = {false}
            />
        </div>
    );
};

export default Landing;