import React, { Component } from "react";
import authors from "./data";

class TableRow extends Component {
    render() {
      const book = this.props.book;
       
      return (
          
        <tr>
        <td>{book.title}</td>
     
        
    
        <td>{}</td>
        <td>
            <button className="btn" style={{backgroundColor: book.color}}/>
        </td>
      </tr>
     
      );
    }
  }
  
  export default TableRow;
  