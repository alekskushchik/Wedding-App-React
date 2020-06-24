import React, {Component} from 'react';

class Info extends Component {
    render() {
        if (localStorage.getItem('user') === null) {
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
        } else if (localStorage.getItem('user') !== null) {
            return (

                <div className="hero-section">
                    <div className="hero-section__intro">
                        <textarea className="h1" value={this.context.value}>{this.props.title}</textarea>
                        <textarea className="h4" value={this.context.value}>{this.props.location}</textarea>
                        <textarea className="p" value={this.context.value}>{this.props.description}</textarea>
                        <div>
                            <a href={this.props.url} className="button button-red">{this.props.action}</a>
                            <button className="btn btn-dark btn-lg m-2" onClick={this.props.edit}>Edit</button>
                        </div>
                    </div>
                    <div className="hero-section__image">
                        <img src={require('../img/hero.jpg')} alt=""/>
                    </div>
                </div>
            );
        }
    }
}

export default Info;
