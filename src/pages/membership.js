import React, {Component} from 'react';
import {Container,Breadcrumb,Row,Col,Card,Image,Button,Accordion} from 'react-bootstrap'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import axios from 'axios';

class Membership extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
    }
	
	state = {
		PageData: [],
		Done: 0,
		showInfo: 0
	}
	handleToggle = (id) => {
        document.querySelectorAll('.card:not(.id'+id+')').forEach(function(button) {	
			if(!button.classList.contains(".id"+id)){
				button.classList.remove('active');
			}
		});
		if (document.querySelector(".id"+id).classList.contains('active')) {
		  document.querySelector(".id"+id).classList.remove('active');
		} else {
		  document.querySelector(".id"+id).classList.add('active');
		}
    } 
	componentDidMount() {
		axios({
			url: 'https://shop.australiansportscamps.com.au/graphql',
			method: 'post',
			data: {
				query: `
					query MyQuery {
						page(id: "123761", idType: DATABASE_ID) {
						  id
						  Membership {
							howItWorks
							subTitle
							termsConditions
							title
							topDesc
							faq {
							  answers
							  question
							}
							memberships {
								campTitle
								class
								months
								price
								save
								strikePrice
								title1
								title2
								title3
								url
								icon {
								  sourceUrl
								}
							  }
							  steps {
								stepName
								subtitle
								title
								image {
								  sourceUrl
								}
							  }
						  }
						}
					}
				`
			}
		}).then(res => {
			this.setState({PageData: res.data.data.page.Membership})
			this.setState({Done:1})
			this.setState({showInfo: 1})
			console.log(res);
		})
	}
  
  render() {
      return (
			<Layout>
				<>
					<div className="laoder" style={{ display: this.state.showInfo == 0 ? "block" : "none" }} >
						<div id="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
							<img alt="" className="icon" src="https://shop.australiansportscamps.com.au/demo.svg" />
						</div>
					</div>
					<section className="Banner-Section">
						<Container>
							<div className="Banner-Section-data">
							<Breadcrumb>
								<Breadcrumb.Item className="">
									<Link className="nav-link p-0" to="/">Home</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item className="">
									<Link className="nav-link p-0" to="/City">Pricing</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item active href="#"className="">Membership pass</Breadcrumb.Item>
							</Breadcrumb>
							<h2 className="heading-banner">Membership pass</h2>
							</div>
						</Container>
					</section>
					<section className="Membership-section-2">
						<Container>
							<div className="Membership-section-2-data">
								<div className="title mb-0">
									
									{(this.state.PageData) ? (<h2 className="uppercase">{this.state.PageData.title}</h2>) : ("")}
								</div>
								{(this.state.PageData) ? (<div className="text-center list-style-disc font-18 font-medium mb-30" dangerouslySetInnerHTML={{ __html: this.state.PageData.subTitle}} ></div>) : ("")}
								
								{(this.state.PageData) ? (<div className="text-center list-style-disc font-18 font-medium mb-30" dangerouslySetInnerHTML={{ __html: this.state.PageData.topDesc}} ></div>) : ("")}
								
								
							</div>
						</Container>
					</section>
					<section className="Membership-section-3">
						<Container>
							<div className="Membership-section-3-data">
								<Row className="justify-content-center">
									
									{(this.state.Done !== 0) ? (
										<>
											{this.state.PageData.memberships.map((str,i) => 
												<>
												<Col xl={4} lg={4} md={4}>
													<Card className="subscription-card">
														<div className={str.class+" save-tag"}>
															{str.save}
														</div>
														<div className="card-img text-center">
															<Image src={str.icon.sourceUrl} fluid alt="" width="150" height="150" />
														</div>
														<Card.Body className="text-center px-0 pb-0">
															<Card.Title as="h5">{str.campTitle}</Card.Title>
															<Card.Text as="p" className="font-18 font-bold color-3b">{str.months}</Card.Text>
															<p className="points font-16 font-medium">{str.title1} </p>
															<p className="points font-16 font-medium">{str.title2}</p>
															<p className="points font-16 font-medium mb-20">{str.title3}</p>
															<Card.Title as="h5">${str.price}</Card.Title>
															<p className="price color-3b font-18 font-medium">${str.strikePrice}</p>
															<Link className=" uppercase btn-sm btn-orange btnpadding" to={str.url}>BOOK Now</Link>
														</Card.Body>
													</Card>
												</Col>
												</>
											)}
										</>
									) : ("")}
								</Row>
							</div>
						</Container>
					</section>
					<section className="Membership-section-4">
						<Container>
							<div className="Membership-section-4-data">
							<div className="title">
								<h2 className="uppercase">Terms & Conditions</h2>
							</div>
							{(this.state.PageData) ? (<div className="text-center list-style-disc font-18 font-medium mb-30" dangerouslySetInnerHTML={{ __html: this.state.PageData.termsConditions}} ></div>) : ("")}
							</div>
						</Container>
					</section>
					<section className="Membership-section-5">
						<Container>
							<div className="Membership-section-5-data">
								<div className="title mb-0">
									<h2 className="uppercase">How It Works</h2>
								</div>
								{(this.state.PageData) ? (<div className="text-center list-style-disc font-18 font-medium mb-30" dangerouslySetInnerHTML={{ __html: this.state.PageData.howItWorks}} ></div>) : ("")}
							</div>
						</Container>
					</section>
					<section className="Membership-section-6">
						<Container>
							<div className="Membership-section-6-data">
								<Row>
									
									{(this.state.Done !== 0) ? (
										<>
											{this.state.PageData.steps.map((str,i) => 
												<>
												<Col xl={4} lg={4} md={12} className="lg-mb-4">
													<div className="steps-data justify-content-center d-block text-center">
														<h3 className="font-medium mb-3">{str.stepName}</h3>
														<Image src={str.image.sourceUrl} fluid alt="" className="mb-3" width="100" height="100" />
														<h3 className="font-medium mb-1">{str.title}</h3>
														<h3 className="font-bold mb-0">{str.subtitle}</h3>
													</div>
												</Col>
												</>
											)}
										</>
									) : ("")}
								</Row>
							</div>
						</Container>
					</section>
					<section className="Membership-section-7">
						<Container>
							<div className="Membership-section-7-data accordian-div">
								<h2 className="font-bold color-3b text-center">FAQS (FREQUENTLY ASKED QUESTIONS)</h2>

								<Accordion defaultActiveKey="1">
									
									{(this.state.Done !== 0) ? (
									<>
									{this.state.PageData.faq.map((str,i) => 
										<>
										<Card  className={"p-0 mb-4 id"+i}>
											<Card.Header>
												<Accordion.Toggle className="font-18 font-medium p-0" as={Button} onClick={() => {this.handleToggle(i)}} variant="link" eventKey={'"'+i+'"'}>
													{str.question}
												</Accordion.Toggle>
											</Card.Header>
											<Accordion.Collapse eventKey={'"'+i+'"'}>
												<Card.Body className="font-16 font-regular" dangerouslySetInnerHTML={{ __html: str.answers}} />
											</Accordion.Collapse>
										</Card>
										</>
									)}
									</>
								) : ("")}
									
									
									
									
								</Accordion>
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
export default Membership