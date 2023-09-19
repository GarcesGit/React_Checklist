import React, { useState } from 'react';
import PostItem from './PostItem';
import {TransitionGroup, CSSTransition} from "react-transition-group";

 function PostList ({posts, title, remove, complete, isCompleted, toggleMode, isEdit, editPost})  {

     if (!posts.length) {//если длина равна нулю
         return (
         <h2 style={{textAlign:'center'}}>
             Все дела завершены!
         </h2>
        )
    }

	return (
    <div>
        <h1 style = {{textAlign: 'center'}}>
        {title}
        </h1>

        <TransitionGroup>
            {posts.map((post, index) =>
                <CSSTransition key={post.id} timeout={500} classNames= 'post'>
                    <PostItem  toggleMode={toggleMode} isEdit={post.isEdit} editPost={editPost} complete={complete} isCompleted={post.isCompleted} remove={remove} number ={index+1} post = {post} />
                </CSSTransition>
            )}
        </TransitionGroup>

    </div>
)
}

export default PostList;
