import React, { Component  } from 'react';
import {  Container,Image,ListGroup,Row,Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import logo from '../../images/footer-logo.png'
import footer1 from '../../images/footer-1.png'
import footer2 from '../../images/footer-2.png'
import footer3 from '../../images/footer-3.png'
import footer4 from '../../images/footer-4.png'
import footer5 from '../../images/footer-5.png'
import footer6 from '../../images/footer-6.png'
import footer_s1 from '../../images/footer_s1.png'
import footer_s2 from '../../images/footer_s2.png'
import footer_s3 from '../../images/footer_s3.png'
import footer_s4 from '../../images/footer_s4.png'
import footer_s5 from '../../images/footer_s5.png'
import logonsc from '../../images/logonsc.png'


import SocialMenu from './SocialMenu'
import F1Menu from './F1Menu'
import F2Menu from './F2Menu'

class Footer extends Component {
    render() {
        
        return (
            <>
			<footer className="footer  pt pb">
	<div className="top_footer">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-sm-6 col-6">
					<div className="footer_logo">
						<a href="#">
							<img src={logonsc} />
						</a>
					</div>
				</div>
				<div className="col-md-6 col-sm-6 col-6">
					<div className="classcont_us">
						<div className="btn_c">
							
							<Link to="/contact/" className="uppercase">Contact Us</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="middle_footer">
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-sm-6">
					<div className="list_col">
						<h4>Product</h4>
						<ul>
							
							 <F1Menu />
						</ul>
					</div>
				</div>
		
				<div className="col-md-4 col-sm-6">
					<div className="list_col">
						<h4>Company</h4>
						<ul>
							
							<F2Menu />
						</ul>
					</div>
				</div>
				<div className="col-md-4 col-sm-6">
					<div className="list_col social_y">
						<h4>Follow us</h4>
						<ul >
							<li><a href="#"><img src={footer_s1} /></a></li>
							<li><a href="#"><img src={footer_s2} /></a></li>
							<li><a href="#"><img src={footer_s3} /></a></li>
							<li><a href="#"><img src={footer_s4} /></a></li>
							<li><a href="#"><img src={footer_s5} /></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="bottom_footer">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-sm-12">
					<div className="copy_right">
						<p><a href="#">National Sports Camps </a> © 2022. All Rights Reserved.</p>
					</div>
				</div>
				<div className="col-md-6 col-sm-12">
					<div className="our_f text-end">
						<ul>
							<li><Link to="/terms-conditions/" className="uppercase">TERMS & CONDITIONS</Link></li>
							<li><Link to="/asc-privacy-policy/" className="uppercase">PRIVACY POLICY</Link></li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	</div>
</footer>
            </>
        );
    }
}

export default Footer;