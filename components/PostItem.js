import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';


 function PostItem (props)  {

	return (
    <div className = "post">
        <div className = {props.isCompleted ? 'notActive' : 'post_content'}>
			<strong> {props.number}. {props.post.title} </strong>
            <div>
                {props.post.body}
            </div>
            <div>
                {props.post.time}
            </div>
		</div>

		<div className = "post_btn">
			<MyButton   style = {{color: 'orange'}}
                        onClick={()=> props.edit(props.post)}>
                        &#9998;
            </MyButton>
            <MyButton   style = {{color: 'green'}}
                        onClick={()=> props.complete(props.post)}>
                        &#10004;
            </MyButton>
            <MyButton   style = {{color: 'red'}}
                        onClick={()=> props.remove(props.post)}>
                        &#10008;
            </MyButton>
		</div>

	</div>
)
}

export default PostItem;
