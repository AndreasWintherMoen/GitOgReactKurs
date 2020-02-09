import React, { Component } from 'react'
import Post from '../Post/Post.js'

export class Feed extends Component {
  render() {
    return (
      <div>
        <Post username="Big boi" bio="hello there" likeCount={10}></Post>
        <Post username="some other user" bio ="some text" likeCount={5}></Post>
      </div>
    )
  }
}

export default Feed
