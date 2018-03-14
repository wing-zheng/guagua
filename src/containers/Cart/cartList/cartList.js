import React,{Component} from 'react';
import './cartList.less';
export default class CartList extends Component{
    constructor(){
        super();
        this.state={isCheckAll: false,isSelected:false,car:[]}
    }
/*    handleCarData = ()=>{
        if(!this.state.isSelected){
            let tempId = this.props.pro.id;
            this.props.products.map(product=>{
                if(tempId===product.id){
                    this.setState({car:[...this.state.car,product]});
                }
            })
        }
    };
    handleCheckAll = ()=>{
        this.setState({checkAll: !this.state.checkAll});
        this.state.checkAll?this.setState({isSelected: false}):this.setState({isSelected:true});
        console.log(this.state.car.length);
        let currentCar = this.state.car;
        if(this.state.checkAll){
            this.props.addToCar(currentCar)
        }else {
            this.props.delFromCar(currentCar);
        }
    };
    handleCheckOne = ()=>{
        this.setState({
            isSelected: !this.state.isSelected
        });
        this.handleCarData();
        let currentCar = this.state.car;
        if(this.state.isSelected){
            this.props.addToCar(currentCar)
        }else {
            this.props.delFromCar(currentCar);
        }
    };*/
    render(){
        // let {pro, listClick} = this.props;
        let {cover,description,price,count} = this.props.product;
        return (
            <li className="cart-list">
                <i className="iconfont icon-bookselectofficon icon"></i>
                <img src={cover} alt=""/>
                <div className="info">
                    <p>{description}</p>
                    <div className="count">
                        <span className="price">￥ {price.toFixed(2)}</span>
                        <p>
                            <i className="iconfont icon-jianhao"></i>
                            <input type="number" value={count} readOnly/>
                            <i className="iconfont icon-iconjia"></i>
                        </p>
                    </div>

                </div>
            </li>
        );
    }
}