import React from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

 function NoteFilter ({filter, setFilter})  {
	return (
      <div>
          <MyInput
              value={filter.query}
              onChange={event => setFilter({...filter, query: event.target.value})}
              placeholder='Поиск...'
          />
          <MySelect
              value={filter.sort}
              onChange={sortedAndSearchedNotes => setFilter({...filter, sort: sortedAndSearchedNotes})}
              defaultValue='Сортировка'
              options={[
                  {value: 'title', name: 'По описанию'},
                  {value: 'body', name: 'По срочности'},
                  {value: 'time', name: 'По дате'},
              ]}
          />
      </div>
)
}

export default NoteFilter;
