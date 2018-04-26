import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllMatch} from '../actions/index'
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.getAllMatchData=this.getAllMatchData.bind(this);
  }
  getAllMatchData(){

   this.props.getAllMatch();
  }

  render(){
    return(
      <div>

        <button onClick={this.getAllMatchData}>Submit</button>

      </div>
    )
  }
}
function mapDispachToProps(dispach){
  return bindActionCreators({getAllMatch},dispach)
}
export default connect(null,mapDispachToProps)(SearchBar)
