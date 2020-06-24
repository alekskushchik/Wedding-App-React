import React, {Component} from 'react';

class Info extends Component {
    state = {
        error: null,
        isLoaded: false,
        title: this.props.title
    }

    constructor(props) {
        super(props);
        this.updateBlog = this.updateBlog.bind(this);
    }

    updateData = (e) => {
        this.setState({
            title: e.target.value
        })
        console.log(this.state.title)
    }

    updateBlog() {
        const putMethod = {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('user')
            },
            body: JSON.stringify(this.state.title)
        }

        fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/info', putMethod)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        window.location.reload();
    }

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
                        <textarea
                            className="h1"
                            onChange={this.updateData}>{this.props.title}</textarea>
                        <textarea
                            className="h4"
                            onChange={this.updateData}>{this.props.location}</textarea>
                        <textarea
                            className="p"
                            onChange={this.updateData}>{this.props.description}</textarea>
                        <div>
                            <a href={this.props.url} className="button button-red">{this.props.action}</a>
                            <button className="btn btn-dark btn-lg m-2" onClick={this.updateBlog}>Edit</button>
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
