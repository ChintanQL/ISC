import React, { Component  } from 'react';
import {  Image,ListGroup,Navbar,Container,Modal } from 'react-bootstrap'
import { Link,StaticQuery, graphql } from 'gatsby'
import logo from '../../images/logonsc.png'
import cartimg from '../../images/cart.svg'
import navimage from '../../images/nav-image.png'
import icon1 from '../../images/icon1.png'
import CityMenu from './CityMenu'
import SocialMenu from './SocialMenu'
import Menubanner from './Menubanner'
import SportMenu from './SportMenu'
import PartnerMenu from './PartnerMenu'

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
			isOpen:false,
			iscookie:0
		};
		
		
		
		this.CheckModel = this.CheckModel.bind(this);
	    this.CheckCModel = this.CheckCModel.bind(this);
        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);
	    this.CmodalClose = this.CmodalClose.bind(this);
	    this.activateLasers = this.activateLasers.bind(this);
		
	}
    activateLasers(){
		document.body.classList.add("fix");
		var element = document.getElementsByClassName("off-canvas-wrapper");
		element.classList.add("open");
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
	 CmodalClose(){
        const cookies = new Cookies();
		this.setState({
				iscookie:0,
			})
		var expi = (new Date(Date.now()+ 86400*1000*5)).toUTCString();
		cookies.set('CovidBanner', "1", { domain: '.australiansportscamps.com.au' , path: '/' ,expires: expi, maxAge: 1000000});
    }
	CheckCModel(){
		const cookies = new Cookies();	
		if(cookies.get("CovidBanner") == undefined){
			this.setState({
				iscookie:1,
			})
		}
		else{
			if(cookies.get("CovidBanner") == 0){
				this.setState({
					iscookie:1,
				})
			}
		}
	}
	
	CheckModel(){
		
		const cookies = new Cookies();
		if(cookies.get("Popup") == undefined){
			console.log("here");
			var expi = (new Date(Date.now()+ 86400*1000)).toUTCString();
			cookies.set('Popup', "1", { domain: '.australiansportscamps.com.au' , path: '/' , maxAge: 1000000});
			//this.setState({
				//isOpen:true,
			//})
		}
		else{
			
		}
	}
	
	
      componentDidMount() {
	      
	       var url_action = window.location.href;
	       const cookies = new Cookies();
		if(cookies.get('LOGIN') == 1){
			var login_name = cookies.get('EMAIL');
		}
		else{
			var login_name = "";
		}
		 //var url = "https://shop.spinhouse4u.com/wp-json/newasc/v1/asc_page_view";
		//axios.post(url,{login_name:login_name,url:url_action}).then(e => {
			//console.log("done");
		//})
	      
        document.addEventListener('scroll', () => {
			const isTop = window.scrollY < 200;
			if (isTop !== this.state.isTop) {
				this.setState({ isTop })
			}
        });
		
		
		
		
		
		
		this.CheckModel()
		this.CheckCModel()
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
					<p className="sub_img" ><img  title="Australian Sports Camps" src="http://shop.spinhouse4u.com/wp-content/uploads/2016/05/australian-sports-camps-600x275.png" alt="Australian Sports Camps" /></p>
					<p className="sub_title" >Subscribe to Updates</p>
					<p className="sub_sub_title" >Sign up for free to be the first to hear about upcoming camps, special offers and discounts.</p>
					<iframe height="420" width="100%" frameBorder="0" src=" https://shop.spinhouse4u.com/gravity-subscribe/" title="description" />
					
                </Modal.Body>
            </Modal>
			<header className="main-header-area">
        <div className="our_head">
        	<div className="main-header header-sticky">
            <div className="container custom-area">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-xl-2 col-md-6 col-6 col-custom">
                        <div className="header-logo d-flex align-items-center">
                            <a href="index.html">
                                <img className="img-full" src={logo} alt="Header Logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 d-none d-lg-flex justify-content-center col-custom">
                        <nav className="main-nav d-none d-lg-flex">
                            <ul className="nav">
							
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
									{(prop.title == 'Resources') ? (<>
										<li className="nav-item dropdown uppercase d-none" id="dmenut" ><Link activeClassName="active" id="navResources" className="nav-link dropdown-toggle" data-toggle="dropdown"
												href="javascript:;" aria-expanded="false">{prop.title}</Link>
											<ul className="dropdown-submenu dropdown-hover" id="dmenu" >
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
										<li className={(prop.title == 'Contact') ? ("nav-item dropdown uppercase") : ("nav-item dropdown uppercase")}    id="d3menut" ><Link activeClassName="active" id="navCont" className="nav-link dropdown-toggle" data-toggle="dropdown"
												href="javascript:;" aria-expanded="false">{prop.title}</Link>
											<ul className="dropdown-submenu dropdown-hover" id="d3menu">
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
									<li>
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
							
							
							
                              
                            
                            
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 col-custom">
                        <div className="header-right-area main-nav">
                            <ul className="nav">
                            	<li>
                            		<div className="btn_book">
                            		
									<Link activeClassName="active"  to="/book-a-camp">book a camp</Link>
                            	</div>
                            	</li>
                                <li className="minicart-wrap">
                                    <a href="#" className="minicart-btn toolbar-btn">
                                        <img src={cartimg} alt="cart"/>
											{(cookies.get('CART') > 0) ? (<><span className="cart-item_count">{cookies.get('CART')}</span></>) : ("")}
                                       
                                    </a>
                               
                                </li>
                               
                                <li className="mobile-menu-btn d-lg-none">
                                    <a className="off-canvas-btn" onClick={activateLasers} href="#">
                                        <i className="fa fa-bars"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
        <aside className="off-canvas-wrapper" id="mobileMenu">
            <div className="off-canvas-overlay"></div>
            <div className="off-canvas-inner-content">
                <div className="btn-close-off-canvas">
                    <i className="fa fa-times"></i>
                </div>
                <div className="off-canvas-inner">
                  
                    
                    <div className="mobile-navigation">
                        
                        <nav>
                            <ul className="mobile-menu">
                                <li className="menu-item-has-children"><a href="#">Home</a>
                            
                                </li>
                               
                                <li className="menu-item-has-children "><a href="#">Camps</a>
                                    <ul className="dropdown">
                                        <li><a href="blog.html">Cricket</a></li>
                                        <li><a href="blog-list-right-sidebar.html">BasketBall</a></li>
                                        <li><a href="blog-list-fullwidth.html">Badminton</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children "><a href="#">Resources</a>
                                    <ul className="dropdown">
                                        <li><a href="frequently-questions.html">All</a></li>
                                        <li><a href="my-account.html">Blog</a></li>
                                        <li><a href="login-register.html">Videos</a></li>
                                        <li><a href="blog-grid.html">Guide</a></li>
                                        <li><a href="blog-grid-right-sidebar.html">Flyer</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children "><a href="#">Contact</a>
                                    <ul className="dropdown">
                                        <li><a href="contact-us.html">About Us</a></li>
                                        <li><a href="my-account.html">FAQ's</a></li>
                                        <li><a href="frequently-questions.html">How  To  Book</a></li>
                                        <li><a href="login.html">Contact Us</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                  
                   
                </div>
            </div>
        </aside>
       
      
    </header>
            </>
        );
    }
}

export default Header;
