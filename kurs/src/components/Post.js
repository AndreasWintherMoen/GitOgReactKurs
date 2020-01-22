import React, { Component } from 'react'

export class Post extends Component {
  constructor(props) {
    super();

    this.state = {
      likeCount: props.likeCount,
      comment: ""
    }

    this.likePost = this.likePost.bind(this);
    this.comment = this.comment.bind(this);
  }

  likePost() {
    this.setState({likeCount: this.state.likeCount + 1})
  }

  comment() {
    console.log(this.state.comment);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
        <p>{this.state.likeCount}</p>
        <input type="button" value="Like!" onClick={this.likePost}></input>
        <input 
          type="text" 
          placeholder="Type a comment..." 
          value={this.state.comment} 
          onChange={e => this.setState({comment: e.target.value})}
        ></input>
        <input type="button" value="Comment" onClick={this.comment}></input>
      </div>
    )
  }
}

export default Post
