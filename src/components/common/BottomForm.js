import React, { Component  } from 'react';
import {  Container,Col,Form,Row,Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import Select from 'react-select'
import Cookies from 'universal-cookie';
import axios from 'axios';
import SearchLocationInput from '../Home/SearchLocationInput'
import $ from "jquery";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

class BottomForm extends Component {
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
		var flg = 0;
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
		window.location.href = URL;
		
	}
	
	

	handleChange(e){
		this.setState({id:e.value, name:e.label})
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
        return (
            <>
            <section className="BottomForm">
                <Container>
                <Form>
                    <Row className="align-items-center justify-content-center">
                        <Col xs="12" xl={2} lg={3} md={12} className="lg-mb-2">
                            <Form.Label className="font-20 font-bold color-3b mb-0"> 
                                FIND A CAMP
                            </Form.Label>
                        </Col>
                        <Col xs="12" xl={3} lg={3} md={4} sm="4" className="sm-mb-2">
                           <SearchLocationInput/>
                        </Col>
                        <Col xs="12" xl={3} lg={3} md={4} sm="4" className="sm-mb-2 seccont">
                           
							<ReactMultiSelectCheckboxes placeholder="Select Sports" placeholderButtonLabel="Select Sports" value={this.state.multiValue}  options={this.state.selectOptions} onChange={this.handleMultiChange} />  
                        </Col>
                        <Col  xs="12" xl={2} lg={2} md={4} sm="4">
                            <Button type="button" onClick={this.Campred} className="uppercase btn-sm btn-orange mb-0">
                                Find Camps
                            </Button>
                           
                        </Col>
                    </Row>
					<p  className={"text-danger er-msg "+this.state.shown} >Please select a Location or Sport.</p>
                    </Form>
                </Container>
            </section>
            </>
        );
    }
}

export default BottomForm;