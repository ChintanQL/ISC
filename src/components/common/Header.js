import React, { Component  } from 'react';
import {  Image,ListGroup,Navbar,Container,Modal } from 'react-bootstrap'
import { Link,StaticQuery, graphql } from 'gatsby'
import logo from '../../images/logo.png'
import navimage from '../../images/nav-image.png'
import icon1 from '../../images/icon1.png'
import cart from '../../images/cart.png'
import CityMenu from './CityMenu'
import SocialMenu from './SocialMenu'
import Menubanner from './Menubanner'
import SportMenu from './SportMenu'
import PartnerMenu from './PartnerMenu'
import "../../components/style.css"
import axios from 'axios';
import Cookies from 'universal-cookie';
import queryString from 'query-string'


class Header extends Component {
    constructor(props) {
		super(props);
		
		this.state = {
			isTop: true,
			cart: '',
			show:false,
			query_code:"",
			code:"",
			shown: "d-none",
			isOpen:false
		};
		
		
		
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
	
	CheckModel(){
		
		const cookies = new Cookies();
		if(cookies.get("Popup") == undefined){
			console.log("here");
			var expi = (new Date(Date.now()+ 86400*1000)).toUTCString();
			cookies.set('Popup', "1", { domain: '.australiansportscamps.com.au' , path: '/' , maxAge: 1000000});
			this.setState({
				isOpen:true,
			})
		}
		else{
			console.log("there");
		}
	}
	
	
      componentDidMount() {
        document.addEventListener('scroll', () => {
			const isTop = window.scrollY < 200;
			if (isTop !== this.state.isTop) {
				this.setState({ isTop })
			}
        });
		
		if(window.location.href.indexOf("/camps/") > -1){
			var element = document.getElementById("navbarDropdown");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/city/") > -1){
            var element = document.getElementById("navbarDropdown");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/book-a-camp/") > -1){
            var element = document.getElementById("navbarDropdown");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/school-holiday-programs/") > -1){
            var element = document.getElementById("navbarDropdown");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/partner-program/") > -1){
            var element = document.getElementById("navbarDropdown");
			element.classList.add("active");
        }
		
		if(window.location.href.indexOf("/blog") > -1){
            var element = document.getElementById("navResources");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/videos") > -1){
            var element = document.getElementById("navResources");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/guide") > -1){
            var element = document.getElementById("navResources");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/flyer") > -1){
            var element = document.getElementById("navResources");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/category/") > -1){
            var element = document.getElementById("navResources");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/tags") > -1){
            var element = document.getElementById("navResources");
			element.classList.add("active");
        }
		
		if(window.location.href.indexOf("/about-us") > -1){
            var element = document.getElementById("navCont");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/faq") > -1){
            var element = document.getElementById("navCont");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/how-to-book") > -1){
            var element = document.getElementById("navCont");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/contact-us") > -1){
            var element = document.getElementById("navCont");
			element.classList.add("active");
        }
		
		if(window.location.href.indexOf("/membership") > -1){
            var element = document.getElementById("navResources3");
			element.classList.add("active");
        }
		
		if(window.location.href.indexOf("/camp-pricing") > -1){
            var element = document.getElementById("navResources3");
			element.classList.add("active");
        }
		
		
		this.CheckModel()
		
      } 
	
	
	  
    render() {
		const cookies = new Cookies();
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
					<iframe height="420" width="100%" frameBorder="0" src=" https://shop.australiansportscamps.com.au/gravity-subscribe/" title="description" />
					
                </Modal.Body>
            </Modal>
    <header>
        <div className="social-header">
            <div className="container d-flex d-small-block justify-content-between">
                <div className="first-li align-items-center d-flex">
                    <ListGroup horizontal as="ul">
                        <SocialMenu />
                        <ListGroup.Item as="li" className="d-md-none d-none d-flex">
                            <a href="tel:1300914368" className="nav-link p-0" to="/">
                                <i className="fa fa-phone"></i>
                            </a>
                        </ListGroup.Item>
						<span className="httxt text-white text-uppercase">Australian sports camps ™</span>
                    </ListGroup>
                </div>
                <div className="second-li align-items-center d-sm-flex">
                    <ListGroup horizontal as="ul" className="d-md-flex d-none">
                        <ListGroup.Item as="li">
                        <a className="nav-link p-0" href="tel:1300914368"><i className="fa fa-phone"/></a><a className="nav-link p-0" href="tel:1300914368"> CALL US: 1300 914 368</a>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            |
                        </ListGroup.Item>
						
						<>{(cookies.get('LOGIN') == 1) ? (
							
							<li className="userdropdownbox" onClick={()=>{this.setState({show:!this.state.show})}} >
                            <i className="fa fa-user-circle"></i>{cookies.get('USER')}
                            <ul className="htdropdown" style={{ display: this.state.show ? "block" : "none" }}  >
                                <li><a href="https://shop.australiansportscamps.com.au/my-account/">Profile</a></li>
                                <li><a href={atob(cookies.get('L_URL'))}>logout</a></li>
                            </ul>
                       
                        </li>
							
							
						) : ( 
							<ListGroup.Item as="li">
								<Link to="https://shop.australiansportscamps.com.au/my-account/">LOGIN</Link>
									<span>OR</span>
								<Link to="https://shop.australiansportscamps.com.au/register/">REGISTER</Link>
							</ListGroup.Item>
						
						) }</>
						
						
						
                        
                    </ListGroup>

                    <ul className="d-md-none d-flex htmob-displaybx list-group list-group-horizontal">
                        
						{(cookies.get('LOGIN') == 1) ? (
						<li className="userdropdownbox" onClick={()=>{this.setState({show:!this.state.show})}} >
                            <i className="fa fa-user-circle"></i>{cookies.get('USER')}
                            <ul className="htdropdown" style={{ display: this.state.show ? "block" : "none" }}  >
                                <li><a href="https://shop.australiansportscamps.com.au/my-account/">Profile</a></li>
                                <li><a href={atob(cookies.get('L_URL'))}>logout</a></li>
                            </ul>
                       
                        </li>
						
						
						) : (
						<ListGroup.Item as="li">
                        <Link to="https://shop.australiansportscamps.com.au/my-account/">LOGIN</Link>
                        <span>OR</span>
                        <Link to="https://shop.australiansportscamps.com.au/register/">REGISTER</Link>
                        </ListGroup.Item>
						
						)}
						
						
						
						
                    </ul>
                </div>
            </div>
        </div>
        <div className={this.state.isTop ? 'main-header' : 'main-header sticky'}>
            <Container>
            <Navbar expand="xl" className="bg-none">
                <Navbar.Brand>
                    <Link aria-current="page" className="navbar-brand" to="/">
                        <Image src={logo} className="img-fluid" alt="" width="120px"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarSupportedContent" className="justify-content-end">
                <div className="justify-content-end" id="">
                        <ul className="navbar-nav ">
                            
							<StaticQuery
					query={graphql`
						query MyQuery {
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
									{(prop.title == 'Resources') ? (<div>
										<li className="nav-item dropdown uppercase"><Link activeClassName="active" id="navResources" className="nav-link dropdown-toggle" data-toggle="dropdown"
												to="/resources" aria-expanded="false">{prop.title}</Link>
											<ul className="dropdown-menu common-menu">
												{prop && prop.child_items && prop.child_items.map((child, i) => {
													return (
														<>
														{(child.title == 'Home' ? (<li  key={i} ><Link className="dropdown-item"   to={"/"}>{child.title}</Link></li>) : (<li  key={i} ><Link className="dropdown-item"   to={"/"+child.url.toLowerCase().replace("http://", '')}>{child.title}</Link></li>) )}
														</>
													)
												})}
											</ul>
										</li>
									</div>) : (<div>
										<li className="nav-item dropdown uppercase"><Link activeClassName="active" id="navCont" className="nav-link dropdown-toggle" data-toggle="dropdown"
												href="javascript:;" aria-expanded="false">{prop.title}</Link>
											<ul className="dropdown-menu common-menu">
												{prop && prop.child_items && prop.child_items.map((child, i) => {
													return (
														<>
														{(child.title == 'Home' ? (<li  key={i} ><Link className="dropdown-item"   to={"/"}>{child.title}</Link></li>) : (<li  key={i} ><Link className="dropdown-item"   to={"/"+child.url.toLowerCase().replace("http://", '')}>{child.title}</Link></li>) )}
														</>
													)
												})}
											</ul>
										</li>
									</div>) }
									</>
									
								
									
								
								) : 
								(
									<>
										{(prop.title == 'Camps' ? (
											<div>
												<li className="nav-item dropdown position-static"><Link activeClassName="active" className="nav-link dropdown-toggle main-menu-toggle"
														href="" onClick={e => e.preventDefault()} id="navbarDropdown" role="button"
														data-toggle="dropdown">Camps</Link>
													<ul className="dropdown-menu main-menu">
														<div className="w-100 d-flex main-box d-xl-block">
															<div className="first-box">
																
																	
																	
																		<SportMenu />
																	
																
																
																<div className="inner-menu">
																	<div className="mb-3 menu-heading">
																		<a className="" href="/school-holiday-programs">Cities</a>
																	</div>
																	<ListGroup as="ul">
																		<CityMenu />
																		
																	</ListGroup>
																</div>
																
																	<PartnerMenu />
																
															
															</div>
															<Menubanner />
														</div>
													</ul>
												</li>
											</div>
										) : 
										(
											<>{(prop.title == 'Shop' ? (
												<div>
													<li className="nav-item">
														<Link className="nav-link" activeClassName="active" to={"/product"}>{prop.title}</Link>
													</li>
												</div>
											
											) : (
												<>
													{(prop.title == 'Home' ? 
													(
														<div>
															<li className="nav-item">
															<Link className="nav-link" activeClassName="active" to={"/"}>{prop.title}</Link>
															</li>
														</div>
													) : (
													<>
													{(prop.title == 'Membership') ? (<div>
														<li className="nav-item dropdown uppercase"><a activeClassName="active" id="navResources3" className="nav-link dropdown-toggle" data-toggle="dropdown"
																href="javascript:;" aria-expanded="false">{prop.title}</a>
															<ul className="dropdown-menu common-menu">
																<li  ><Link className="dropdown-item"   to={"/membership"}>Membership</Link></li> 
																<li  ><Link className="dropdown-item"   to={"/camp-info/camp-pricing/"}>Camp Pricing</Link></li> 
															</ul>
														</li>
													</div>) : (
													<div>
															<li className="nav-item">
																<Link className="nav-link" activeClassName="active" to={"/"+prop.title.toLowerCase().replace(/\s+/g, '-')}>{prop.title}</Link>
															</li>
														</div>
													
													)}
													
													</>
													
													
													
														
													))}
												</>
											
												
											
											))}
											</>
											
											
											
										))}
									
									</>
									
								))}
								</>
							)
						})
				}
				</>
			)}
		  />
                            
							
							
                            
                            <div>
                                <li className="nav-item">
                                    <Link activeClassName="active" className="nav-link uppercase btn-sm btn-orange" to="/book-a-camp">book a camp</Link>
                                </li>
                            </div>

                            <div>
                                <li className="nav-item pr-0">
                                    <Link className="nav-link uppercase " to="https://shop.australiansportscamps.com.au/cart/"><Image src={cart} className="img-fluid" alt="" width=""/>
									<span className="badge badge-blue">{cookies.get('CART')}</span>
									</Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </div>
        </header>
            </>
        );
    }
}

export default Header;