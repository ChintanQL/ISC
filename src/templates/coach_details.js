import React, {Component} from 'react';
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import {Container,Breadcrumb} from 'react-bootstrap'
import {Row,Col,Card,Image,Form,ListGroup,Button} from 'react-bootstrap'
import { Link } from 'gatsby'
import card1 from '../images/blog-card-1.png'
import PropTypes from "prop-types"


class CoachDetails extends Component {
	
  render() {
  
	const coach = this.props.data.allWordpressWpAscHeroes
	
	
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
								<Breadcrumb.Item className="">
									<Link className="nav-link p-0" to="">Coach</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item active href="" dangerouslySetInnerHTML={{ __html: coach.edges[0].node.title}} className="" />
							</Breadcrumb>
							<h2 className="heading-banner">Coach</h2>
						</div>
					</Container>
				</section>
				<section className="Blog-details-Section-2">
					<Container>
						<div className="Blog-details-Section-2-data">
							<Row>
								<Col xl={8} lg={8} md={12} className="lg-mb-2">
									<Card className="blog-details-card mb-30">
										<Card.Title as="h5" dangerouslySetInnerHTML={{ __html: coach.edges[0].node.title}} />
										
										<div className="card-img mb-3">
											<Image src={prop.node.acf.featured_image} fluid />
										</div>
										<Card.Text as="div" dangerouslySetInnerHTML={{ __html: coach.edges[0].node.content}} />
									</Card>
								</Col>
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

CoachDetails.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default CoachDetails

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressWpAscHeroes(filter: {id: { eq: $id }}) {
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
