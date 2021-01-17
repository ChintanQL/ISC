import React, { Component  } from 'react';
import {  Container,Col,Form,Row,Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Select from 'react-select'
import axios from 'axios';
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
		const res = await axios.get('https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/all-cat')
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
                            <GooglePlacesAutocomplete
									apiKey="AIzaSyA-w1yIFUC5apNzpwsAGIxmhPQ2enVHfTE"
									  selectProps={{
											placeholder: 'Enter Suburb / Postcode',
										  }}
									autocompletionRequest={{
									  types: ['(regions)'],
									  componentRestrictions: {country: 'au'}
									  
									}}
									/>
                        </Col>
                        <Col xs="12" xl={3} lg={3} md={4} sm="4" className="sm-mb-2">
                            <Select placeholder="Select Camps" value={this.state.multiValue} options={this.state.selectOptions}  isMulti onChange={this.handleMultiChange} />
                        </Col>
                        <Col  xs="12" xl={2} lg={2} md={4} sm="4">
                            <Button type="button" className="uppercase btn-sm btn-orange mb-0">
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