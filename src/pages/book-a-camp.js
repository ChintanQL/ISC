import React, {Component} from 'react';
import {Container,Breadcrumb,Col,Row,Card,Image} from 'react-bootstrap'
import Layout from "../components/layout"
import { Link } from 'gatsby'
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import Campbanner from "../components/common/Campbanner"
import card1 from '../images/card1.png'
import cardhover from '../images/card-hover-img.png'
import axios from 'axios';
import { Helmet } from "react-helmet"
import queryString from 'query-string'
import Cookies from 'universal-cookie';

class Sport extends Component {
	
	state = {
		PageData: [],
		PageDataOther: [],
		result: 0,
		showInfo: 0,
		query_code:"",
		code:"",
		shown: "d-none"
	}
	
	componentDidMount() {
		axios({
			//url: 'https://shop.australiansportscamps.com.au/wp-json/newasc/v1/camps',
			url: 'https://shop.australiansportscamps.com.au/wp-json/newasc/v1/get_category',
			method: 'get'}).then(res => {
			const chunkSize = 10;
			const arr = res.data.ResponseData.cat;
			const groups = arr.map((e, i) => { 
				 return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
			}).filter(e => { return e; });
			console.log({arr, groups});	
				
				
				
			this.setState({PageData: groups})
			this.setState({PageDataOther: res.data.ResponseData.camps_data[0]})
			this.setState({result: 1})
			this.setState({showInfo: 1})
			
		})
		const query = new URLSearchParams(this.props.location.search);
		const ccode = query.get('coupon-code');

		if(ccode != null){
			if(ccode != ""){
				this.setState({query_code:"?coupon-code="+ccode})
				this.setState({code:ccode})
				this.setState({shown: "d-block"});
			}
			else{
				this.setState({query_code:""})
				this.setState({code:""})
				this.setState({shown: "d-none"});
			}
		}
		else{
				this.setState({code:""})
				this.setState({query_code:""})
				this.setState({shown: "d-none"});
		}
		
		
	}
	
	render() {
		return (
			  <Layout>
				<>
				<Helmet>
				<title>Book - Australian Sports Camps | Holiday Camps Australia</title>
			</Helmet>
				<div className="laoder" style={{ display: this.state.showInfo == 0 ? "block" : "none" }} >
					<div id="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
						<img alt="" className="icon" src="https://shop.australiansportscamps.com.au/demo.svg" />
					</div>
				</div>
				<section className="Banner-Section">
					<Container>
						<div className="Banner-Section-data">
						<Breadcrumb>
							<Breadcrumb.Item className="">
								<Link className="nav-link p-0" to="/">Home</Link>
								</Breadcrumb.Item>
							<Breadcrumb.Item active href=""className="">Book a camp</Breadcrumb.Item>
						</Breadcrumb>
						<h2 className="heading-banner">Sport</h2>
						</div>
					</Container>
				</section>
				<Campbanner/>
				<section className="Sport-section-2">
					<Container>
						<div className="title-main mb-0">
							{(this.state.result === 1) ? (<><h2>{this.state.PageDataOther.camp.top_title}</h2></>) : ("")}
							
							{(this.state.result === 1) ? (<><p className="mb-2" dangerouslySetInnerHTML={{ __html: this.state.PageDataOther.camp.top_desc}} /></>) : ("")}
								
						</div>
					</Container>
				</section>
				<section className="Sport-section-3">
					{(this.state.code !== "") ? (<>
					<Container>
						<Row>
							<Col xl={12} lg={12} md={12} sm={12} xs={12} >
								<div className="" ></div>
								<p  className={"text-success"+this.state.shown} >Coupon code {'"'+this.state.code+'"'} applied successfully. </p>
							</Col>
						</Row>
					</Container>
					</>) : ("")}
					<Container>
						<Row>
							{(this.state.result === 1) ? (
									<>
									{this.state.PageData.map((cmp) => 
										 <Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-styled-card">
										{cmp.map((camp) => 
											 <div className="listed-card mb-0 card">
												<Link to={camp.slug+'/'+this.state.query_code} className="card-img">
													<div className="inner-card ">
														<Image src={cardhover} fluid alt="cardhover"/>
													</div>
													<Image variant="top" src={camp.image} fluid alt="card"/>
												</Link>
												<Card.Body>
													<Link to={camp.slug+'/'+this.state.query_code}>{camp.name}</Link>
												</Card.Body>
											</div>
										)}
										</Col>		
									)} 
									</>
								) : ("")}
						
							
						</Row>	
					</Container>	
				</section>
				<section className="Sport-section-4">
					<Container>
						<div className="title-main mb-0">
							{(this.state.result === 1) ? (<><h2>{this.state.PageDataOther.camp.bottom_title}</h2></>) : ("")}
						</div>
						{(this.state.result === 1) ? (<><p className="font-15 font-medium color-3b" dangerouslySetInnerHTML={{ __html: this.state.PageDataOther.camp.bottom_desc}} /></>) : ("")}
						
					</Container>
				</section>	
				 
				  <BottomForm/>
				  <Footer/>
				</>
			  </Layout>
		)
	}
}
export default Sport