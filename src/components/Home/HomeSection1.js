import React, { Component,useState } from 'react';
import { Container,Image,Row,Col,Button,Form } from 'react-bootstrap';
import Slider from "react-slick";
import Cookies from 'universal-cookie';
import Select from 'react-select'
import SearchLocationInput from './SearchLocationInput'
import credentials from './credentials'
import axios from 'axios';
import $ from "jquery";
//https://github.com/sethcwhiting/react-native-gravityform
//https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      </div>
  );
}




function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick} >
    </div>
  );
}
class HomeSection1 extends Component {
	constructor(props){
		super(props)
		this.state = {
			multiValue: [],
			selectOptions : [],
			id: "",
			name: ''
		}
		this.handleMultiChange = this.handleMultiChange.bind(this);
		this.Campred = this.Campred.bind(this);	
  
	}
	
	async getOptions(){
    const res = await axios.get('https://shop.australiansportscamps.com.au/wp-json/newasc/v1/all-cat')
    const data = res.data.ResponseData
	
    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.value

    }))

    this.setState({selectOptions: options})

  }

	handleChange(e){
		this.setState({id:e.value, name:e.label})
	}
  
	Campred(){
		const cookies = new Cookies();
		var lat =  cookies.get('lat');
		var lng =  cookies.get('lng');
		var loc =  cookies.get('loc');
		var locationName =  cookies.get('locationName');
		var multu =  this.state.multiValue;
		var str = '';
		console.log(this.state.multiValue);
		$.each(multu, function (i,val) {
			str +=val.value+",";
		});
		var URL = "https://shop.australiansportscamps.com.au/location/?q="+str+"&l="+loc+"&f="+locationName+"&lat="+lat+"&lng="+lng;
		window.location = URL;
		
	}

  componentDidMount(){
      this.getOptions()
  }
	
	handleMultiChange(option) {
    this.setState(state => {
      return {
        multiValue: option
      };
    });
  }
	
    render() {
		console.log(this.props.data);
        const settings1 = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
		  
		
		  
        return (
            <>
            
            <section className="Home-section-1 main-padding-header">
                <Slider {...settings1}>
                    {this.props.data.map((str) => 
						<div className="slider-data">
							<Image src={str.sliderImage.sourceUrl} className="img-fluid d-lg-inline d-none" />
							<div className="slider-inner-data">
							<Container>
								<Row className="justify-content-center text-center">
									<Col xl={12} lg={12} md={12}>
										<h3 className="font-bold text-white">{str.title}</h3>
										<div className="justify-content-center d-flex" dangerouslySetInnerHTML={{ __html: str.content}} />
											
										
									</Col>
								</Row>
							</Container>
						</div>
                    </div>
					)}
                    
                    
                
                    
                </Slider>
				
				
				<div className="bg-ef">
                  <Container>
                    <div className="pos-absolute-form">
                        <Form className="align-items-center justify-content-center">
                             
							  <div className="home-form">
                                <div className="first-control">
                                  <SearchLocationInput/>
                                </div>
                                <div className="second-control">
                                  <Select placeholder="Select Camps" value={this.state.multiValue} options={this.state.selectOptions}  isMulti onChange={this.handleMultiChange} />
								  
								  
                                </div>
                                <div className="third-control">
                                  <Button type="button" onClick={this.Campred} className="uppercase btn-sm btn-orange mb-0">
                                      Find Camps
                                  </Button>
                                </div>
                              </div>
                        </Form>
                    </div>
                  </Container>
                </div>
				
            </section>
            </>
        );
    }
}

export default HomeSection1;
