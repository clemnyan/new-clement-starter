import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Switch } from 'react-router';
// import logIn from '../containers/login';
import signUp from '../containers/signup';
// import requireAuth from '../components/RequireAuth';


const homePage = (props) => {
  return (
    <div>
      <div id="logo1" >
        <img className="responsive-img" src="/src/pics/samplelogo.PNG" alt="" />
      </div>
      <div id="logins">
        <NavLink to="/login">
          <button id="b1" className="waves-effect waves-light btn-large"> Login</button>
        </NavLink>
        <NavLink to="/signup">
          <button id="b1" className="waves-effect waves-light btn-large"> SignUp</button>
        </NavLink>
      </div>
    </div>);
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={homePage} />

          <Route path="/signup" component={signUp} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
