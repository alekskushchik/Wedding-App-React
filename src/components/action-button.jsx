import React, {Component} from 'react';
import AuthService from "../services/auth.service";

class ActionButton extends Component {
    render() {
        if (localStorage.getItem('user') === null) {
            return <a
                href="#"
                className="button button-black"
                onClick={this.props.onClick}>Start</a>
        } else if (localStorage.getItem('user') !== null) {
            return <a
                href="#"
                className="button button-black"
                onClick={AuthService.logout}>Logout</a>
        }

    }
}

export default ActionButton;
