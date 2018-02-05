import React,{ Component } from "react";
import './Tabs.css';
class Tabs extends Component {
    constructor(){
        super();
        this.state = {
            activeIndex:0
        }
    }
    handleOnClick(key, event) {
        event.preventDefault();
        this.setState({
            activeIndex : key
        });
    }
    renderNavItem(key){
        let tab = this.props.children[key];
        return (
            <li key={ key } className={ this.state.activeIndex == key ? 'active' : ''}>
                <a href="#" onClick={ this.handleOnClick.bind(this, key) }><img src={tab.props.icon} alt={tab.props.title}/><span>{ tab.props.title }</span></a>
            </li>
        )
    }
    render(){
        let index = 0;
        let active = this.state.activeIndex;

        let tabs = React.Children.map(this.props.children,function(child){
            return React.cloneElement(child,{
                active:child.props.active === true ? true : (active == index++)
            });
        })
        return(
            <div className="tabsWrap">
                <ul className="tabs-nav">
                    { Object.keys(this.props.children).map(this.renderNavItem.bind(this)) }
                </ul>
                <div className="tabs-content">
                    { tabs }
                </div>
            </div>
        )
    }
}

export default Tabs;