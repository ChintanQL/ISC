import React, { Component,useState } from 'react';
import { Container,Image,Row,Col,Button,Form } from 'react-bootstrap';
import Slider from "react-slick";
import Cookies from 'universal-cookie';
import Select from 'react-select'
import SearchLocationInput from './SearchLocationInput'
import axios from 'axios';
import $ from "jquery";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';



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
			selectOptions : [
{ value: 'basketball', label: 'Basketball' },
{ value: 'badminton', label: 'Badminton' },
{ value: 'cricket', label: 'Cricket' },

],
			id: "",
			name: '',
			shown: 'd-none',
			selectedOption: "",
			selectedOption2: "",
		}
		this.handleMultiChange = this.handleMultiChange.bind(this);
		this.Campred = this.Campred.bind(this);	
		 
	}
	
	async getOptions(){
    const res = await axios.get('https://shop.nationalsportscamps.in/wp-json/newasc/v1/all-cat')
    const data = res.data.ResponseData
	
    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.value

    }))

   

  }

	handleChange = selectedOption => {
    this.setState({ selectedOption : selectedOption.value });
    this.setState({ selectedOption2 : selectedOption });
    console.log(`Option selected:`, selectedOption);
    console.log(`Option selected:`, selectedOption.value);
  };
  
	Campred(){
		this.setState({shown: "d-none"});
		const cookies = new Cookies();
		var lat =  cookies.get('lat');
		var lng =  cookies.get('lng');
		var loc =  cookies.get('loc');
		var locationName =  cookies.get('locationName');
		//var multu =  this.state.multiValue;
		var str = this.state.selectedOption;
		//console.log(this.state.multiValue);
		//$.each(multu, function (i,val) {
			//str +=val.value+",";
		//});
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
		
		var URL = "https://shop.nationalsportscamps.in/location/?q="+str+"&l="+loc+"&f="+locationName+"&lat="+lat+"&lng="+lng;
		//window.location.href = URL;
		window.open(URL, "_blank");
		
		
		//window.location.replace(URL);
		
	}

  componentDidMount(){
		//this.getOptions()
		const cookies = new Cookies();	
		cookies.set('lat', "", { path: '/' });
		cookies.set('lng', "", { path: '/' });
		cookies.set('loc', "", { path: '/' });
		cookies.set('locationName', "", { path: '/' });
		
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
            prevArrow: <SamplePrevArrow />,
			responsive: [
             {
               breakpoint: 800,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 0,
				 autoplay: false,
				focusOnSelect: false,
				accessibility: false,
				draggable: false,
				swipe: false,
				swipeToSlide: false,
				touchMove: false,
				  
               }
             },{
               breakpoint: 320,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 0,
				 autoplay: false,
				 focusOnSelect: false,
				accessibility: false,
				draggable: false,
				swipe: false,
				swipeToSlide: false,
				touchMove: false,
				  
               }
             }
           ]
          };
		  
		const customStyles = {
		  option: (provided, state) => ({
			...provided,
			paddingTop: 0,
			paddingBottom: 0,
			marginTop: 0,
			marginBottom: 0,
		  })
		};
		  
        return (
            <>
            <section className="section01 pt pb" id="section01">
		<div className="container">
			<div className="row align-items-end">
				<div className="col-md-6">
					<div className="main_head">
						<h1>World's Favourite Sports Holiday Camps for Kids</h1>
						<div className="list_tab">
							<ul>
								<li>Expert coaches for training kids of all ages</li>
								<li>Best for beginner to medium players</li>
								<li>Have fun with your friends playing the sport<br/> that you love</li>
								<li>Safe environment for kids to learn sports</li>
								<li>Top of the line equipment for a wide range<br/> of games</li>
							</ul>
						</div>
					</div>

				</div>
				<div className="col-md-6">
					<div className="form_site">
						<div className="form_wrap">
							  <form className="row g-3">
								  <div className="col-md-12">
								   
								    <SearchLocationInput/>
								  </div>
								  <div className="col-md-12 mt3">
								    <Select placeholder="Select Sports" placeholderButtonLabel="Select Sports"
        value={this.state.selectedOption2}
        onChange={this.handleChange}
        options={this.state.selectOptions}
		styles={customStyles}
      />
								  </div>
								  
								  
								  <div className="col-12 text-center">
								    <button type="button" onClick={this.Campred} className="btn btn-primary camp_find">Find Camps</button>
								  </div>
								  <p  className={"text-danger er-msg "+this.state.shown} >Please select a Location or Sport.</p>
								</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
           
            </>
        );
    }
}

export default HomeSection1;
