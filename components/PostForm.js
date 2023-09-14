import React, { useState } from 'react';
import uuid from 'react-uuid';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import MySelect from '../components/UI/select/MySelect';

 function PostForm ({create})  {

  function id() {
 	return uuid();
 	}

   const [post, setPost] = useState({title:'', body:'', time: '', isCompleted: false})
   const [selectValue, setSelectValue] = useState('');


   function addNewPost(event) {
      event.preventDefault()
      const newPost = {...post, id: id() }
      create(newPost)
 	  setPost({title:'', body:'', time:'', isCompleted: false})
      setSelectValue('');
 	}

    function selectChange(event) {
        setSelectValue(event.target.value);
        setPost({...post, body: event.target.value})
 }

    function setTime(time) {
    	let date = new Date();
    	return addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + addZero(date.getFullYear()) + ' ' +
    	addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
    }

    function addZero(num) {
     if (num >= 0 && num <= 9) {
    	 return '0' + num;
     } else {
    	 return num;
     }
    }

	return (
    <form>

  		<MyInput
  				value={post.title}
  				onChange={event => setPost({...post, title:event.target.value, time: setTime()})}
  				type = 'text'
  		        placeholder = 'Описание задачи'
      />

        <div >
            <label> Установите срочность события:
                <select className="select"
                    value={selectValue}
                    onChange={selectChange} >
                    <option defaultValue>...</option>
                    <option>Не срочно</option>
                    <option>Среднесрочно</option>
                    <option>! Срочно !</option>
                </select>
             </label>
        </div>
        <div>
            {setTime}
        </div>

        <MyButton onClick={addNewPost}>Создать задачу</MyButton>

	</form>
)
}

export default PostForm;
