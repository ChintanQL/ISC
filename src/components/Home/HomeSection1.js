import React, { Component,useState } from 'react';
import { Container,Image,Row,Col,Button,Form } from 'react-bootstrap';
import Slider from "react-slick";
import Cookies from 'universal-cookie';
import Select from 'react-select'
import SearchLocationInput from './SearchLocationInput'
import axios from 'axios';
import $ from "jquery";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

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
			name: '',
			shown: 'd-none'
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
		this.setState({shown: "d-none"});
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
		var flg = 0;
		console.log("L"+loc);
		console.log("S"+str);
		if(loc == undefined){
			console.log("if");
			if(str == ''){
				flg = 1;
				console.log("if if");
			}
			else{
				flg = 0;
				console.log("if else");
			}	
		}
		else{
			console.log("else");
			if(loc == '' && str == ''){
					flg = 1;
					console.log("else if");
			}
			else{
				console.log("else else");
			}
		}	
			console.log(flg);
		if(flg == 1){
			this.setState({shown: "d-block"});
			setTimeout(
				function() {
					this.setState({shown: "d-none"});
				}
			.bind(this),
				2000
			);
			return false;
		}
		
		var URL = "https://shop.australiansportscamps.com.au/location/?q="+str+"&l="+loc+"&f="+locationName+"&lat="+lat+"&lng="+lng;
		//window.location.href = URL;
		//window.location.replace(URL);
		
	}

  componentDidMount(){
		this.getOptions()
		const cookies = new Cookies();
		cookies.remove('lat', { path: '/' });
		cookies.remove('lng', { path: '/' });
		cookies.remove('loc', { path: '/' });
		cookies.remove('locationName', { path: '/' });	
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
            autoplaySpeed: 7000,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
		  
		
		  
        return (
            <>
            
            <section className="Home-section-1 main-padding-header Home_section_new">
                <Slider {...settings1}>
                    {this.props.data.map((str) => 
						<div className="slider-data">
							<Image src={str.sliderImage.sourceUrl} className="img-fluid d-lg-inline d-none" />
							<div className="slider-inner-data">
							<Container>
								<Row className="">
									<Col xl={7} lg={7} md={12} sm={12}>
										<h3 className="font-bold text-white">{str.title}</h3>
										<div className="text-left" dangerouslySetInnerHTML={{ __html: str.content}} />
											
										
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
                                 
								  
								<ReactMultiSelectCheckboxes placeholder="Select Sports" value={this.state.multiValue}  options={this.state.selectOptions} onChange={this.handleMultiChange} />  
                                </div>
								
                                <div className="third-control">
                                  <Button type="button" onClick={this.Campred} className="uppercase btn-sm btn-orange mb-0">
                                      Find Camps
                                  </Button>
                                </div>
                              </div>
							  <p  className={"text-danger er-msg "+this.state.shown} >please select atleast one parameter.</p>
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
