import React, { Component  } from 'react';
import {  Image,ListGroup } from 'react-bootstrap'
import { Link,StaticQuery, graphql } from 'gatsby'
import icon1 from '../../images/icon1.png'
import PartnerMenu2 from './PartnerMenu2'
class Mmenu extends Component {
    
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
						query MyMQuery {
							wordpressMenusMenusItems(slug: {eq: "gatsby-header-menu"}) {
								id
								items {
									title
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
						(prop,i) => {	
							return (
								<>
								{(prop.child_items ? (
									<>
									{(prop.title == 'Resources') ? (<>
										<li className="menu-item-has-children " id="dmenut" ><Link activeClassName="active" id="navResources" className="nav-link dropdown-toggle" data-toggle="dropdown"
												href="javascript:;" aria-expanded="false">{prop.title}</Link>
											<ul className="dropdown" id="dmenu" >
												<li  key={i} ><Link className="dropdown-item"   to={"/resources"}>All</Link></li>
												<>
												{prop && prop.child_items && prop.child_items.map((child, i) => {
													return (
														<>
														{(child.title == 'Home' ? (<li  key={i} ><Link className="dropdown-item"   to={"/"}>{child.title}</Link></li>) : (<li  key={i} ><Link className="dropdown-item"   to={"/"+child.url.toLowerCase().replace("http://", '')}>{child.title}</Link></li>) )}
														</>
													)
												})}
												</>
											</ul>
										</li>
									</>) : (<>
										<li className={(prop.title == 'Contact') ? ("menu-item-has-children") : ("menu-item-has-children")}    id="d3menut" ><Link activeClassName="active" id="navCont" className="nav-link dropdown-toggle" data-toggle="dropdown"
												href="javascript:;" aria-expanded="false">{prop.title}</Link>
											<ul className="dropdown" id="d3menu">
												{prop && prop.child_items && prop.child_items.map((child, i) => {
													return (
														<>
														{(child.title == 'Home' ? (<li  key={i} ><Link className="dropdown-item"   to={"/"}>{child.title}</Link></li>) : (
														<>
														{(prop.title == 'Contact') ? (<><li  key={i} ><Link className="dropdown-item"   to={"/"+child.url.toLowerCase().replace("http://", '')}>{child.title}</Link></li></>) : (<><li  key={i} ><Link className="dropdown-item"   to={"/"+child.url.toLowerCase().replace("https://shop.spinhouse4u.com/", '')}>{child.title}</Link></li></>)}
														</>
														
														
														
														
														) )}
														</>
													)
												})}
											</ul>
										</li>
									</>) }
									</>
									
								
									
								
								) : 
								(
									<>
									<li className="menu-item-has-children" >
									{( prop.title == 'Home') ? (<> <Link to={"/"} >
                                        <span className="menu-text"> {prop.title}</span>
                                        
                                    </Link></>) : (<></>)}
									
                                   
                                </li>
									</>
									
								))}
								</>
							)
						})
				}
				</>
			)}
		  />
            </>
        );
    }
}

export default Mmenu;
