import React, { Component  } from 'react';
import { Link } from 'gatsby'
import {  Container,Col,Row,Image } from 'react-bootstrap'
import axios from 'axios';


class Guidebanner extends Component {
    
	constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
   
  }

	handleLoginClick() {
    this.setState({Isbanner: 0});
  }
	
	
	state = {
		PageData: [],
		Isbanner: 0,
		showInfo: 0
	}
	
	componentDidMount() {
		axios({
			url: 'https://shop.australiansportscamps.com.au/wp-json/newasc/v1/guide_banner',
			method: 'get'
		}).then(res => {
			this.setState({PageData: res.data.ResponseData[0].Image})
			this.setState({Isbanner: res.data.ResponseData[0].IsBanner})
			this.setState({showInfo: 1})
		})
	}
	
	
	render() {      
        return (
            <>
           <div className="stickyicon" style={{ display: this.state.Isbanner == 0 ? "none" : "block" }} >
			<Image src={this.state.PageData} alt=""/>
		   </div>
            </>
        );
    }
}

export default Guidebanner;