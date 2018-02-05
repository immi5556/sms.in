import React,{Component} from 'react';
import Auxx from '../../hoc/Auxx';
import './OurservicesC.css';

import Tabs from '../Tabs/Tabs';
import Tab from '../Tabs/Tab/Tab';

import designTLogo from '../../assets/design-t.png';
import webdevTLogo from '../../assets/webdev-t.png';
import marketingTLogo from '../../assets/marketing-t.png';
import appdevTLogo from '../../assets/appdev-t.png';


class OurservicesC extends Component {

render(){
    return(
        <Auxx>
            <div className={"ourservices clearfix"}>
                <div className="container">
                    <h2 className="heading-h2">Our Services</h2>
                    <Tabs className="tabs-wrapper">
                        <Tab active="true" title="Design" icon={designTLogo}>
                            <p>Graphics, give us an idea of the message in a very effective way. 
                                It is undoubtedly the most easiest way to communicate to your clients. The logo,corporate designs, 
                                brochures and all other graphics designed at SMS are attractive and helps in grabing the attention.
                                We are open to innovative ideas which can make the design further more interesting and helps in 
                                communicating the right message to the target audience and target market.
                            </p>
                            <p>We at SMS, understand the purpose of designing a particular brochure, logo, 
                                stationery or any other advertising content to build your brand. 
                                We take pride in taking the responsibilty of buidling your complete brand by designing the logo, brand manuals, 
                                corporate stationary, brochures, emailers, animations and a lot more.
                            </p>
                        </Tab>
                        <Tab title="Web Development" icon={webdevTLogo}>
                            <p>Web designing is one of the most powerful and essential tool for marketing your brand, product or yourself in today's world. 
                                Millions of users around the world can rate the development of your business just by its online presence.
                            </p>
                            <p>Our expertise is to target your audience and enhance your business relationship with them by delivering a customised, quality rich Web Design. 
                                Our constant goal is to get your website reach the right people and in the right form which connects your customers to you!
                            </p>
                            <p>
                            Constantly strive to give you the best layout, 
                            colour scheme and design for your website which not only looks aesthetically 
                            pleasing but is also easy to navigate so that your valuable customers find things that they exactly need.
                            </p>
                        </Tab>
                        <Tab title="Marketing" icon={marketingTLogo}>
                            <p>The aim of marketing is to know and understand the need of the customer so well that your product sells itself. Digitization has taken the entire business arena by a storm. 
                                Digital marketing determines your visibility on all digital platforms and we at FiHD guarantee that you get the maximum attention.
                            </p>
                            <p>Like they say, "Content is the atomic particle of all Digital marketing". Every relevant piece of information derived from your website increases your visibility. The right and appropriate digital marketing strategies can catapult your business to great heights. Our team puts dedicated efforts to comprehend your needs, thus translating it into reality. Our approach is highly focused and scientific.
                             We do a thorough research to prepare the most effective plan of action. We help your customer to find you with ease
                            </p>
                        </Tab>
                        <Tab title="App Development" icon={appdevTLogo}>
                            <p>Clearly, the demand of owning a mobile app has increased in almost all business sectors. To fulfill the increasing demand we become your solution experts to design and develop mobile applications.
                                 SMS has expertise in developing native mobile applications for IOS and Android, hybrid apps. 
                            </p>
                            <p>Our developers are creative and knowledgeable to deliver your perfect app which can fulfill your business needs. 
                                We expertise in creating customized mobile apps using advanced tools and technology for individuals, startups, and enterprises.
                            </p>
                        </Tab>
                    </Tabs> 
                </div>
            </div>
        </Auxx>
    )
}
}

export default OurservicesC;