import React, { Component } from "react";

// Data
import authors from "./data";
import SearchBar from "./SearchBar"
// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor : {},
      filterAuthor : authors
    }
      this.filterAuthor =this.filterAuthor.bind(this);
      this.selectAuthor = this.selectAuthor.bind(this);
      this.resets = this.resets.bind(this);

}

  selectAuthor(author){
    this.setState({currentAuthor: author})
  }
  exist(author){
    if(author.first_name){
     return <AuthorDetail author = {author} />
    }else{
    return <AuthorsList selectAuthor = {this.selectAuthor} authors={this.state.filterAuthor} filterAuthor = {this.filterAuthor} />
    }
  }
  resets(){
    this.setState({currentAuthor: {}});
  }
  filterAuthor(query){
    query = query.toLowerCase()
    let filterAuthor = authors.filter(author => {
      return `${author.first_name} ${author.last_name}`.toLowerCase().includes(query);
    });
    this.setState({filterAuthor :filterAuthor})
  }
  render() {
 
    return (
      <div id="app" className="container-fluid">
        <div className="row">
       
          <div className="col-2">
            <Sidebar resets={this.resets} />
          </div>
          
          <div className="content col-10">
           
                {this.exist(this.state.currentAuthor)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
