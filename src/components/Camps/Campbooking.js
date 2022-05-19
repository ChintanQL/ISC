import React from "react"
import axios from "axios"
import {Container,Image, Row,Col,Card} from 'react-bootstrap'
import { Link, StaticQuery, graphql } from 'gatsby'
import Menubanner from '../common/Menubanner'
import Blogbanner from '../common/Blogbanner'
import LazyLoad from 'react-lazyload';

class Campbooking extends React.Component{
	constructor(props) {
		super(props);
	}
	state = {
        pagedata: [],
		showInfo: 0,
		query_code:"",
		name:"",
		code:"",
		count:0,
		shown: "d-none"
    };
	componentDidMount() {
		var cat = this.props.category;
		var name = this.props.name;
		var wid = this.props.wid;
		var camptitle = this.props.camptitle;
		
		this.setState({name: name})
		
		var url = "https://shop.nationalsportscamps.in/wp-json/newasc/v1/cat-products/"+cat+"?id="+wid+"&t="+camptitle;
		axios.get(url).then(e => {
			this.setState({pagedata: e.data.ResponseData.Camp})
			this.setState({showInfo: 1})
			this.setState({count: e.data.ResponseData.Count})
		})
		
		
		
		
    }

	render (){
		return(
			<>
			<div className="laoder2" style={{ display: this.state.showInfo == 0 ? "block" : "none" }} >
				<div id="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
					<img alt="" className="icon" src="https://shop.nationalsportscamps.in/demo.svg" />
				</div>
			</div>
			{(this.state.showInfo == 1) ? (
				<>
					{(this.state.count != 0) ? (
						<>
						<Row className="justify-content-center">
									<Col xl={12} lg={12}>
										<div className="title">
											<h2>Select your camp below to book online now.</h2>
										</div>
									</Col>
								</Row>
								<Row className="pbf">
									
							{(this.state.pagedata != "") ? (
								<>
									{this.state.pagedata.map((prop,i) => {return (
										
								<div class="col-md-4">
					<div class="coach_sem">
						<div class="coact_inner_inmg">
							<div class="img_wrap">
								<div dangerouslySetInnerHTML={{ __html: prop.Html}} />
							</div>
							
						</div>
						<div class="tag_name">
							<div class="our_yg">
							<h6>{prop.Name}</h6>
							<p class="date_h">{prop.Camp_Date}</p>
							<p class="htfed">{prop.Camp_Venue}</p>
						</div>
						<div class="cart_g">
							{(prop.Flag == 1) ? (
							
							<div class="cart_g yhg_stice">
							<div class="rate delet_price"><del>₹{prop.regular_price}</del> </div>
							<div class="rate">₹{prop.sale_price}</div>
						</div>
														
													) : (
														<>
														<div class="cart_g yhg_stice">
														
															<div class="rate">₹{prop.price}</div>
														</div>
														
															
														</>
													)}
							
							<div class="btn_tdf">
								<Link className="" to={"https://shop.nationalsportscamps.in/book/"+prop.Slug}>More info / Book Now</Link>
							</div>
						</div>
						</div>
					</div>
				</div>
								
								
								
																)})}
								</>
							) : ("")}	
							</Row>
						</>
					
					) : (
						<div className=""  >
							<div className="No-camp-section-2">
								<div className="container">
									<div className="title mb-30">
										<h2>
											SELECT A SPORT TO VIEW AND BOOK CAMPS
										</h2>
										<p className="text-center">
											No camps or programs were found matching your selection.
										</p>
									</div>
									<div className="title">
										<h2>
											Notify Me
										</h2>
										<p className="text-center">
											Please fill your email to get notified when similar camps are available again.
										</p>
									</div>
								</div>
							</div>
							<section className="No-camp-section-3">
								<div className="container">
									<div className="row">
										<div className="col-xl-8 col-lg-8 col-md-7 md-mb-4">
											<iframe src={"https://shop.nationalsportscamps.in/gravity-notify/?camp_state=&camp_sports="+this.state.name} frameBorder="0" width="100%" height="470" ></iframe>
										</div>
										<div className="col-xl-4 col-lg-4 col-md-5 secc">
											<Blogbanner />
											<div className="callbtnblue"><a href="tel:1300914368"><span>call on   </span>1300914368</a></div>
										</div>
									</div>
								</div>
							</section>
						</div>
					
					)}
				
				</>
			
			) : ("")}
			
			
			</>
		)
	}	

}

export default Campbooking
