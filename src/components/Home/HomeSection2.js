import React, { Component } from 'react';
import { Container,Image } from 'react-bootstrap';
import { Link } from 'gatsby'
import Slider from "react-slick";
import icon1 from '../../images/slide-icon-1.png'
import icon2 from '../../images/slide-icon-2.png'
import icon3 from '../../images/slide-icon-3.png'
import icon4 from '../../images/slide-icon-4.png'
import icon5 from '../../images/slide-icon-5.png'
import icon6 from '../../images/slide-icon-6.png'

class HomeSection2 extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay:true,
            autoplaySpeed:2000,
            slidesToShow: 4,
            slidesToScroll: 1, 
            responsive: [
             {
               breakpoint: 800,
               settings: {
                 slidesToShow: 5,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 2
               }
             }
           ]
          };
		  
        return (
            <>
            <section className="section02 pt pb">
                <Container>
				<div className="row">
					<div className="col-md-12">
						<h2 className="tile_head">As Seen On</h2>
					</div>
				</div>
				<div className="row">
                
					{this.props.data.map((str) => 
						
						<div className="col-md-2">
							<div className="seen_1">
							<Link className="slider-data" to={str.url}><Image src={str.image.sourceUrl} className="img-fluid lazyload" /></Link>
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

export default HomeSection2;
