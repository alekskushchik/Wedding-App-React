import React, {Component} from 'react';
import '../App.css';
import Modal from "./modal";

class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="logo" key={this.props.id}>
                        {this.props.logo}
                    </div>
                    <div className="main-menu">
                        <nav>
                            <ul className="menu">
                                {this.props.nav.map(item => {
                                    return <li className="menu__item" key={item._id}>
                                        <a href={item.url}> {item.title} </a>
                                    </li>
                                })}
                            </ul>
                        </nav>
                        <Modal />
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;
