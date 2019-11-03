import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
class PostList extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }
  render() { 
    return (<div>Post List</div>);
  }
}
 const mapStateToProps = ({posts})=>{
  return {posts}
 }
export default connect(mapStateToProps, {fetchPosts})(PostList);