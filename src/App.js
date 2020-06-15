import React, {Component} from 'react';
import './App.scss';
import {Ripple} from 'react-preloaders';
import Header from "./components/header";
import Info from "./components/info";
import Services from "./components/services";
import Footer from "./components/footer";
import Offers from "./components/offers";
import Coaches from "./components/coaches";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        }
    }

    componentDidMount() {
        fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section')
            .then(response => response.json())
            .then((data) => {
                    this.setState({
                        isLoaded: true,
                        items: data.content
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                })
    }

    render() {

        const {error, isLoaded, items} = this.state;
        const navigation = items.find(item => item.type === 'navigation');
        const info = items.find(item => item.type === 'info');
        const services = items.find(item => item.type === 'service');
        const offers = items.find(item => item.type === 'offer');
        const coaches = items.find(item => item.type === 'coach')

        if (error) {
            return (
                <div className="col">
                    Error: {error.message}
                </div>
            );
        } else if (!isLoaded) {
            return (
                <Ripple/>
            );
        } else {
            return (
                <React.Fragment>
                    <Ripple customLoading={this.state.loading}/>
                    <div className='wrapper'>
                        <Header logo={navigation.meta.title} nav={navigation.content} id={navigation.content._id}/>
                        <Info
                            title={info.meta.title}
                            location={info.meta.location}
                            description={info.meta.description}
                            action={info.action.title}
                            url={info.action.url}
                        />
                        <Services
                            title={services.meta.title}
                            description={services.meta.description}
                            content={services.content}
                        />
                        <Offers
                            title={offers.meta.title}
                            description={offers.meta.description}
                            content={offers.content}

                        />
                        <Coaches
                            title={coaches.meta.title}
                            description={coaches.meta.description}
                            content={coaches.content}
                            name={coaches.content.name}
                            direction={coaches.content.direction}
                            style={coaches.content.style}
                            workExperience={coaches.content.workExperience}
                            teachExperience={coaches.content.teachExperience}
                            url={coaches.content.url}

                        />
                    </div>
                    <Footer/>
                </React.Fragment>
            )
        }
    }
}

export default App;
