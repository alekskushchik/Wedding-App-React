import React, {Component} from 'react';

class Info extends Component {
    render() {
        return (
            <div className="hero-section">
                <div className="hero-section__intro">
                    <h1>{this.props.title}</h1>
                    <h4>{this.props.location}</h4>
                    <p>{this.props.description}</p>
                    <div>
                        <a href={this.props.url} className="button button-red">{this.props.action}</a>
                    </div>
                </div>
                <div className="hero-section__image">
                    <img src={require('../img/hero.jpg')} alt=""/>
                </div>
            </div>
        );
    }
}

export default Info;
