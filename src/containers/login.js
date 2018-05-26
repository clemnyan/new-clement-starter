import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { loginUser } from '../actions/user';

class logIn extends React.Component {
  constructor(props) {
    super();

    this.state = {
      password: '',
      username: '',
      showError: false,
      errorMessage: '',
    };

    this.userNameChange = this.userNameChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  handleSignIn() {
    console.log('me');
    this.props.loginUser({ username: this.state.username, password: this.state.password }, this.props.history);
  }

  userNameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  passwordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  renderError() {
    if (this.state.showError) {
      return (
        <div className="signinError">
          {this.state.errorMessage}
        </div>
      );
    } else {
      return (<div />);
    }
  }

  render() {
    return (
      <div id="signInContent">
        {this.renderError()}

        <div className="card-panel teal lighten-2" id="signInFields">
          <div className=" signInUserName">
            <span>Username</span>
            <input onChange={this.userNameChange} />
          </div>
          <div className="signInPassword">
            <span>Password</span>
            <input type="password" onChange={this.passwordChange} />
          </div>
          <button className="signUpButton" onClick={this.handleSignIn}>sign in</button>
        </div>
      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    authenticated: state.authenticated,
  }
);
// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default withRouter(connect(mapStateToProps, { loginUser })(logIn));
