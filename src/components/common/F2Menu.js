import React, { Component  } from 'react';
import {  Image,ListGroup } from 'react-bootstrap'
import { Link,StaticQuery, graphql } from 'gatsby'
import icon1 from '../../images/icon1.png'
class F2Menu extends Component {
    
    state = {
        isTop: true,
      };
    
      componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 200;
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
          }
        });
      } 
    render() {

        return (
            <>
            
			<StaticQuery
					query={graphql`
						query MyQuery7 {
							wordpressMenusMenusItems(slug: {eq: "gatsby-footer-menu-2"}) {
								id
								items {
									title
									slug
									child_items {
										title
										url
									}
									url
								}
							}
						}
					`}
			render={data => (
				<>
				{
					data &&
					data.wordpressMenusMenusItems &&
					data.wordpressMenusMenusItems.items &&
					data.wordpressMenusMenusItems.items.map(
						(innerprop,i) => {	
							return (
								<>
									<li>
									
									{(innerprop.title.replace(/\s+/g, '-').toLowerCase() == 'sponsors') ? 
									(<Link to={"/about-asc/sponsors-and-partners"} className="" dangerouslySetInnerHTML={{ __html: innerprop.title}} />) : 
									(
										<>{(innerprop.title.replace(/\s+/g, '-').toLowerCase() == 'work-with-us') ? (<Link to={"/asc-coaches-staff-enquiry"} className="" dangerouslySetInnerHTML={{ __html: innerprop.title}} />) : (
										<>{(innerprop.title.toLowerCase() == 'terms & conditions') ? (<Link to={"/'terms-conditions"} className="" dangerouslySetInnerHTML={{ __html: innerprop.title}} />) : (
										<>{(innerprop.title.replace(/\s+/g, '-').toLowerCase() == 'faq') ? (<Link to={"/camp-info/faqs"} className="" dangerouslySetInnerHTML={{ __html: innerprop.title}} />) : (
										
										<>{(innerprop.title.replace(/\s+/g, '-').toLowerCase() == 'forms-for-coaches-&-staff') ? (<Link to={"/asc-coaches-staff"
										} className="" dangerouslySetInnerHTML={{ __html: innerprop.title}} />) : (
										<>{(innerprop.title.replace(/\s+/g, '-').toLowerCase() == 'about-us') ? (<Link to={"/about-nsc"} className="" dangerouslySetInnerHTML={{ __html: innerprop.title}} />) : (
										
										<>{(innerprop.title.replace(/\s+/g, '-').toLowerCase() == 'contact-us') ? (<Link to={"/contact"
										} className="" dangerouslySetInnerHTML={{ __html: innerprop.title}} />) : (<Link to={"/"+innerprop.title.replace(/\s+/g, '-').toLowerCase()
										} className="" dangerouslySetInnerHTML={{ __html: innerprop.title}} />)}</>
										
										
										
										)
										
										}</>
										
										)}</>
										
										
										
										)}</>	
										)}</>
										)} </>
									)
									
									}
										
									
										
                                    </li>	
								</>
								)}
							)	
								
				}
				</>
			)}
		  />
            </>
        );
    }
}

export default F2Menu;
