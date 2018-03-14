import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ReactAudioPlayer from 'react-audio-player'
import './detailMusic.less'
import Header from "../../components/Header/index"
import DetailTab from "./DetailTab/detailTab"
import DetailNav from "./DetailNav/detailNav"
import {connect} from 'react-redux'
import actions from '../../store/actions/list'

@connect(//@装饰器  和原来写法一样
    state => state.list,
    actions,
)


export default class detailMusic extends Component {
    constructor() {
        super();
        this.state = {
            liked: false,
            pic:null,
            musics:[],
            index:null,
        }
        
    }
    componentWillMount(){
        this.setState({
            liked: !this.state.liked,
            musics:this.props.location.state.musics,
            index :this.props.location.state.index
        })
    }
    handleClick = () => {
        this.setState({
            liked: !this.state.liked,
            
        })
    };
    
    render() {
        
        
        let pic= this.props.location.state.item.cover;
        let index=this.state.index;
        let musics=this.state.musics;
        console.log(musics)
        let album =musics[index].album;
        let name=musics[index].brand;
        return (
            <div>
                <Header title="商品详情" icon="iconfont icon-fanhui"/>
                <div className="container detail">
                    
                    <img src={pic} 
                        className="musicImage"
                        />
                    <ReactAudioPlayer
                      className="musicPlayer"
                      src={album}
                      autoPlay
                      controls

                    />
                    <div className="band">
                        <span className="buttonCtrl">上一首:</span><span className="buttonName" onClick={this.last.bind(this)} >{name}</span>
                    </div>
                    <div  className="band">
                        <span className="buttonCtrl">下一首:</span><span className="buttonName" onClick={this.next.bind(this)}>{name}</span>
                    </div>
                    
                </div>
                <DetailNav/>
            </div>

        )
    };
    last(){
       this.state.index<1?
       console.log("null") :
       this.setState({
            index:this.state.index-1,            
       })
       
    }
    next(){
       this.state.index>this.state.musics.length-2?
       console.log("null") :
       this.setState({
            index:this.state.index+1,            
       });
       console.log("index"+this.state.index)
    }
}
