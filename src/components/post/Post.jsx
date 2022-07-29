import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className="post">
        <img src="https://i.pinimg.com/736x/fd/eb/8d/fdeb8d87380686e2907e98fa35a767d0.jpg" alt="post cover" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span>Music</span>
                <span>Life</span>
            </div>
            <div className="postTitle">
                <span> Lorem ipsum dolor sit amet</span>
            </div>
            <div className="postTimestamp">
                <span>1 hour ago</span>
            </div>
            <div className="postDesc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem convallis, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet etiam etiam. Lorem ipsum dolor sit amet etiam nonumy euismod. Lorem ipsum dolor sit amet et</p>
            </div>
        </div>
    </div>
  )
}
