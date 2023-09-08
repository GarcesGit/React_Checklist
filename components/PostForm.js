import React, { useState } from 'react';
import uuid from 'react-uuid';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import MySelect from '../components/UI/select/MySelect';

 function PostForm ({create})  {

  function id() {
 	return uuid();
 	}

   const [post, setPost] = useState({title:'', body:''})

   const [selectValue, setSelectValue] = useState('');

   function handleChange(event) {
       setSelectValue(event.target.value);
       setPost({...post, body: event.target.value})
}

   function addNewPost(event) {
      event.preventDefault()
      const newPost = {...post, id: id() }
      create(newPost)
 	  setPost({title:'', body:''}) //очищаем инпуты после ввода
 	}

	return (
    <form>

  		<MyInput
  				value={post.title}
  				onChange={event => setPost({...post, title:event.target.value})}
  				type = 'text'
  		        placeholder = 'Описание задачи'
      />

        <div>
            <label> Установите срочность события:
                <select value={selectValue}
                    onChange={handleChange} >
                    <option selected>...</option>
                    <option>Не срочно</option>
                    <option>Среднесрочно</option>
                    <option>! Срочно !</option>
                </select>
             </label>
        </div>

        <MyButton onClick={addNewPost}>Создать задачу</MyButton>

	</form>
)
}

export default PostForm;
