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
import cardhover from '../images/card-hover-img.png'
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
			 <section className="Hero-section-2">
                <Container>
                    <div className="Hero-Section-2-data">
                        <Row>
                            {blog && blog.edges.map( prop => { return (
								<Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-listed-card">
									<Card  className="listed-card mb-0">
										<div className="card-img">
											<div className="inner-card ">
												<Image src={cardhover} fluid alt="cardhover"/>
											</div>
											<Image variant="top" src={hero1} fluid alt="card"/>
										</div>
										<Card.Body>
											<Link to="/Herodetails">ANGE POSTECOGLOU</Link>
										</Card.Body>
									</Card>
								</Col>	
							)})}
							
							<Col xl={12} lg={12} md={12} sm={12} xs={12} >
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
				acf {
					featured_image
				}
				slug
				title
				content
			}
		}
	}
  }
  
`
