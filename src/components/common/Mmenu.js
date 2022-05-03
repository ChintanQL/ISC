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
		
		
		
		Array.from(document.getElementsByClassName('mm')).forEach((button) => {
			 button.addEventListener('click', (e)=>{
				   e.preventDefault();
				   console.log(e.target.getAttribute('data-toggle'));
				   var elems = document.querySelectorAll(".drr");
					[].forEach.call(elems, function(el) {
						el.classList.add("d-none");
					});
				  var idd = e.target.getAttribute('data-toggle');
				 const check = document.querySelector("."+idd);
				 
				   if(check.classList.contains('d-none')){
					   var elemss = document.querySelectorAll("."+idd);
					[].forEach.call(elemss, function(el) {
						el.classList.remove("d-none");
					});
				   }
				   else{
				   var elemss = document.querySelectorAll("."+idd);
					[].forEach.call(elemss, function(el) {
						el.classList.add("d-none");
					});
				   }
				  
			 })
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
										<li className="menu-item-has-children d-none" id="dmenut" >
										<span class="menu-expand"><i></i></span>
										<Link className="mm" dataid={prop.id} data-toggle={"tab"+i}
												href="javascript:;" aria-expanded="false">{prop.title}</Link>
											<ul className={"dropdown drr d-none tab"+i} id="dmenu" >
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
										<li className={(prop.title == 'Contact') ? ("menu-item-has-children") : ("menu-item-has-children")}    id="d3menut" >
										<span class="menu-expand"><i></i></span>
										<Link className="mm"  dataid={prop.id}  data-toggle={"tab"+i}
												href="javascript:;" aria-expanded="false">{prop.title}</Link>
											<ul className={"dropdown drr d-none tab"+i} id="d3menu">
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
