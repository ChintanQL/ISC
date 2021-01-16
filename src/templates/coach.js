import React, {Component} from 'react';
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import {Container,Breadcrumb} from 'react-bootstrap'
import {Image,ListGroup,Form,InputGroup,FormControl,Button} from 'react-bootstrap'
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
class coach extends Component {
  render() {
    const blog = this.props.data.allWordpressWpAscHeroes
   
   
    return (
		<Layout>
			<section className="Banner-Section">
                <Container>
                    <div className="Banner-Section-data">
                    <Breadcrumb>
                        <Breadcrumb.Item className="">
                            <Link className="nav-link p-0" to="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active href=""className="">Coach</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className="heading-banner">Meet the ASC Heroes</h2>
                    </div>
                </Container>
            </section> 
			<section className="Blog-Section-2">
                <Container>
                    <div className="Blog-Section-2-data">
                        <Row>
                            <Col xl={8} lg={8} md={12} className="lg-mb-2">
                                
								{blog && blog.edges.map( prop => {
									return (
										<Card className="blog-card mb-30">
											<div className="card-img">
												<Image src={card1} fluid />
											</div>
											<Card.Body>
												<Card.Title dangerouslySetInnerHTML={{ __html: prop.node.title}} as="h5" />
												<span>In {prop.node.categories[0].name} by {prop.node.author.name} / {prop.node.date}</span>
												<Card.Text as="div" dangerouslySetInnerHTML={{ __html: prop.node.content.substring(0, 500)+"...."}} />
												<Link className="btn btn-orange-border uppercase" to={"/the-asc-heroes/"+prop.node.slug}>Read More</Link>
											</Card.Body>
										</Card>						
									)
								})}
								
								{(this.props.pageContext.previousPagePath !== "") ? (<Link className="btn btn-primary"  to={this.props.pageContext.previousPagePath}>Previous</Link>) : (<Link className="btn btn-primary invisible"  to={this.props.pageContext.previousPagePath}>Previous</Link>)}
			
			
								{(this.props.pageContext.nextPagePath !== "") ? (<Link className="btn btn-primary" to={this.props.pageContext.nextPagePath}>Next</Link>) : (<Link className="btn btn-primary invisible" to={this.props.pageContext.nextPagePath}>Next</Link>)}
								
								
							</Col>
										
						</Row>
					</div>	
				</Container>
			</section>
			<BottomForm/>
			<Footer/>
			 
		 
		</Layout>
	)
	}}

coach.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default coach


export const pageQuery = graphql`
	query($skip: Int!, $limit: Int!) {
		allWordpressWpAscHeroes(skip: $skip, limit: $limit) {
		edges {
			node {
				id
				slug
				title
				content
			}
		}
	}
  }
  
`

