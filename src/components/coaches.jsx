import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Coaches extends Component {
    render() {
        return (
            <div className="section">
                <h2 className="section__title">{this.props.title}</h2>
                <p className="section__description">
                    {this.props.description}
                </p>
                {this.props.content.length !== 0 && (
                <OwlCarousel className="coaches-slider"
                             loop
                             margin={8}
                             items={2}>
                    {this.props.content.map((item, i) => {
                        return <div className="slide" key={item._id}>
                            <div className="slide__image">
                                <img src={require(`../img/coach_${i+1}.jpg`)} alt=""/>
                            </div>
                            <div className="slide__content">
                                <div>
                                    <h3>{`0${i+1}`}</h3>
                                    <h2>{item.name}</h2>
                                    <p>{item.direction}</p>
                                </div>
                                <div>
                                    <p>Work experience <span>{item.workExperience} years</span></p>
                                    <p>Teacher for <span>{item.teachExperience} years</span></p>
                                    <p>Style <span>{item.style}</span></p>
                                </div>
                                <a className="button button-red" href={item.url}>Let's start</a>
                            </div>
                        </div>
                    })}
                </OwlCarousel>
                )}
            </div>
        );
    }
}

export default Coaches;
