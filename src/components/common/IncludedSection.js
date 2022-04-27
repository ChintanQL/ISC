import React, { Component } from 'react';
import { Container,Row,Col,Card,Image,Button } from 'react-bootstrap';
import { Link,StaticQuery, graphql } from 'gatsby'
class IncludedSection extends Component {
    render() {
        return (
            <>
            
           <section class="section05 pt pb">
                <Container>
                    <div class="row">
				<div class="col-md-12">
					<h2 class="tile_head">What Differentiates Us From The Rest</h2>
				</div>
			</div>
                    <div class="row justify-content-center">
					
						{this.props.data.inclusion.map((inc) => 
							<div class="col-md-6">
								<div class="mainimg">
									<div class="img_icon">
										<img src={inc.image.sourceUrl} />
									</div>
									<div class="our_thd">
										<h5>{inc.title}</h5>
										<p dangerouslySetInnerHTML={{ __html: inc.desc}} />
									</div>
								</div>
							</div>
							
							
						)}    
					
                        
                        
                  </div>

                   
                </Container>
            </section>

            </>
        );
    }
}

export default IncludedSection;
