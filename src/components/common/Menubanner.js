import React, { Component  } from 'react';
import { Link } from 'gatsby'
import {  Container,Col,Row,Image } from 'react-bootstrap'
import axios from 'axios';


class Menubanner extends Component {
    
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
			url: 'https://shop.nationalsportscamps.in/wp-json/newasc/v1/menu_banner',
			method: 'get'
		}).then(res => {
			this.setState({PageData: res.data.ResponseData[0].Desc})
			this.setState({Isbanner: res.data.ResponseData[0].IsBanner})
			this.setState({showInfo: 1})
		})
	}
	
	
	render() {      
        return (
            <>
           <div className="second-box" style={{ display: this.state.Isbanner == 0 ? "none" : "inline-block" }} dangerouslySetInnerHTML={{ __html: this.state.PageData}} />
            </>
        );
    }
}

export default Menubanner;