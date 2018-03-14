import React, {Component} from 'react';
import Header from '../../components/Header/index.js';
import './index.less';
import {ajax} from '../../utils.js';
import CartCategory from "./cartCategory/cartCategory";
import CartTotal from "./cartTotal/cartTotal";
export default class Cart extends Component{
    constructor() {
        super();
        this.state = {
            computers:[],
            phones:[],
            smarts:[],
            currentProduct: null,
            totalNum: 0,
            total: 0,
            checkAll: false,
        };
    }
    componentWillMount(){
        ajax({
            url:'http://localhost:3000/cart',
            method:'get'
        }).then((res)=>{
            res.forEach((item,index)=>{
                switch (item.category){
                    case 'computers':
                        this.setState({computers:[...this.state.computers,item]});
                        break;
                    case 'phones':
                        this.setState({phones:[...this.state.phones,item]});
                        break;
                    case 'smarts':
                        this.setState({smarts:[...this.state.smarts,item]});
                        break;
                }
            })
        })
    }
    render(){
        return(
            <div className="cart container">
                <Header className="hd" icon="iconfont icon-goback" title="购物车"/>
                {this.state.computers.length>0&&<CartCategory
                    categoryTitle="电脑"
                    categoryList={this.state.computers}
                />}
                {this.state.phones.length>0&&<CartCategory
                    categoryTitle="手机"
                    categoryList={this.state.phones}
                />}
                {this.state.smarts.length>0&&<CartCategory
                    categoryTitle="智能穿戴"
                    categoryList={this.state.smarts}
                />}
                <CartTotal/>
            </div>
        )
    }
}