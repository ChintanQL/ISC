import React, {Component} from 'react';

import { Link } from 'gatsby'
import Layout from "../components/layout"

import axios from 'axios';
import {Container,Breadcrumb,Tab,Nav} from 'react-bootstrap'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import {Row,Col} from 'react-bootstrap'
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
class TNC extends Component {
	
	constructor(props) {
		super(props);
		console.log(this.props);
    }
	
	state = {
		PageData: [],
		Done:0
	}
	
	componentDidMount() {
		axios({
			url: 'https://shop.australiansportscamps.com.au/graphql',
			method: 'post',
			data: {
				query: `
					query MyQuery {
						page(id: "150264", idType: DATABASE_ID) {
							videos {
								youtubeVideoLinks {
									fieldGroupName
									link
								}
							}
						}
					}
				`
			}
		}).then(res => {
			this.setState({PageData: res.data.data.page.videos})
			this.setState({Done: 1})
		})
	}
	
	
	render() {
		return (
			<Layout>
            <>
				<section className="Banner-Section">
					<Container>
						<div className="Banner-Section-data">
						<Breadcrumb>
							<Breadcrumb.Item className="">
								<Link className="nav-link p-0" to="/">Home</Link>
								</Breadcrumb.Item>
							<Breadcrumb.Item active href=""className="">Resources</Breadcrumb.Item>
						</Breadcrumb>
						<h2 className="heading-banner">Resources</h2>
						</div>
					</Container>
				</section>
				 <section className="Resource-section-2">
					<Container>
						<div className="Resource-Section-2-data">
							<Tab.Container id="left-tabs-example" defaultActiveKey="Blog">
								<div className="p-0 border-0 justify-content-center d-flex mb-30">
									<Nav variant="pills" className="">
										 <Nav.Item>
											<Nav.Link  href="/blog" className="uppercase font-bold">Blogs</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link href="/videos" className="uppercase font-bold nav-link active">Videos</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link href="/guide" className="uppercase font-bold">Guides</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link href="/flyer" className="uppercase font-bold">Camp flyer</Nav.Link>
										</Nav.Item>
									</Nav>
								</div>
								<Tab.Content className="text-left">
								<Tab.Pane eventKey="Blog">
									<section className="Resource-guides">
										<Container>
											<div className="Resource-guides-data">
												<Row className="">
													{(this.state.Done !== 0) ? (
														<>
															{this.state.PageData.youtubeVideoLinks.map((str,i) => 
																<Col xl={6} lg={6} className="mb-30 resource-card-col">
																	<Card className="resource-card mb-0 video">
																		<ResponsiveEmbed aspectRatio="16by9">
																			<embed  src={str.link} />
																		</ResponsiveEmbed>
																	</Card>
																</Col>
															)}
														</>
													) : ("")}
												</Row>
											</div>
										</Container>
									</section>
								</Tab.Pane>
							</Tab.Container>
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

export default TNC
