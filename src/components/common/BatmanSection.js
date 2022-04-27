import React, { Component } from 'react';
import { Container,Image,Row,Col,Button } from 'react-bootstrap';
import batman from '../../images/bat-man.png'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import { Link,StaticQuery, graphql } from 'gatsby'
class BatmanSection extends Component {

    render() {
        return (
            <>
            
            <section className="section04 pt pb">
                <Container>
				<div className="row ">
				<div className="col-md-6">
					<h2 className="tile_head">{this.props.data.title}</h2>
					<p className="font-15 font-medium color-3b mb-30" dangerouslySetInnerHTML={{ __html: this.props.data.desc}} />
					<div className="brn_more">
						<Link  to="/book-a-camp" >BOOK A CAMP TODAY</Link>
					</div>
					<div></div>
				</div>
				<div className="col-md-6">
					<div className="our_imag_dallry">
						<div className="main_ug">
							<div className="top_g">
								<div className="top1"><a href="#"><img src={img2} alt="img2"/></a></div>
							    <div  className="top1"><a href="#"><img src={img4} alt="img2"/></a></div>
							</div>
							<div className="top_g top">
								<div  className="top1"><a href="#"><img src={img3} alt="img2"/></a></div>
							    <div  className="top1"><a href="#"><img src={img1} alt="img2"/></a></div>
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

export default BatmanSection;
