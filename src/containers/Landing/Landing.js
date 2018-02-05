import React,{Component} from 'react';
import Banner from '../../components/Banner/Banner';
import Auxx from '../../hoc/Auxx';
import { AboutC } from '../../components/AboutC/AboutC';
import OurservicesC from '../../components/OurservicesC/OurservicesC';
import ProductsC from '../../components/ProductsC/ProductsC';
import ClientsC from '../../components/ClientsC/ClientsC';
import ContactC from '../../components/ContactC/ContactC';


class Landing extends Component {
    render(){
        return(
            <Auxx>
                <div className="screen3Bg"></div>
                <Banner/>
                <OurservicesC/>
                <AboutC/>
                <ProductsC/>
                <ClientsC/>
                <ContactC/>
            </Auxx>
        )
    }
}

export default Landing;