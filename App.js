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
import MyButton from './components/UI/button/MyButton';

function id() {
  return uuid();
  }

function App() {
	const [posts, setPosts] = useState([
		{id: id(), title: 'Нажмите для редактирования задачи', body: 'Срочность', time: 'Время', isCompleted: false},
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
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
	}, [filter.query, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !==post.id))
	}


////
const completePost = (post) => {
	setPosts([...posts].map(p => {
		if (p.id === post.id) {
			p.isCompleted = !p.isCompleted;
		}
		return p ;
	}));
}

////

	return	(
	<div className = "App">
		<MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
			Создать задачу
		</MyButton>

		<MyModal visible={modal} setVisible={setModal}>
			<PostForm create={createPost} />
		</MyModal>

		<PostFilter
			filter={filter}
			setFilter={setFilter}
		/>

		<hr className="hr-shadow"/>

		<PostList complete={completePost} remove={removePost} posts={sortedAndSearchedPosts} title = 'Список задач'/>

	</div>
	)
}

export default App;
