import React, {Component} from 'react';
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import {Container,Breadcrumb, Row,Col} from 'react-bootstrap'
import BottomForm from "../components/common/BottomForm"
import Campbooking from "../components/Camps/Campbooking"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

class Cat extends Component {
	
	constructor(props) {
    super(props);
 
   
  }
	
	
	render() {
		console.log(this.props);
		return (
			<Layout>
				<>
				<Helmet>
				<title>Book - Australian Sports Camps | Holiday Camps Australia</title>
			</Helmet>
				<section className="Banner-Section">
					<Container>
						<div className="Banner-Section-data">
						<Breadcrumb>
							<Breadcrumb.Item className="">
								<Link className="nav-link p-0" to="/">Home</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item className="">
								<Link className="nav-link p-0" to="/book-a-camp">Sport</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active href="" dangerouslySetInnerHTML={{ __html: this.props.pageContext.name}} className="" />
						</Breadcrumb>
						<h2 className="heading-banner" dangerouslySetInnerHTML={{ __html: this.props.pageContext.name}} ></h2>
						</div>
					</Container>
				</section>	 
				<section className="Sport-details-section-3">
					<Container>
						<Campbooking category={this.props.pageContext.id} />
						
                    </Container>
                </section>
				
				<BottomForm/>
				<Footer/>
				</>
			</Layout>
      )
  }
}



export default Cat





