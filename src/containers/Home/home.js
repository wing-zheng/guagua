import React, {Component} from 'react';
import Carousel from "../../components/Carousel/index";
import './home.less'
import Category from "./Category/index";
import Search from "../../components/Search/index";
import HeaderHome from "../../components/Header_home/index"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../store/actions/list'
@connect(//@装饰器  和原来写法一样
    state => state.list,
    actions,
)


export default class Home extends Component{
    constructor(){
        super();
        this.state={
            swiper:[],
        };
    }
    componentWillMount(){
        fetch('http://127.0.0.1:3000/swiper', {
            method: 'get',
            credentials: 'include',
            headers: {
                "Accept": "application/json"
            }
        }).then(res => res.json()).then(data=>{
            this.setState({swiper:[...data]})
        });
        
    }
    
    render(){
        this.props.getComputersList('/computers')
        this.props.getMusicsList('/musics')
        var musics=this.props.list.musics
        return(
            <div>
                <HeaderHome icon="iconfont icon-iconfontmoban" />
                <div className="container">
                    <Carousel  sliders={this.state.swiper}/>
                    <div className="quick-link-box">
                        <a href="//h5.m.jd.com/active/2g6zWZQ7dwTGDRsMg19BdN1U5T5o/index.html" className="item-0"><span className="link-ico"></span><span>营业厅</span></a>
                        <a href="//m.huishou.jd.com" className="item-1"><span className="link-ico"></span><span>以旧换新</span></a>
                        <a href="//chongzhi.m.jd.com/" className="item-2"><span className="link-ico"></span><span>充值中心</span></a>
                        <a href="//sale.jd.com/m/act/Fa7X2kQ4AUC.html" className="item-3"><span className="link-ico"></span><span>精选配件</span></a>
                        <a href="//m.group.jd.com/circle/20000151/20000427.htm" className="item-4"><span className="link-ico"></span><span>社区活动</span></a>
                    </div>
                    
                    <div className="kan">
                        <div className="more">
                            <span  className="hot">看一看</span>
                            <Link to={{pathname:'/list'}}  className="a1">更多>></Link>
                        </div>
                        <div className="clearBoth"></div>
                       { this.props.list.computers.map((item, index) => (
                            (index<6)?
                                (<div key={index} className="ad-item float-left">
                                    <Link to={{pathname:'/detail',state:{item}}}>
                                        <img src={item.cover} alt={item.description}/>
                                    </Link>
                                </div>):null
                        ))} 
                        <div className="clearBoth"></div>
                    </div>


                    
                    <div>
                        <ul>
                        <li className="more">
                            <span  className="hot">听一听</span>
                            <Link to={{pathname:'/list'}}  className="a1">更多</Link>
                        </li>
                       {this.props.list.musics.map((item, index)=> (
                            (index<4)?
                                (<li key={index}>
                                    <Link to={{pathname:'/detailMusic',state:{item,index,musics}}}>
                                        <div className="cover">
                                            <img src={item.cover}/>
                                        </div>
                                        <div className="description">
                                            <p>{item.description}</p>
                                            <span>￥ {item.price.toFixed(2)}</span>
                                        </div>
                                    </Link>
                            </li>):null
                        ))} 

                        </ul>
                    </div>

                    <div>
                        <ul>
                        <li className="more">
                            <span  className="hot">热门推荐</span>
                            <Link to={{pathname:'/list'}}  className="a1">更多</Link>
                        </li>
                        <div className="clearBoth"></div>
                       {this.props.list.computers.map((item, index) => (
                            (index<4)?
                                (<div key={index} className="rm-item">
                                    <Link to={{pathname:'/detail',state:{item}}}>
                                        <img src={item.cover} alt={item.description}/>
                                    </Link>
                                </div>):null
                        ))} 
                        <div className="clearBoth"></div>
                        </ul>
                    </div>
                   
                    {/*<Category title="电脑专区"/>*/}
                </div>
            </div>
        )
    }
}