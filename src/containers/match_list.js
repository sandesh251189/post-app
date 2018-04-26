import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getAllMatch} from '../actions/index'
class MatchList extends Component{
  constructor(props){
    super(props);

  }
renderList(){
  const team="Delhi"
  console.log(this.props.AllMatch)
   return this.props.AllMatch.map(match=>{
   return <li key={match.unique_id}>{match.team-2} S</li>
 })

}

  render(){
    if(!this.props.AllMatch){
      return(
        <h6>There is no data</h6>
      )
    }
    return(
      <div>
        <h6>This is match list</h6>
        <ul>
            {this.renderList()}
        </ul>

      </div>
    )
  }
}
function mapStateToProps(state){
    return {
      AllMatch:state.allMatch
    }
}
export default connect(mapStateToProps)(MatchList)
