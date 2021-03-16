import React, {Component} from 'react';
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import {Container,Breadcrumb} from 'react-bootstrap'
import {Row,Col,Card,Image,Form,ListGroup,Button} from 'react-bootstrap'
import { Link,graphql } from 'gatsby'
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
									<Link className="nav-link p-0" to="">ASC Heroes</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item active href="" dangerouslySetInnerHTML={{ __html: coach.edges[0].node.title}} className="" />
							</Breadcrumb>
							<h2 className="heading-banner" dangerouslySetInnerHTML={{ __html: coach.edges[0].node.title}} />
						</div>
					</Container>
				</section>
				<section className="Hero-Details-Section-2">
                <Container>
						<div className="Hero-Details-Section-2-data">
							<div className="title">
								<h2 className="uppercase">ASC TALENT PROFILES</h2>
								
							</div>
							<Row className="align-items-center justify-content-center mb-2">
								
								<Col xl={12} lg={12}>
									<p className="font-18 font-medium">
									<Card.Text as="div" dangerouslySetInnerHTML={{ __html: coach.edges[0].node.content}} />
									</p>
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
