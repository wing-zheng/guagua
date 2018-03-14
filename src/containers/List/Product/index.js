import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../../store/actions/list'
@connect(//@装饰器  和原来写法一样
    state => state.list,
    actions,
)

export default class Product extends Component{
    constructor(){
        super();

    }
    render(){

        return (
            <ul>

                {

                        this.props.product.map((item, index) => (

                            <li key={index}>
                                <Link to={{pathname:'/detail',state:{item}}}>
                                <div className="cover">
                                    <img src={item.cover}/>
                                </div>
                                <div className="description">

                                    <p>{item.description}</p>
                                    <span>￥ {item.price}</span>
                                </div>
                            </Link>
                            </li>
                        ))
                }

            </ul>
        )
    }
}
