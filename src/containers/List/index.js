import React, {Component} from 'react';

import './index.less'
import Search from '../../components/Search/index'
import {Link} from 'react-router-dom'
import {upLoadMore,downRefresh} from '../../utils'

import {connect} from 'react-redux'
import actions from '../../store/actions/list'
@connect(//@装饰器  和原来写法一样
    state => state.list,
    actions,
)

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalFlag:false,
            computersFlag:false,
            musicsFlag:false,
            otherFlag:false,
            product:[],
            loading:false,
            scrollTop:0,
            val:'11'
        }
      
    }
    
    componentWillMount() {
        this.handleTotal()
        
    }
    // componentWillUpdate(){
    //      this.state.val=this.props.match.params.name

    //    this.state.val?
    //    this.searchProduct(this.state.val):null
    // }
    componentDidMount() {
        // upLoadMore(this.refs.list,this.loadMore);
        // downRefresh(this.refs.list,this.handleTotal);
       this.state.val=this.props.match.params.name

       this.state.val?
       this.searchProduct(this.state.val):null

    }
    // loadMore=()=>{
    //     this.props.loadMore('/list')
    // }
    handleTotal=()=>{
        this.getData();
        this.setState({
            totalFlag:true,
            computersFlag:true,
            musicsFlag:true,
            otherFlag:true,
        })
    };
    handleComputers=()=>{
        this.props.getComputersList('/computers');
        this.setState({
            totalFlag:false,
            computersFlag:true,
            musicsFlag:false,
            otherFlag:false,
        })
    };
    handleMusics=()=>{
        this.props.getMusicsList('/musics');
        this.setState({
            totalFlag:false,
            computersFlag:false,
            musicsFlag:true,
            otherFlag:false,
        })
    };

    handleOther=()=>{
        this.props.getOtherList('/other');
        this.setState({
            totalFlag:false,
            computersFlag:false,
            musicsFlag:false,
            otherFlag:true,
        })
    };
    getData=()=>{
        this.props.getComputersList('/computers');
        this.props.getMusicsList('/musics');
        this.props.getOtherList('/other');
        return this.props.list;
    };

    searchProduct=(val)=>{
        let arr=this.getData();
        let {computers,musics,other}=arr;
        console.log(computers,musics,other);s
        let bigArr=[...computers,...musics,...other];
        if(val==='undefined'){
            this.props.history.go(-1);
        }else{
            let newArr=bigArr.filter((item,index)=>{
                if(item.description.includes(val)){
                    return item;
                }
            });
            this.setState({
                totalFlag:false,
                computersFlag:false,
                musicsFlag:false,
                otherFlag:false,
                product:newArr
            });
        }};


    render() {
        var musics=this.props.list.musics
        console.log(this.props.list.computers)
        return (
            <div className="list-page" >
                <div className="listHeader"><Search searchProduct={this.searchProduct}/></div>
                
                <div className="panel" >
                    <ul className="nav-wrap" >
                        <li onClick={this.handleTotal} className={this.state.totalFlag? "choosed" : null}>
                            <i className="iconfont icon-list"></i>
                            <span>全部</span>
                        </li>
                        <li onClick={this.handleComputers} className={this.state.computersFlag && !this.state.totalFlag?"choosed":null}>
                            <i className="iconfont icon-diannao"></i>
                            <span>电脑</span>
                        </li>
                        <li onClick={this.handleMusics}  className={this.state.musicsFlag && !this.state.totalFlag?"choosed":null}>
                            <i className="iconfont icon-shouji"></i>
                            <span>手机</span>
                        </li>
                        <li onClick={this.handleOther}  className={this.state.otherFlag && !this.state.totalFlag?"choosed":null}>
                            <i className="iconfont icon-huiyuan"></i>
                            <span>其他</span>
                        </li>
                    </ul>
                    <div className="list-wrap" ref="list">
                        <ul>
                            {
                                this.props.list.computers&&this.state.computersFlag ?this.props.list.computers.map((item, index) => (

                                    <li key={index}>
                                        <Link to={{pathname:'/detail',state:{item}}}>
                                            <div className="cover">
                                                <img src={item.cover}/>
                                            </div>
                                            <div className="description">

                                                <p>{item.description}</p>
                                                <span>￥ {item.price.toFixed(2)}</span>
                                            </div>
                                        </Link>
                                    </li>

                                )):null
                            }

                            {
                                this.state.product?
                                this.state.product.map((item, index) => (

                                    <li key={index}>
                                        <Link to={{pathname:'/detail',state:{item}}}>
                                            <div className="cover">
                                                <img src={item.cover}/>
                                            </div>
                                            <div className="description">

                                                <p>{item.description}</p>
                                                <span>￥ {item.price.toFixed(2)}</span>
                                            </div>
                                        </Link>
                                    </li>
                                )):null
                            }

                            {
                                this.props.list.musics&&this.state.musicsFlag ?
                                this.props.list.musics.map((item, index) => (
                                    <li key={index}>
                                        <Link to={{pathname:'/detailMusic',state:{item,index,musics}}}>
                                            <div className="cover">
                                                <img src={item.cover}/>
                                            </div>
                                            <div className="description">
                                                <p>{item.description}</p>
                                                <span>￥ {item.price.toFixed(2)}</span>
                                            </div>
                                        </Link>
                                    </li>
                                )):null
                            }




                            {
                                this.props.list.other&&this.state.otherFlag ?

                                this.props.list.other.map((item, index) => (

                                    <li key={index}>
                                        <Link to={{pathname:'/detail',state:{item}}}>
                                            <div className="cover">
                                                <img src={item.cover}/>
                                            </div>
                                            <div className="description">
                                                <p>{item.description}</p>
                                                <span>￥ {item.price.toFixed(2)}</span>
                                            </div>
                                        </Link>
                                    </li>

                                )):null
                            }


                        </ul>




                    </div>

                </div>


            </div>
        )
    }
}