import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Services extends Component {
    render() {
        return (
            <div className="section">
                <h2 className="section__title">{this.props.title}</h2>
                <p className="section__description">{this.props.description}</p>

                {this.props.content.length !== 0 && (
                    <OwlCarousel className="services-slider"
                                 loop
                                 items={3}
                                 margin={4}>
                        {this.props.content.map((item, i) => {
                                return <div className="slide" key={item._id}>
                                    <img src={require(`../img/image-${i+1}.jpg`)}/>
                                    <div className="slide__content">
                                        <h2>{item.title}</h2>
                                        <a href="#">First Dance</a>
                                        <a href="#">Parent &amp; Child Dance</a>
                                    </div>
                                </div>
                            }
                        )}
                    </OwlCarousel>)}
            </div>
        );
    }
}

export default Services;
