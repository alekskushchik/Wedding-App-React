import React, {Component} from 'react';

class Offers extends Component {
    render() {
        return (
            <div className="section">
                <h2 className="section__title">{this.props.title}</h2>
                <p className="section__description">
                    {this.props.description}
                </p>

                <div className="offers">
                    {this.props.content.map( (item, i) =>
                        <div className="offers__item">
                            <img src={require(`../img/icons/ico0${i+1}.svg`)} alt=""/>
                            <p>{item.title}</p>
                        </div>
                    )}

                </div>
            </div>
        );
    }
}

export default Offers;
