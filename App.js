import React, {useMemo, useRef, useState } from 'react';
import uuid from 'react-uuid';
import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';


function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'ЗадачаААА', body: 'Срочность222'},
		{id: 2, title: 'ЗадачаБББ', body: 'Срочность333'},
		{id: 3, title: 'ЗадачаВВВ', body: 'Срочность111'},
	]);

	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false);

	const sortedPosts =  useMemo( () => {
		if(filter.sort){
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts;
	}, [filter.sort, posts] );

	const sortedAndSearchedPosts =  useMemo( () => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase())) //поиск по названию поста
	}, [filter.query, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
}

	const removePost = (post) => {// Получаем пост из дочернего компонета
		setPosts(posts.filter(p => p.id !==post.id))
	}


	return	(
	<div className = "App">
		<PostForm create={createPost}/>

		<PostFilter
			filter={filter}
			setFilter={setFilter}
		/>

		<hr class="hr-shadow"/>
		<PostList remove={removePost} posts= {sortedAndSearchedPosts} title = 'Список задач'/>


	</div>
	)
}

export default App;
