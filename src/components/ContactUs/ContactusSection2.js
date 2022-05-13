import React, { Component  } from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap'
import icon1 from '../../images/contact-card-1.png'
import icon2 from '../../images/contact-card-2.png'
import icon3 from '../../images/contact-card-3.png'
import phone from '../../images/phone.png'
import email from '../../images/email.png'
import post from '../../images/post.png'


class ContactusSection2 extends Component {
 
    render() {      
        return (
            <>
            <section className="contact_det pt pb">
                <Container>
                    <div className="Contactus-Section-2-data">
                       <div className="row">
				<div className="col-md-12 ">
					<div className="ouc_text text-start">
						<p className="details_head">
							<b>If you’d like to get in touch with NSC, please fill in this form. We’ll get back<br/> to you as soon as we can!
						 </b>
					</p>
					</div>
				</div>
			</div>
                       <div className="row">
					<div className="col-md-12">
						<h2 className="tile_head">National Sports Camps </h2>
					</div>
				</div>
                        <div className="row">
					<div className="col-lg-4 col-sm-12 col-12">
						<div className="conta_details_g">
							<div className="img_icon">
								<img src={phone} alt="phone"/>
							</div>
							<div className="icon_gdet">
								<h6 className="num_g">Call us</h6>
								<p><b>Freecall: 1300 914 368</b></p>
								<p>Talk directly with a human<br/>9.00am to 4.30pm IST</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-12 col-12">
						<div className="conta_details_g">
							<div className="img_icon">
								<img src={email} alt="phone"/>
							</div>
							<div className="icon_gdet">
								<h6 className="num_g">Email</h6>
								<p><b>admin@nationalsportscamp.in</b></p>
								<p>We’ll reply within one hour <br/>9.00am to 4.30pm IST</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-12 col-12">
						<div className="conta_details_g">
							<div className="img_icon">
								<img src={post} alt="phone"/>
							</div>
							<div className="icon_gdet">
								<h6 className="num_g">Post:</h6>
								<p><b>PO Box 5332, Clayton VIC 3168</b></p>
								<p>Talk directly with a human<br/>9.00am to 4.30pm IST</p>
							</div>
						</div>
					</div>
				</div>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default ContactusSection2;
