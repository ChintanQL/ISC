import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import LazyLoad from 'react-lazyload';
import $ from "jquery";
import axios from 'axios';
import {Container,Breadcrumb} from 'react-bootstrap'
import {Row,Col,Card} from 'react-bootstrap'
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import { Helmet } from "react-helmet"
class About extends Component {
	
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
						page(id: "17", idType: DATABASE_ID) {
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
				<title>About Us - National Sports Camps</title>
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
						<img alt="" className="icon" src="https://shop.spinhouse4u.com/demo.svg" />
					</div>
				</div>
				
				<section class="breadcumb">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="breadcumb_wrpaeer">
						<div class="breadcumb_tf">
							<Breadcrumb>
								<Breadcrumb.Item className="">
									<Link className="nav-link p-0" to="/">Home</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item active href=""className="">About Us</Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<h2 class="tile_head">About Us</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
				
				
				
				<section class="our_about_us">
					<Container>
						
							
								
								{(this.state.PageData) ? (<div dangerouslySetInnerHTML={{ __html: this.state.PageData.content}} ></div>) : ("")}
						</Container>
				</section>		
				 <section class="cont_form">
					<Container>			
						<div className="Blog-Section-2-data">
							<Row>
								<iframe height="600" width="100%" frameBorder="0" src="https://shop.spinhouse4u.com/gravity-about-us/" title="description" />
							</Row>
						</div>
					</Container>
				</section>
				
				<Footer/>
			</>
			</Layout>
		)
	}
}

export default About