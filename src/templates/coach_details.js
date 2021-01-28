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
									<Link className="nav-link p-0" to="">Coach</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item active href="" dangerouslySetInnerHTML={{ __html: coach.edges[0].node.title}} className="" />
							</Breadcrumb>
							<h2 className="heading-banner">{coach.edges[0].node.title}</h2>
						</div>
					</Container>
				</section>
				<section className="Hero-Details-Section-2">
                <Container>
						<div className="Hero-Details-Section-2-data">
							<div className="title">
								<h2 className="uppercase">SHORT BIOGRAPHY</h2>
								<h3 className="uppercase font-22 font-bold color-3b">ABOUT Heroes</h3>
							</div>
							<Row className="align-items-center justify-content-center mb-2">
								<Col xl={4} lg={4} className="lg-mb-4">
									<div class="hero-image text-center">
									<Image src={coach.edges[0].node.acf.featured_image} fluid alt="" />
									</div>
								</Col>
								<Col xl={8} lg={8}>
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
