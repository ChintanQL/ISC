import React, { Component  } from 'react';
import { Link } from 'gatsby'
import {  Container,Col,Row,Image,Modal } from 'react-bootstrap'
import trainer1 from '../../images/trainer1.png'
import trainer3 from '../../images/trainer3.png'
import trainer4 from '../../images/trainer4.png'
import axios from 'axios';
import {isMobile} from 'react-device-detect';

class HomeSection5 extends Component {
    
	constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLoginClick2 = this.handleLoginClick2.bind(this);
	
        this.MmodalOpen = this.MmodalOpen.bind(this);
        this.MmodalClose = this.MmodalClose.bind(this);
   
  }

	handleLoginClick() {
    this.setState({Isbanner: 0});
  }
  handleLoginClick2() {
    this.setState({MIsbanner: 0});
  }
	MmodalOpen(){
        this.setState({
            isOpen:true,
        })
    }
    MmodalClose(){
        this.setState({
            isOpen:false,
        })
    }
	
	state = {
		PageData: [],
		Isbanner: 0,
		coupon_code: "",
		showInfo: 0,
		MPageData: [],
		MIsbanner: 0,
		Mcoupon_code: "",
		MshowInfo: 0
	}
	
	componentDidMount() {
		axios({
			url: 'https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/home_banner',
			method: 'get'
		}).then(res => {
			this.setState({PageData: res.data.ResponseData[0].Image})
			this.setState({Isbanner: res.data.ResponseData[0].IsBanner})
			this.setState({coupon_code: res.data.ResponseData[0].coupon_code})
			this.setState({showInfo: 1})
			this.setState({MPageData: res.data.ResponseData[1].Image})
			this.setState({MIsbanner: res.data.ResponseData[1].IsBanner})
			this.setState({Mcoupon_code: res.data.ResponseData[1].coupon_code})
			this.setState({MshowInfo: 1})
		})
	}
	
	renderContent = () => {
    if (!isMobile) {
        return  <>
           <div className="sticky-footer" style={{ display: this.state.Isbanner == 0 ? "none" : "block" }} >
			<button className="closebtn" onClick={this.handleLoginClick} >x</button>
			<Link to={"/book-a-camp/"+this.state.coupon_code} ><Image src={this.state.PageData} alt=""/></Link>
		   </div>
            </>
    }
	else{
    return  <>
            <div className="popupcenteropen" style={{ display: this.state.MIsbanner == 0 ? "none" : "block" }} >
		   <div className="popup_cntbx"  >
   
    <div className="popupimage"> <button type="button" className="close" onClick={this.handleLoginClick2}>&times;</button><Link to={"/book-a-camp/"+this.state.Mcoupon_code} ><img src={this.state.MPageData} alt="" className="img-fluid"/></Link></div></div>
  </div>
            </>
}
}

	
	
	render() {    

		return this.renderContent();
        
    }
}

export default HomeSection5;
