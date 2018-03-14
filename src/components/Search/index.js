import React, {Component} from 'react';
import './index.less'
import { createHashHistory } from 'history'
export const history = createHashHistory()
export default class Search extends Component{
    constructor(){
        super();
        this.state={val:''}
    }
    
    handleChange=(e)=>{
        let val=e.target.value;
        this.setState({val});
        console.log("val"+val)
        // this.props.getValue(val);
        // this.props.searchProduct(val);
        // val为输入框里输入的内容

    }
    enterHandle(value) {
        history.push('/List/'+value)
        console.log("keyUpHandle!!!!")
        this.props.searchProduct(value);
    }
    
    keyUpHandle(e){

        if(e.keyCode!==13){
            return 
        }
        this.enterHandle(e.target.value)
    }


    render(){
        return(
            <div className="search-wrap">
                <input value={this.state.val} onChange={this.handleChange} type="text" placeholder=" 热搜商品"  onKeyUp={this.keyUpHandle.bind(this)}/>
                <i className="iconfont icon-fangdajing"></i>
            </div>
        )
    }
}