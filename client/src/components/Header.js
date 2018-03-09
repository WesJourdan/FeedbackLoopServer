import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
	renderLoginLink () {
		if (this.props.auth) {
			return <a href='/api/logout'>Logout</a>
		} else {
			return <a href='/auth/google'>Login With Google</a>
		}	
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo">
						Feedbackloop
          </a>
					<ul className="right">
						<li>
							{this.renderLoginLink()}
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

function mapStateToProps(state) {
 return {
	 auth: state.auth
 }
}

export default connect(mapStateToProps)(Header)