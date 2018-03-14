import React, {Component} from 'react'
import './header.less'
import {withRouter} from 'react-router-dom'
import SearchHome from '../SearchHome'
class HeaderHome extends Component {
    render() {
        return (
            <header className="header_h">
                <i onClick={() => this.props.history.goBack()} className={this.props.icon}>

                </i>
                <SearchHome getValue={this.getValue}/>
            </header>
        )
    }
    getValue(val){
        console.log("getValue:::::"+val)
        return val
    }
}
export default withRouter(HeaderHome)