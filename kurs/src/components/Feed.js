import React, { Component } from 'react'
import Post from './Post'

export class Feed extends Component {
  render() {
    return (
      <div>
        <Post title="New Biceps Curl" text="Here is some new text" likeCount={5}></Post>
        <Post title="New Shoulder Press" text="do u even lift bro" likeCount={10}></Post>
      </div>
    )
  }
}

export default Feed
