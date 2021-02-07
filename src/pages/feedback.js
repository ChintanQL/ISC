import React, {Component} from 'react';

import { Link } from 'gatsby'
import Layout from "../components/layout"

import axios from 'axios';
import {Container,Breadcrumb} from 'react-bootstrap'
import {Row,Col} from 'react-bootstrap'
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
class PP extends Component {
	
	constructor(props) {
		super(props);
		console.log(this.props);
    }
	
	state = {
		PageData: [],
		showInfo: 0
	}
	
	componentDidMount() {
		axios({
			url: 'https://shop.australiansportscamps.com.au/graphql',
			method: 'post',
			data: {
				query: `
					query MyQuery {
						page(id: "85", idType: DATABASE_ID) {
							id
							slug
							title
							content
						}
					}
				`
			}
		}).then(res => {
			this.setState({PageData: res.data.data.page})
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
								<Breadcrumb.Item active href=""className="">Camp Feedback</Breadcrumb.Item>
							</Breadcrumb>
							<h2 className="heading-banner">Camp Feedback</h2>
						</div>
					</Container>
				</section>
				<section className="Blog-Section-2">
					<Container>
						<div className="Blog-Section-2-data">
							<Row>
								<Col xl={10} lg={10} md={12} className="lg-mb-2">
								{(this.state.PageData) ? (<div dangerouslySetInnerHTML={{ __html: this.state.PageData.content}} ></div>) : ("")}
								</Col>
							</Row>
						</div>
						<div className="Blog-Section-2-data">
							<Row>
								<iframe height="1800" width="100%" frameBorder="0" src="https://shop.australiansportscamps.com.au/gravity-feedback/" title="description" />
							</Row>
						</div>
					</Container>
					
				</section>
				<BottomForm/>
				<Footer/>
			</>
			</Layout>
		)
	}
}

export default PP


