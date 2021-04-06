import React, { Component  } from 'react';
import {  Container,Col,Form,Row,Button,Modal } from 'react-bootstrap'
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
			shown: 'd-none',
			isOpen:false,
		}
		this.handleMultiChange = this.handleMultiChange.bind(this);
		this.Campred = this.Campred.bind(this);
		this.CheckModel = this.CheckModel.bind(this);
        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);
	}
	
	
	
	modalOpen(){
        this.setState({
            isOpen:true,
        })
    }
    modalClose(){
        this.setState({
            isOpen:false,
        })
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
	
	CheckModel(){
		
		const cookies = new Cookies();
		if(cookies.get("Popup") === undefined){
			
			var expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
			cookies.set('Popup', "1", { domain: '.australiansportscamps.com.au' , path: '/' , expires : expires});
			this.setState({
				isOpen:true,
			})
		}
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
		this.CheckModel()
		
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
			 <Modal show={this.state.isOpen} onHide={this.modalClose} size="lg" className="video-modal"
            aria-labelledby="contained-modal-title-vcenter"
            centered >
                <Modal.Body className="p-0">
                    <button type="button" onClick={this.modalClose} class="close">
                        <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                    </button>
					<p className="sub_img" ><img  title="Australian Sports Camps" src="http://shop.australiansportscamps.com.au/wp-content/uploads/2016/05/australian-sports-camps-600x275.png" alt="Australian Sports Camps" /></p>
					<p className="sub_title" >Subscribe to Updates</p>
					<p className="sub_sub_title" >Sign up for free to be the first to hear about upcoming camps, special offers and discounts.</p>
					<iframe height="430" width="100%" frameBorder="0" src=" https://shop.australiansportscamps.com.au/gravity-subscribe/" title="description" />
					
                </Modal.Body>
            </Modal>
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