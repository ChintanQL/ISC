import React, { Component } from "react"
import { Index } from "elasticlunr"
 import { Link, StaticQuery, graphql } from 'gatsby'
 import {Image,ListGroup,Form,InputGroup,FormControl,Button,Tab,Nav} from 'react-bootstrap'
 import { FaSearch } from "react-icons/fa";
// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
	
  }
 
  render() {
    return (
      <>
		<div className="mb-0 form-group"><div className="mb-3 input-group"><input value={this.state.query} onChange={this.search} placeholder="Search in blog" id="" className="master border-right-0 form-control"><div className="border-left-0 input-group-append"><span className="input-group-text" id="basic-addon2"><button type="button" className="btn-orange btn btn btn-primary"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></button></span></div></div></div>
        <ul className="lisearch" >
          {this.state.results.map(page => (
            <li key={page.node.id}>
              <Link to={"/blog/" + page.node.url)} dangerouslySetInnerHTML={{ __html: page.node.title}} ></Link>
              
            </li>
          ))}
        </ul>
      </>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)
 
  search = evt => {
    const query = evt.target.value;
	this.setState({query: query});
	
	let filtered=this.props.searchIndex.filter((item)=>{
      return item.node.title.toLowerCase().indexOf(query.toLowerCase()) > -1
    });
    if (query === "") {
      filtered = [];
    }
    this.setState({
      filtered
    })
	
	console.log(filtered);
	this.setState({results: filtered});

  }
}