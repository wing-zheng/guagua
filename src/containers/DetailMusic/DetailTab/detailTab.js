import React from 'react';
import {ajax} from '../../../utils';
import './detailTab.less';
import {connect} from 'react-redux'
import actions from '../../../store/actions/list'
@connect(//@装饰器  和原来写法一样
    state => state.list,
    actions,
)
class DetailTab extends React.Component {

    constructor() {
        super();
        this.state = {
            tabs: [
                {tabName: "商品详情", id: 1},
                {tabName: "评论", id: 2}
            ],
            currentIndex: 1
        };
    }

    tabChange = (id) => {
        //tab切换到方法
        this.setState({
            currentIndex: id
        });
    };

    render() {
        let _this = this;
        let {brand,description,price,comment} = this.props.item;
        return (
            <div>
                <ul className="detail-tab">
                    {
                        this.state.tabs.map((res, index) => {
                            // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
                            let tabStyle = res.id == this.state.currentIndex ? 'subCtrl active' : 'subCtrl';
                            return <li key={index} onClick={this.tabChange.bind(_this, res.id)} className={tabStyle}>{res.tabName}</li>

                        })
                    }
                </ul>
                <div className="tabList">
                    <div style={{display: this.state.currentIndex == 1 ? 'block' : 'none'}}>
                        <p>视频名称:  {brand}</p>
                        <p>内容简介:  {description}</p>
                        
                    </div>
                    <ul style={{display: this.state.currentIndex == 2 ? 'block' : 'none'}} className="com-list">
                        {
                            comment.map((com, index) => (
                                <li key={index} className="tabListLi">
                                    <p className="star">星级：{com.stars}星</p>
                                    <p>{com.text}</p>
                                    <p className="info">
                                        <span>{com.auther}</span>
                                        <span>{com.date}</span>
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default DetailTab;