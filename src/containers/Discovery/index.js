import React, {Component} from 'react';
import Header from '../../components/Header'
import {getCode} from '../../utils'
import {connect} from 'react-redux'
import actions from '../../store/actions/session'
import './index.less'
@connect(//@装饰器  和原来写法一样
    state => state.session,
    actions,
)
export default class Discovery extends Component{
    constructor(){
        super();
        this.state={
            val:'',
            btnVal:'',
            lys:[]
        };
    }
    componentWillMount(){
        this.handleClick();
        this.setLy();
    }
    handleClick=()=>{
        let val=getCode();
        this.setState({val})
    }
    setLy=()=>{
        this.props.getLiuyanList();//this.props.lys内存了所有的留言信息
        var _this=this;
        this.setState((lys,props)=>({
            lys:props.lys
        }))

       
    }
    handlePost=()=>{
        let userName = this.refs.userName.value;
        let content = this.refs.content.value;
        let curVal=this.state.val;
        let btnVal=this.state.btnVal;
        if(btnVal==curVal){
            let info = {userName,content}
            this.props.TjPost(info)  //
        }else{
            alert('验证码错误');
            this.handleClick();
        }

    }
    handleChange=(e)=>{
        let btnVal=e.target.value;
        this.setState({btnVal});
    }
    render(){       
        console.log(this.props.lys)

        return(
            <div className="discovery">
                <Header title="探索·发现"/>
                <div>
                    // 留言内容
                    <ul>
                        {
                            
                           this.props.lys.map((item, index) => (

                                    <li key={index}>
                                        <div>{item.userName}</div>
                                        <p>{item.content}</p>
                                    </li>

                                ))
                        }
                    </ul>

                </div>
                <div className="container">
                    <ul>
                        <li><input ref="userName" type="text" placeholder="用户名"/></li>
                        <li><textarea rows="10" cols="30" ref="content" type="text" placeholder="内容"/></li>
                        <li   className="verify">
                            <input value={this.state.btnVal} onChange={this.handleChange}   type="text" name="sms_salt" placeholder="请输验证码"  className="valIn"/>
                            <div className="val">
                                <input type="text" value={this.state.val} onChange={this.handleClick}  className="val_c"/>
                                <span onClick={this.handleClick}>看不清？换一个</span>
                            </div>
                        </li>
                        <li  className="tj"><button onClick={this.handlePost}>提交</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}