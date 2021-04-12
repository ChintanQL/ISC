import React, { Component  } from 'react';
import {Container,Form,Row,Col,Button} from 'react-bootstrap'
import $ from "jquery";

class ContactusSection3 extends Component {
	
	componentDidMount() {
		$("#frame").load(function() {
			$(this).height( $(this).contents().find("body").height() );
		});
	}
	
	
    render() {      
        return (
            <>
            <section className="Contactus-Section-3">
            <div className="container">
                <iframe id="frame"  width="100%" frameBorder="0" src="https://shop.australiansportscamps.com.au/gravity-contact-us/" title="description" /> 
            </div>
            </section>
            </>
        );
    }
}

export default ContactusSection3;