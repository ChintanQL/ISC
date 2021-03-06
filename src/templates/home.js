import React, {Component} from 'react';
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import HomeSection1 from "../components/Home/HomeSection1"
import HomeSection2 from "../components/Home/HomeSection2"
import HomeSection3 from "../components/Home/HomeSection3"
import HomeSection4 from "../components/Home/HomeSection4"
import HomeSection5 from "../components/Home/HomeSection5"
import BatmanSection from "../components/common/BatmanSection"
import ModalSection from "../components/common/ModalSection"
import IncludedSection from "../components/common/IncludedSection"
import KidSection from "../components/common/KidSection"
import LazyLoad from 'react-lazyload';
import { Helmet } from "react-helmet"
import Cookies from 'universal-cookie';
class HomePage extends Component {
	constructor(props){
		super(props)
		this.create_UUID = this.create_UUID.bind(this);	
	}	
	
	create_UUID(){
    		var dt = new Date().getTime();
    		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        		var r = (dt + Math.random()*16)%16 | 0;
        		dt = Math.floor(dt/16);
        		return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    		});
    		return uuid;
	}
	
	 componentDidMount(){
	 const cookies = new Cookies();
		var aid =  cookies.get('aid');
		 if(aid == undefined){
			 var code = this.create_UUID();
		 	cookies.set("aid",code,{ domain: '.australiansportscamps.com.au' , path: '/' });
		 }
	 }
	
	render() {
		console.log(this.props.pageContext.HomeData.data.page);
		return (
			<Layout>
            <>
			<Helmet>
				<title>National Sport Camps | Sports Camps India | Camps India</title>
				
				
					<meta name="title" content={this.props.pageContext.HomeData.data.page.seo.title}></meta>
					<meta name="description" content={this.props.pageContext.HomeData.data.page.seo.metaDesc}></meta>
					<meta name="keywords" content={this.props.pageContext.HomeData.data.page.seo.metaKeywords}></meta>
					<meta property="og:type" content="website"></meta>
					<meta property="og:title" content={this.props.pageContext.HomeData.data.page.seo.opengraphTitle}></meta>
					<meta property="og:description" content={this.props.pageContext.HomeData.data.page.seo.opengraphDescription}></meta>
					<meta property="twitter:card" content="summary_large_image"></meta>
					<meta property="twitter:title" content={this.props.pageContext.HomeData.data.page.seo.twitterTitle}></meta>
					<meta property="twitter:description" content={this.props.pageContext.HomeData.data.page.seo.twitterDescription}></meta>
					
					
			</Helmet>
			
			
			<HomeSection5/>
				
				<LazyLoad height={200} >
				{(this.props.pageContext.HomeData.data.page.home) ? (<HomeSection1 data = {this.props.pageContext.HomeData.data.page.home.homeSlider} />) : ("")}
				</LazyLoad>
				 
				<LazyLoad height={200} >
				{(this.props.pageContext.HomeData.data.page.home) ? (<HomeSection2 data = {this.props.pageContext.HomeData.data.page.home.asSeenOn} />) : ("")}
				</LazyLoad>
				
				<LazyLoad height={200} >
				{(this.props.pageContext.HomeData.data.page.home) ? (<HomeSection3 data = {this.props.pageContext.HomeData.data.page.home.campsData} />) : ("")}
				</LazyLoad>
				
				<LazyLoad height={200} >
				{(this.props.pageContext.HomeData.data.page.home) ? (<BatmanSection data = {this.props.pageContext.HomeData.data.page.home.schoolHolidayProgram} />) : ("")}
				</LazyLoad>
				
				<LazyLoad height={200} >
				{(this.props.pageContext.HomeData.data.page.home) ? (<IncludedSection data = {this.props.pageContext.HomeData.data.page.home.panels[6]} />) : ("")}
				</LazyLoad>
				<LazyLoad height={200} >
				<Footer/>
				</LazyLoad>
			</>
			</Layout>
		)
	}
}
export default HomePage
