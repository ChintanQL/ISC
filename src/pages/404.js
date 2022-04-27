import React from "react"
import {Container,Breadcrumb,Row,Col} from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import fri_image from "../images/kids.png"
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
const NotFoundPage = () => (
  <Layout>
  <Helmet>
				<title>404 Error - Australian Sports Camps</title>
			</Helmet>
    <section className="Banner-Section">
		<Container>
			<div className="Banner-Section-data">
				<Breadcrumb>
					<Breadcrumb.Item className="">
						<Link className="nav-link p-0" to="/">Home</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item active href=""className="">404</Breadcrumb.Item>
				</Breadcrumb>
				<h2 className="heading-banner">404</h2>
			</div>
		</Container>
	</section>
	<section className="thank-you-Section-1">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-8 col-lg-8 lg-mb-8">
                    <div className="thank-you-data-one text-center">
						
						 <h2 className="font-bold color-blue uppercase">Whoops!</h2>
						 <p className="font-18 mb-5 font-medium">We couldn’t find the page you’re looking for</p>
                        <div className="thankyoumain_img"><img src={fri_image} alt=""/></div>
                       
                        <p className="font-18 mt-5 font-medium">Looks like this page went to attend one of our camps.<br/>
			Try our <Link to={"/"}> homepage </Link> or <Link to={"/resources"}>resources </Link> instead</p>
                        

                        
                    </div>
                </div>
                </div>
                </div>
                </section>
	
	<SEO title="404: Not found" />
   
  </Layout>
)

export default NotFoundPage
