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

class Partner extends Component {
	
	state = {
		PageData: [],
		result: 0,
		showInfo: 0
	}
	
	componentDidMount() {
		axios({
			url: 'https://shop.australiansportscamps.com.au/wp-json/newasc/v1/camp_partner',
			method: 'get'}).then(res => {
			const chunkSize = 3;
			const arr = res.data.ResponseData;
			const groups = arr.map((e, i) => { 
				 return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
			}).filter(e => { return e; });
			console.log({arr, groups});	
				
				
				
			this.setState({PageData: groups})
			this.setState({result: 1})
			this.setState({showInfo: 1})
		})
	}
	
	render() {
		return (
			  <Layout>
				<>
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
							<Breadcrumb.Item active href=""className="">Sport</Breadcrumb.Item>
						</Breadcrumb>
						<h2 className="heading-banner">Sport</h2>
						</div>
					</Container>
				</section>
				<Campbanner/>
				<section className="Sport-section-2">
					<Container>
						<div className="title-main mb-0">
							<h2>CAMPS & PROGRAMS</h2>
							<p>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
							</p>
							<p className="mb-0">
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
							</p>
						</div>
					</Container>
				</section>
				<section className="Sport-section-3">
					<Container>
						<Row>
							{(this.state.result === 1) ? (
									<>
									{this.state.PageData.map((cmp) => 
										 <Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-styled-card">
										{cmp.map((camp) => 
											 <Card  className="listed-card mb-0">
												<div className="card-img">
													<div className="inner-card ">
														<Image src={cardhover} fluid alt="cardhover"/>
													</div>
													<Image variant="top" src={camp.image} fluid alt="card"/>
												</div>
												<Card.Body>
													<Link to={"/camps/"+camp.slug}>{camp.title}</Link>
												</Card.Body>
											</Card>
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
							<h2>ABOUT AUSTRALIAN SPORTS CAMPS</h2>
						</div>
						
						<p className="font-15 font-medium color-3b">
							ASC has been running holiday sports camps for kids aged 6-16 for over 35 years. We offer structured skill-improvement camps in Australia, ensuring that participants have fun in the school holidays, whilst developing a deeper love and enthusiasm for their chosen sport.
						</p>
						<p className="font-15 font-medium color-3b mb-0">
							We have school holiday programs, for a wide variety of sports camps in Australia throughout the Summer, Autumn, Winter and  Spring school holiday breaks. Our kid's camps are suited to players of all abilities and we ensure everyone has fun in their school holiday activities. Also, ASC ensures your children receive quality coaching at top sporting facilities, plus have the chance to meet and be inspired by elite sports people, past and present.
						</p>
					</Container>
				</section>	
				 
				  <BottomForm/>
				  <Footer/>
				</>
			  </Layout>
		)
	}
}
export default Partner