import React, {Component} from 'react';
import './detail.less';
import Header from "../../components/Header/index";
import DetailTab from "./DetailTab/detailTab";
import DetailNav from "./DetailNav/detailNav";
import Carousel from "../../components/Carousel/index";

import 'video-react/dist/video-react.css'; 

import { Player } from 'video-react';


export default class Detail extends Component {
    constructor() {
        super();
        this.state = {liked: false}
    }

    handleClick = () => {
        this.setState({liked: !this.state.liked})
    };

    render() {
        console.log(this.props.location.state.item.brand);
        let {album} = this.props.location.state.item;
        
        return (
            <div>
                <Header title="商品详情" icon="iconfont icon-fanhui"/>
                <div className="container detail">
                    <Player
                      playsInline
                      poster="/assets/poster.png"
                      src={album}
                    />
                    
                    
                    <DetailTab item={this.props.location.state.item}/>
                </div>
                <DetailNav/>
            </div>

        )
    }
}