import React, { Component } from 'react'
import styles from './styles.module.css'

export class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: this.props.username,
      bio: this.props.bio,
      likeCount: this.props.likeCount
    }

    this.like = this.like.bind(this);
  }

  like() {
    console.log("hello");
    this.setState({likeCount: this.state.likeCount + 1})
  } 

  render() {
    return (
      <div className={styles.post}>
        <h1 className={styles.username}>{this.state.username}</h1>
        <p>{this.state.bio}</p>
        <p>{this.state.likeCount}</p>
        <button onClick={this.like}>Like!</button>
      </div>
    )
  }
}

export default Post
