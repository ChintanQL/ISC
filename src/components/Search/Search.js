import React, { Component } from "react"
import { Index } from "elasticlunr"
 import { Link, StaticQuery, graphql } from 'gatsby'
 import {Image,ListGroup,Form,InputGroup,FormControl,Button,Tab,Nav} from 'react-bootstrap'
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
		<Form.Group controlId="" className="mb-0">
			<InputGroup className="mb-3">
				<FormControl value={this.state.query} onChange={this.search} className="master border-right-0"
				placeholder="Search in blog" />
				<InputGroup.Append className="border-left-0">
					<InputGroup.Text id="basic-addon2">
						<Button className="btn-orange btn"><FaSearch/></Button>
					</InputGroup.Text>
				</InputGroup.Append>
			</InputGroup>
		</Form.Group>
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