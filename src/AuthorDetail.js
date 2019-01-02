import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import authors from "./data";
import TableRow from "./TableRow";
class AuthorDetail extends Component {
  render() {
    const author = this.props.author;
    const authorBook = this.props.author.books.map(book => (<TableRow book = {book} />
      ));
    
    return (
        <div className="author col-xs-10">
        <div>
            <h3>{author.first_name}</h3>
            <img src={author.imageUrl} className="img-thumbnail"/>
        </div>
        <table className='mt-3 table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Authors</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody>
                      {authorBook}
                   
            </tbody>
         </table>
       </div>
    );
  }
}

export default AuthorDetail;
