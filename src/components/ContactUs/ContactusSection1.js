import React, { Component  } from 'react';
import {Container,Breadcrumb} from 'react-bootstrap'
import { Link } from 'gatsby'

class ContactusSection1 extends Component {
 
    render() {      
        return (
            <>
           
			<section className="breadcumb">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="breadcumb_wrpaeer">
						<Breadcrumb>
                        <Breadcrumb.Item className="">
                            <Link className="nav-link p-0" to="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active href=""className="">Contact us</Breadcrumb.Item>
                    </Breadcrumb>
						<h2 className="tile_head">Contact Us</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
            </>
        );
    }
}

export default ContactusSection1;