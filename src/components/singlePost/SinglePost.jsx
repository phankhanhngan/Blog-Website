import './singlePost.css'
import React from "react";

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://i.pinimg.com/564x/2c/59/26/2c5926324c8b1bd64e28e5a3884e057b.jpg"
             alt="post" className="singlePostImg" />
             <div className="singlePostTitle">
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
                <h1>Lorem ipsum dolor sit amet.</h1>
             </div>
             <div className="singlePostInfo">
                    <span className="postAuthor">Author: Khanh Ngan</span>
                    <span className="postTime">1 hour ago</span>
                    
                </div>
                <p className="singlePostContent">
                    Josh had spent year and year accumulating the information. 
                    He knew it inside out and if there was ever anyone looking for an expert in the field, 
                    Josh would be the one to call. The problem was that there was nobody interested in the 
                    information besides him and he knew it. Years of information painstakingly memorized and 
                    sorted with not a sole giving even an ounce of interest in the topic. Josh had spent year 
                    and year accumulating the information. He knew it inside out and if there was ever anyone 
                    looking for an expert in the field, Josh would be the one to call. The problem was that there 
                    was nobody interested in the information besides him and he knew it. Years of information 
                    painstakingly memorized and sorted with not a sole giving even an ounce of interest in the topic.
                    Josh would be the one to call. The problem was that there 
                    was nobody interested in the information besides him and he knew it. Years of information 
                    painstakingly memorized and sorted with not a sole giving even an ounce of interest in the topic.
                    </p>
        </div>
    </div>
  )
}
