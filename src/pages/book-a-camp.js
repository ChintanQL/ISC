import React, {Component} from 'react';
import {Container,Breadcrumb,Col,Row,Card,Image} from 'react-bootstrap'
import Layout from "../components/layout"
import { Link } from 'gatsby'
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import Campbanner from "../components/common/Campbanner"
import card1 from '../images/card1.png'
import cardhover from '../images/card-hover-img.png'
import hover from '../images/Hover_Img.png'
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
		shown: "d-none",
		shown_new: "d-none"
	}
	
	componentDidMount() {
		axios({
			//url: 'https://shop.nationalsportscamps.in/wp-json/newasc/v1/camps',
			url: 'https://shop.nationalsportscamps.in/wp-json/newasc/v1/get_category2',
			method: 'get'}).then(res => {
			const chunkSize = 10;
			const arr = res.data.ResponseData.cat;
			/*const groups = arr.map((e, i) => { 
				 return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
			}).filter(e => { return e; });
			console.log({arr, groups});	*/
				
				
				
			this.setState({PageData: arr})
			this.setState({PageDataOther: res.data.ResponseData.camps_data[0]})
			this.setState({result: 1})
			this.setState({showInfo: 1})
			
		})
		const query = new URLSearchParams(this.props.location.search);
		const ccode = query.get('coupon-code');

		if(ccode != null){
			if(ccode != ""){
				
				const cookies = new Cookies();
				console.log(cookies.get("code"));
				if(cookies.get("code") !== undefined){
					console.log("heer");
					this.setState({shown: "d-none"});
					this.setState({shown_new: "d-block"});
				}
				else{
					console.log("there");	
					this.setState({shown_new: "d-none"});
					this.setState({shown: "d-block"});
				}
				
				this.setState({query_code:"?coupon-code="+ccode})
				this.setState({code:ccode})
				
				
				cookies.set("code", ccode,{ domain: '.australiansportscamps.com.au' , path: '/' });
			}
			else{
				this.setState({query_code:""})
				this.setState({code:""})
				this.setState({shown: "d-none"});
				this.setState({shown_new: "d-none"});
			}
		}
		else{
				this.setState({code:""})
				this.setState({query_code:""})
				this.setState({shown: "d-none"});
				this.setState({shown_new: "d-none"});
		}
		
		
	}
	
	render() {
		return (
			  <Layout>
				<>
				<Helmet>
				<title>Book - National Sports Camps | Holiday Camps India</title>
			</Helmet>
				<div className="laoder" style={{ display: this.state.showInfo == 0 ? "block" : "none" }} >
					<div id="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
						<img alt="" className="icon" src="https://shop.nationalsportscamps.in/demo.svg" />
					</div>
				</div>
				
				<section class="breadcumb">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<div class="breadcumb_wrpaeer">
									<Breadcrumb>
										<Breadcrumb.Item className="">
											<Link className="nav-link p-0" to="/">Home</Link>
											</Breadcrumb.Item>
										<Breadcrumb.Item active href=""className="">Book a camp</Breadcrumb.Item>
									</Breadcrumb>
									<h2 class="tile_head">Camp</h2>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="dfgfg pb pt">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<div class="ouc_text ">
									
									{(this.state.result === 1) ? (<><p className="mb-2 details_head" dangerouslySetInnerHTML={{ __html: this.state.PageDataOther.camp.top_desc}} /></>) : ("")}
								
								
									{(this.state.result === 1) ? (<><h2 class="tile_head">{this.state.PageDataOther.camp.top_title}</h2></>) : ("")}
								</div>
							</div>
						</div>
					
				
				
				
					
					<Row>
							{(this.state.result === 1) ? (
									<>
									{this.state.PageData.map((cmp) => 
										 
										
											<Col xl={4} lg={4} md={4} sm={9} xs={10} className="main-styled-card">
											 
											 <div class="main_near">
							<div class="our_img">
								<div class="sport_g">
									<img src={cmp.image} alt="nearyou1" />
								</div>
								<div class="text_head">
									<div class="our_contenct">
										<h4> <Link to={cmp.slug}>{cmp.name}</Link> </h4>
										
									</div>
								</div>
							</div>
						</div>
											 
											
											</Col>
										
												
									)} 
									</>
								) : ("")}
						
							
						</Row>	
					
					
				
				</div>
				</section>
				
				<section class="about_d pb">
					<Container>
					<div class="row text-center">
						<div class="col-md-12">
							<div class="our_con_book">
								
								{(this.state.result === 1) ? (<><h5 class="hrad_how">{this.state.PageDataOther.camp.bottom_title}</h5></>) : ("")}
								{(this.state.result === 1) ? (<><p class="not_how" dangerouslySetInnerHTML={{ __html: this.state.PageDataOther.camp.bottom_desc}} /></>) : ("")}

							  
							</div>
						</div>
					</div>
					
					
						
						
					</Container>
				</section>	
				 
				  
				  <Footer/>
				</>
			  </Layout>
		)
	}
}
export default Sport