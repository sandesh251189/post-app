import React,{Component} from 'react';
import _ from 'lodash'
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class IndexPost extends Component{
  componentDidMount(){
    this.props.fetchPosts();
  }
  renderPosts(){
    console.log(this.props.posts)
    return _.map(this.props.posts,post=>{
      return <li className="list-group-item" key={post.id}>{post.title}</li>
    })
  }
    render(){
      return(
      <div>
          <h3> Post List </h3>
          <ul className="list-group">
              {this.renderPosts()}
          </ul>
      </div>
      )
    }
}
function mapStateToProps(state){
  return{
    posts:state.posts
  }
}
export default connect(mapStateToProps,{fetchPosts})(IndexPost);