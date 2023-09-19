import React, {useEffect, useMemo, useRef, useState } from 'react';
import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false);

//создание
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

//удаление
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !==post.id))
	}

//завершение
	const completePost = (post) => {
		setPosts([...posts].map(p => {
			if (p.id === post.id) {
				p.isCompleted = !p.isCompleted;
			}
			return p ;
		}));
	}

//сортировка
	const sortedPosts =  useMemo( () => {
		if(filter.sort){
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts;
	}, [filter.sort, posts] );

//поиск
	const sortedAndSearchedPosts =  useMemo( () => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
	}, [filter.query, sortedPosts])

//сохранение
	React.useEffect(() => {
	 const json = localStorage.getItem("posts");
	 const loadedPosts = JSON.parse(json);
	 if (loadedPosts) {
	   setPosts(loadedPosts);
	 }
	}, []);

	React.useEffect(() => {
	 const json = JSON.stringify(posts);
	 localStorage.setItem("posts", json);
	}, [posts]);

//редактирование
	const toggleMode = (post) => {
		setPosts(posts.map(p => {
			if (p.id === post.id) {
				p.isEdit = !p.isEdit;
			}
			return p;
		}));
	}

	const editPost = (id, field, event) => { ///////////
		setPosts(posts.map(post => {
			if (post.id === id) {
				post[field] = event.target.value;
			}

			return post;
		}));
	}

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

		<PostList toggleMode={toggleMode} editPost={editPost} complete={completePost} remove={removePost} posts={sortedAndSearchedPosts} title = 'Список задач'/>
	</div>
	)
}

export default App;
