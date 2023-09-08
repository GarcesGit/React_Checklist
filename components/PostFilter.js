import React from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

 function PostFilter ({filter, setFilter})  {
	return (
      <div>
          <MyInput
              value={filter.query}
              onChange={event => setFilter({...filter, query: event.target.value})}
              placeholder='Поиск...'
          />
          <MySelect
              value={filter.sort}
              onChange={selectedSort => setFilter({...filter, sort: selectedSort})}//вызываем функцию сортировки массива постов
              defaultValue='Сортировка'
              options={[
                  {value: 'title', name: 'По описанию'},
                  {value: 'body', name: 'По срочности'}
              ]}
          />
      </div>
)
}

export default PostFilter;
