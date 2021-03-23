import React, {Component} from 'react';
import Layout from "../components/layout"
import ContactusSection1 from "../components/ContactUs/ContactusSection1"
import ContactusSection2 from "../components/ContactUs/ContactusSection2"
import ContactusSection3 from "../components/ContactUs/ContactusSection3"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import { Helmet } from "react-helmet"
class ConatctUs extends Component {
  


  
  render() {
	


      return (
          <Layout>
            <>
			<Helmet>
				<title>Contact Us - Australian Sports Camps</title>
			</Helmet>
			
			
              <ContactusSection1/>
              <ContactusSection2/>
              <ContactusSection3/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default ConatctUs
