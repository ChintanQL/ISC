import React, { Component  } from 'react';
import {  Image,ListGroup } from 'react-bootstrap'
import { Link,StaticQuery, graphql } from 'gatsby'
import icon1 from '../../images/icon1.png'
import SportMenu2 from './SportMenu2'
class SportMenu extends Component {
    
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
			<div className="inner-menu">
				<div className="mb-3 menu-heading">
					
					<a className="" href="/sport-program">ASC Sports</a>
				</div>
            <ListGroup as="ul">
			<StaticQuery
					query={graphql`
						query MyQuery34 {
							wordpressMenusMenusItems(slug: {eq: "gatsby-menu-sports"}) {
								id
								items {
									title
									slug
									attr_title
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
								{((data.wordpressMenusMenusItems.items.length/2) > i ) ? (<ListGroup.Item as="li">
									<Image src={innerprop.attr_title} fluid className="icon" /><Link to={"/camps/"+innerprop.slug}  dangerouslySetInnerHTML={{ __html: innerprop.title}} className="" />
									</ListGroup.Item>) : ("") }
										
								</>
								)}
							)	
								
				}
				</>
			)}
		  />
		  </ListGroup>
<div className="mb-3 menu-heading">
					
					<a className="" href="/camps/asc-explorers">Sport Explorers (For 3-5 year olds)</a>
				</div>
		  </div>
		  <SportMenu2/>
            </>
        );
    }
}

export default SportMenu;
