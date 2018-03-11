import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/login'
import LoginForm from '../components/LoginForm'
import {Redirect} from 'react-router-dom'

class LoginPage extends React.Component {
	handleSubmit = (data) => {
		this.props.login(data.name, data.password)
	}

	render() {
		if (this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
        <div id="outer-container">
          <ul className="cb-slideshow">
            <h1 className="login">Login</h1>
            <LoginForm onSubmit={this.handleSubmit} />
          </ul>
        </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {login})(LoginPage)
