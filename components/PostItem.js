import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';


 function PostItem (props)  {

	return (
    <div className = "post">
        <div className = {props.isCompleted ? 'notActive' : 'post_content'}>

            <strong> {props.number}. </strong>
            {props.isEdit
            ? <input className ='input' value={props.post.title} onChange={event => props.editPost(props.post)} />
            : <strong>{props.post.title}</strong>
            }

            <div className = "post_content_time">
                <div className = "post_content_time_each">
                    {props.post.body}
                </div>
                <div className = "post_content_time_each">
                    {props.post.time}
                </div>
            </div>
		</div>

		<div className = "post_btn">
			<MyButton   style = {{color: 'orange'}}
                        onClick={()=> props.toggleMode(props.post)}>
                        {props.isEdit ? 'save': 'edit'}
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
