import React, {Component} from 'react';
import './cartCategory.less'
import CartList from "../cartList/cartList";

export default class CartCategory extends Component{
    render(){
        return(
            <div className="cart-category">
                <header>
                    <i className="iconfont icon-weigouxuan icon"></i>
                    <span>{this.props.categoryTitle}</span>
                </header>
                <ul>
                    {
                        this.props.categoryList.map((item,index)=>(
                            <CartList key={index} product={item}/>
                        ))
                    }
                </ul>

            </div>
        )
    }
}
