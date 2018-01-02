import React, { Component } from 'react';
import './ProductsC.css';
import Product1Img from '../../assets/product1.png';
import Product2Img from '../../assets/product2.png';
import Wlogo from '../../assets/w30Logo.png';
import Button from '../UI/Button/Button';
import medgrottoLogo from '../../assets/medgrottoLogo.png';

class ProductsC extends Component {
    render(){
        var leftStyle = {
            backgroundImage: 'url(' + Product1Img + ')',
            backgroundSize: 'cover',
            overflow: 'hidden',
          };
        return (
            <div className={"productsC clearfix"} id="products">
            <div className="container">
                <h2 className="heading-h2">Our products</h2>
            </div>
            <div className="productsCRow1">
                <div className={"productsCRow1Content clearfix"}>
                    <div className={"left productSecs"}>
                        <img src={Product1Img} alt="product" className="ProductImg"/>
                        <div className="productCont">
                            <img src={Wlogo} alt="W30 Logo"/>
                            <div className={"productBtn"}>
                                <Button link={'javascript:void(0)'} classE={"primary"}>Read More</Button>
                            </div>
                        </div>
                    </div>
                    <div className={"right productSecs"}>
                        <img src={Product2Img} alt="product" className="ProductImg"/>
                        <div className="productCont">
                            <img src={medgrottoLogo} alt="medgrotto Logo"/>
                            <div className="productBtn">
                                <Button link={'javascript:void(0)'} classE={"secondary"}>Read More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default ProductsC;