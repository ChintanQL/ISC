import React, { Component  } from 'react';
import {Container,Form,Row,Col,Button} from 'react-bootstrap'
import $ from "jquery";

class ContactusSection3 extends Component {
	constructor(props) {
      
        this.resizeIFrameToFitContent = this.resizeIFrameToFitContent.bind(this); 
    }
	
	resizeIFrameToFitContent( ) {
		var iFrame = document.getElementById( 'frame' );
		//iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
		iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
	}
	hideSpinner = () => {
		
	  };
	
    render() {      
        return (
            <>
            <section className="Contactus-Section-3">
            <div className="container">
                <iframe id="frame"  width="100%" onLoad={this.resizeIFrameToFitContent} frameBorder="0" src="https://shop.australiansportscamps.com.au/gravity-contact-us/" title="description" /> 
            </div>
            </section>
            </>
        );
    }
}

export default ContactusSection3;