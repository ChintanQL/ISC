import React, {Component} from 'react';
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import {Container,Breadcrumb} from 'react-bootstrap'
import {Image,ListGroup,Form,InputGroup,FormControl,Button,Tab,Nav} from 'react-bootstrap'
import {Row,Col,Card} from 'react-bootstrap'
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import card1 from '../images/blog-card-1.png'
import imgbox1 from '../images/blog-imgbox-1.png'
import imgbox2 from '../images/blog-imgbox-2.png'
import imgbox3 from '../images/blog-imgbox-3.png'
import imgbox4 from '../images/blog-imgbox-4.png'
import sidebaradd1 from '../images/sidebar-add-1.png'
import sidebaradd2 from '../images/sidebar-add-2.png'
import { FaSearch } from "react-icons/fa";
import Main from '../components/Search/Main';
import Menubannertwo from '../components/common/Menubannertwo'
import Blogbanner from '../components/common/Blogbanner'
import LatestPost from '../components/common/LatestPost'
import { Helmet } from "react-helmet"
class demopage extends Component {
  render() {
    const blog = this.props.data.allWordpressPost
   	const category = this.props.data.allWordpressCategory
   	const tags = this.props.data.allWordpressTag
   
    return (
		<Layout>
		<Helmet>
				<title>Blog - Australian Sports Camps</title>
			</Helmet>
			 <section className="Banner-Section">
                <Container>
                    <div className="Banner-Section-data">
                    <Breadcrumb>
                        <Breadcrumb.Item className="">
                            <Link className="nav-link p-0" to="/">Home</Link>
                            </Breadcrumb.Item>
						<Breadcrumb.Item className="">
									<Link className="nav-link p-0" to="/resources">Resources</Link>
								</Breadcrumb.Item>	
								<Breadcrumb.Item active className="">
									<Link className="nav-link p-0" to="/blog">Blog</Link>
								</Breadcrumb.Item>	
                        
                    </Breadcrumb>
                    <h2 className="heading-banner">Blog</h2>
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
										<Nav.Link  href="/resources" className="uppercase font-bold">All</Nav.Link>
									</Nav.Item>
									 <Nav.Item>
										<Nav.Link  href="/blog" className="uppercase font-bold nav-link active">Blogs</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link href="/videos" className="uppercase font-bold">Videos</Nav.Link>
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
													 <Col xl={8} lg={8} md={12} className="lg-mb-2">
													{blog && blog.edges.map( prop => {
														return (
															<Card className="blog-card mb-30">
																<div className="card-img">
																	<Image src={ prop.node.acf.feature_image2}  fluid />
																</div>
																<Card.Body>
																	<Card.Title dangerouslySetInnerHTML={{ __html: prop.node.title}} as="h5" />
																	<span>In {prop.node.categories[0].name} by {prop.node.author.name} / {prop.node.date}</span>
																	<Card.Text as="div" dangerouslySetInnerHTML={{ __html: prop.node.acf.short_desc.substring(0, 500)+"...."}} />
																	<Link className="btn btn-orange-border uppercase" to={"/blog/"+prop.node.slug}>Read More</Link>
																</Card.Body>
															</Card>		
															
														)
													})}
													
													{(this.props.pageContext.previousPagePath !== "") ? (<Link className="btn uppercase btn-sm btn-orange"  to={this.props.pageContext.previousPagePath}>Previous</Link>) : (<Link className="btn btn-primary invisible"  to={this.props.pageContext.previousPagePath}>Previous</Link>)}
				
				
													{(this.props.pageContext.nextPagePath !== "") ? (<Link className="btn uppercase btn-sm btn-orange next-btnblog" to={this.props.pageContext.nextPagePath}>Next</Link>) : (<Link className="btn btn-primary invisible" to={this.props.pageContext.nextPagePath}>Next</Link>)}
												
												</Col>	
												<Col xl={4} lg={4} md={12}>
                                <div className="side-sticky">
								
								 
								
                                    <Form>
										{/*  */}
										<div className="mb-4 search">
											<h3 className="font-20 mb-2 font-medium">Search</h3> 
												<Main />
												
											
										</div>
										{/*  */}
										
										<div className="inner-sidebar mb-4">
												<h3 className="font-20 mb-2 font-medium">Categories</h3>
													<ListGroup as="ul" className="categaries">
														
														{category && category.edges.map( (propd,i) => {
															return (
																
																(propd.node.name !== 'Uncategorised') ? (<ListGroup.Item key={i} as="li" className="font-16 justify-content-between d-flex align-items-center">
																	<Link to={"/category/"+propd.node.slug+"/"} className="mr-1 color-70 font-regular decoration-none">{propd.node.name}</Link> <p className="mb-0 color-70 font-regular">{propd.node.count}</p>
																</ListGroup.Item>) : ("") 
															)
														})}
													</ListGroup>
										</div>
										{/*  */}
										<div className="inner-media-sidebar mb-4">
											<h3 className="font-20 mb-2 font-medium">Latest Posts</h3>
											<LatestPost />
											
										</div>
										{/*  */}
										<div className="mb-4 text-center">
											<Blogbanner />
										</div>
										{/*  */}
										<div className="inner-sidebar mb-4">
											<h3 className="font-20 mb-2 font-medium">Browse Tags</h3>
											{tags && tags.edges.map( (propd,i) => {
															return (
																
																(propd.node.name !== 'Uncategorised') ? (
																	<><Link to={"/tags/"+propd.node.slug+"/"} dangerouslySetInnerHTML={{ __html: propd.node.name+"("+propd.node.count+")"}}  className="tags" /> </>
																) : ("") 
															)
														})}
											
											
										</div>
										{/*  */}
										<div className="mb-4">
											<h3 className="font-20 mb-2 font-medium">About Blog</h3>
											<p className="font-16 font-medium color-70">Discover Ideas, trends & insights and get access to handy resources.</p>
										</div>
										{/*  */}
										<div className="mb-4 text-center">
											<Link to="/resources">
												<Image src={sidebaradd2} fluid />
											</Link>
										</div>
										{/*  */}
									</Form>
                                </div>
                            </Col>			
												</Row>
												
											</div>
										</Container>
									</section>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
                    </div>
                </Container>
            </section>
			<BottomForm/>
			<Footer/>
		</Layout>
	)
	}}

demopage.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default demopage


export const pageQuery = graphql`
	query($skip: Int!, $limit: Int!) {
		allWordpressPost(skip: $skip, limit: $limit) {
		edges {
			node {
				id
				slug
				title
				acf {
					feature_image2
					short_desc
				}
				date(formatString: "D MMMM, Y")
				content
				author {
				  name
				}
				categories {
				  name
				}
			}
		}
	}
	allWordpressCategory {
		edges {
			node {
				id
				name
				slug
				count
			}
		}
	}
	allWordpressTag {
		edges {
			node {
				id
				name
				count
				slug
			}
		}
	}
  }
  
`

