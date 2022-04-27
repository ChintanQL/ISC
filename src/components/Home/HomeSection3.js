import React, { Component  } from 'react';
import { Link } from 'gatsby'
import {  Container,Col,Row,Card,Image } from 'react-bootstrap'
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import card4 from '../../images/card4.png'
import card5 from '../../images/card5.png'
import card6 from '../../images/card6.png'
import card7 from '../../images/card7.png'
import card8 from '../../images/card8.png'
import card9 from '../../images/card9.png'
import cardhover from '../../images/card-hover-img.png'


class HomeSection3 extends Component {
    
	
	
	render() {    
		const chunkSize = 3;
		const arr = this.props.data;
		const groups = arr.map((e, i) => { 
			 return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
		}).filter(e => { return e; });
		console.log({arr, groups});
        return (
            <>
            <section className="section03 pb">
                <Container>
                    <div className="row">
						<div className="col-md-12">
							<h2 className="tile_head">Camps Near You</h2>
						</div>
					</div>
					 <Row>
					
						 
						{arr.map((camp) => 
							<>
							<Col xl={4} lg={4} md={4} sm={9} xs={10} className="main-styled-card">
							<div className="main_near">
								<div className="our_img">
									<div className="sport_g">
										<img className="lazyload" variant="top" src={camp.campImage.sourceUrl} alt="nearyou1"/>
									</div>
									<div className="text_head">
										<div className="our_contenct">
											<h4>{camp.campTitle}</h4>
											<div className="cont_rd">
												<p>{camp.campDesc}</p>
												<div className="read_more"><Link className="" to={"/camps/"+camp.campUrl}>Read More</Link></div>
											</div>
										</div>
									</div>
								</div>
							</div>
</Col>								
							</>							
						)}
							
					
					 </Row>
                   
                    
                </Container>
            </section>
            </>
        );
    }
}

export default HomeSection3;