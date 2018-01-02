import React,{Component} from 'react';
import Aux from '../../hoc/Auxx';
import Header from '../../components/Header/Toolbar/Toolbar'

import Footer from '../../components/Footer/Footer';
import Landing from '../Landing/Landing';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Medgrotto from '../Medgrotto/Medgrotto';
import Within30App from '../w30/within30';
import {Route} from 'react-router-dom';

import './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer:false
    }
    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer:!this.state.showSideDrawer
        })
    }
    render(){
        return(
            <Aux>
                <Header closed={this.sideDrawerClosedHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <div className="main-content">
                    <Route path='/' exact component={Landing} />
                    <Route path='/medgrotto' component={Medgrotto}/>
                    <Route path='/within30' component={Within30App}/>
                </div>
                <Footer/>
            </Aux>
        )
    }
}

export default Layout;