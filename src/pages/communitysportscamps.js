import React, {Component} from 'react';

import { Link } from 'gatsby'
import Layout from "../components/layout"

import axios from 'axios';
import {Container,Breadcrumb} from 'react-bootstrap'
import {Row,Col} from 'react-bootstrap'
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import CampSC from "../components/Camps/CSC"
import { Helmet } from "react-helmet"
class CSC extends Component {
	
	constructor(props) {
		super(props);
		console.log(this.props);
    }
	
	state = {
		PageData: [],
		showInfo: 0,
		title:"",
		description:"",
		keywords:"",
		og_type:"",
		og_title:"",
		og_description:"",
		twitter_card:"",
		twitter_title:"",
		twitter_description:""
	}
	
	componentDidMount() {
		axios({
			url: 'https://shop.spinhouse4u.com/graphql',
			method: 'post',
			data: {
				query: `
					query MyQuery {
						page(id: "180123", idType: DATABASE_ID) {
							id
							slug
							title
							content
							seo {
					  focuskw
					  metaDesc
					  metaKeywords
					  opengraphAuthor
					  opengraphDescription
					  opengraphModifiedTime
					  opengraphPublishedTime
					  opengraphPublisher
					  opengraphSiteName
					  opengraphTitle
					  opengraphType
					  opengraphUrl
					  readingTime
					  title
					  twitterDescription
					  twitterTitle
					}
						}
					}
				`
			}
		}).then(res => {
			this.setState({PageData: res.data.data.page})
			this.setState({showInfo: 1})
			this.setState({title: res.data.data.page.seo.title})
			this.setState({description: res.data.data.page.seo.metaDesc})
			this.setState({keywords: res.data.data.page.seo.metaKeywords})
			this.setState({og_type: "website"})
			this.setState({og_title: res.data.data.page.seo.opengraphTitle})
			this.setState({og_description: res.data.data.page.seo.opengraphDescription})
			this.setState({twitter_card: "summary_large_image"})
			this.setState({twitter_title: res.data.data.page.seo.twitterTitle})
			this.setState({twitter_description: res.data.data.page.seo.twitterDescription})
		})
	}
	
	
	
	
	render() {
		return (
			<Layout>
            <>
			<Helmet>
				<title>Community Sports Camps - Australian Sports Camps</title>
				<meta name="title" content={this.state.title}></meta>
					<meta name="description" content={this.state.description}></meta>
					<meta name="keywords" content={this.state.keywords}></meta>
					<meta property="og:type" content="website"></meta>
					<meta property="og:title" content={this.state.og_title}></meta>
					<meta property="og:description" content={this.state.og_description}></meta>
					<meta property="twitter:card" content="summary_large_image"></meta>
					<meta property="twitter:title" content={this.state.twitter_title}></meta>
					<meta property="twitter:description" content={this.state.twitter_description}></meta>
			</Helmet>
				<div className="laoder" style={{ display: this.state.showInfo == 0 ? "block" : "none" }} >
					<div id="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
						<img alt="" className="icon" src="https://staging-ascstaging.kinsta.cloud/demo.svg" />
					</div>
				</div>
				<section className="Banner-Section">
					<Container>
						<div className="Banner-Section-data">
							<Breadcrumb>
								<Breadcrumb.Item className="">
									<Link className="nav-link p-0" to="/">Home</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item active href=""className="">Community Sports Camps</Breadcrumb.Item>
							</Breadcrumb>
							<h2 className="heading-banner">Community Sports Camps</h2>
						</div>
					</Container>
				</section>
				
				
				<section className="Sport-details-section-2">
					<Container>
						<Row className="mb-30">
							<Col xl={12}>
									{(this.state.PageData) ? (<div dangerouslySetInnerHTML={{ __html: this.state.PageData.content}} ></div>) : ("")}
							</Col>
						</Row>
					
					</Container>
				</section>
				<section className="Sport-details-section-3">
					<Container>
						
							<CampSC />
						
						
                    </Container>
                </section>
				
				<BottomForm/>
				<Footer/>
			</>
			</Layout>
		)
	}
}

export default CSC
