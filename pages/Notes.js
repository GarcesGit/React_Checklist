import React, {useEffect, useMemo, useState } from 'react';
import '../styles/App.css';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import NoteFilter from '../components/NoteFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';

function Notes() {

	const [notes, setNotes] = useState([]);
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false);

//создание
	const createNote = (newNote) => {
		setNotes([...notes, newNote])
		setModal(false)
	}

//удаление
	const removeNote = (note) => {
		setNotes(notes.filter(p => p.id !==note.id))
	}

//завершение
	const completeNote = (note) => {
		setNotes([...notes].map(p => {
			if (p.id === note.id) {
				p.isCompleted = !p.isCompleted;
			}
			return p ;
		}));
	}

//сортировка
	const sortedNotes =  useMemo( () => {
		if(filter.sort){
			return [...notes].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return notes;
	}, [filter.sort, notes] );

//поиск
	const sortedAndSearchedNotes =  useMemo( () => {
		return sortedNotes.filter(note => note.title.toLowerCase().includes(filter.query.toLowerCase()))
	}, [filter.query, sortedNotes])

//сохранение
	React.useEffect(() => {
		 const json = localStorage.getItem("notes");
		 const loadedNotes = JSON.parse(json);
		 if (loadedNotes) {
		 setNotes(loadedNotes);
	 	}
	}, []);

	React.useEffect(() => {
		 const json = JSON.stringify(notes);
		 localStorage.setItem("notes", json);
	}, [notes]);

//редактирование
	const toggleMode = (note) => {
		setNotes(notes.map(p => {
			if (p.id === note.id) {
				p.isEdit = !p.isEdit;
			}
			return p;
		}));
	}

	const editNote = (note, event) => {
		setNotes(notes.map(p => {
			if (p.id === note.id) {
				p.title = event.target.value;
			}
			return p;
		}));
	}


	return	(
	<div className = "App">
		<MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
			Создать задачу
		</MyButton>

		<MyModal visible={modal} setVisible={setModal}>
			<NoteForm create={createNote} />
		</MyModal>

		<NoteFilter
			filter={filter}
			setFilter={setFilter}
		/>

		<hr className="hr-shadow"/>

		<NoteList 	toggleMode={toggleMode}
					editNote={editNote}
					complete={completeNote}
					remove={removeNote}
					notes={sortedAndSearchedNotes}
					title = 'Список задач'
		/>

	</div>
	)
}

export default Notes;
