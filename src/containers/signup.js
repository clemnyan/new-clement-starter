import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { signupUser } from '../actions/user';


class signUp extends React.Component {
  constructor(props) {
    super();

    this.state = {
      email: '',
      password: '',
      showError: false,
      errorMessage: '',
    };

    this.handleSignUp = this.handleSignUp.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  handleSignUp() {
    this.props.signupUser(this.state.email, this.state.password);
  }

  emailChange(event) {
    this.setState({
      email: event.target.value,
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
        <div className="card-panel teal lighten-2 signInFields">
          <div className="signInUser">
            <span>Email</span>
            <input onChange={this.emailChange} />
          </div>
          <div className="signInPassword">
            <span>Password</span>
            <input type="password" onChange={this.passwordChange} />
          </div>
          <button className="signUpButton" onClick={this.handleSignUp}>sign up</button>
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
export default withRouter(connect(mapStateToProps, { signupUser })(signUp));
