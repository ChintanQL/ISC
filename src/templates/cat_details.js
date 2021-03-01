import React, {Component} from 'react';
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import {Container,Breadcrumb, Row,Col} from 'react-bootstrap'
import BottomForm from "../components/common/BottomForm"
import Campbooking from "../components/Camps/Campbooking"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"


class Cat extends Component {
	render() {
		console.log(this.props);
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
								<Link className="nav-link p-0" to="/book-a-camp">Sport</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active href=""className=""></Breadcrumb.Item>
						</Breadcrumb>
						<h2 className="heading-banner"></h2>
						</div>
					</Container>
				</section>	 
				<section className="Sport-details-section-3">
					<Container>
						<Row className="justify-content-center mb-4">
							<Col xl={12} lg={12}>
								<div className="title">
									<h2>Select your camp below to book online now.</h2>
								</div>
							</Col>
						</Row>
						<Row className="">
							
						</Row>
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





