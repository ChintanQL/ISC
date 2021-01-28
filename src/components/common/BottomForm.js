import React, { Component  } from 'react';
import {  Container,Col,Form,Row,Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import Select from 'react-select'
import Cookies from 'universal-cookie';
import axios from 'axios';
import SearchLocationInput from '../Home/SearchLocationInput'
import $ from "jquery";
class BottomForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			multiValue: [],
			selectOptions : [],
			id: "",
			name: ''
		}
		this.handleMultiChange = this.handleMultiChange.bind(this);
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
		var URL = "https://shop.australiansportscamps.com.au/location/?q="+str+"&l="+loc+"&f="+locationName+"&lat="+lat+"&lng="+lng;
		window.location = URL;
		
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
                        <Col xs="12" xl={3} lg={3} md={4} sm="4" className="sm-mb-2">
                            <Select placeholder="Select Camps" value={this.state.multiValue} options={this.state.selectOptions}  isMulti onChange={this.handleMultiChange} />
                        </Col>
                        <Col  xs="12" xl={2} lg={2} md={4} sm="4">
                            <Button type="button" onClick={this.Campred} className="uppercase btn-sm btn-orange mb-0">
                                Find Camps
                            </Button>
                           
                        </Col>
                    </Row>
                    </Form>
                </Container>
            </section>
            </>
        );
    }
}

export default BottomForm;