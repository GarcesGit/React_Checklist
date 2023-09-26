import React, { useState } from 'react';
import NoteItem from './NoteItem';
import {TransitionGroup, CSSTransition} from "react-transition-group";

 function NoteList ({notes, title, remove, complete, isCompleted, toggleMode, isEdit, editNote})  {

     if (!notes.length) {//если длина равна нулю
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
            {notes.map((note, index) =>
                <CSSTransition key={note.id} timeout={500} classNames= 'note'>
                    <NoteItem   toggleMode={toggleMode}
                                isEdit={note.isEdit}
                                editNote={editNote}
                                complete={complete}
                                isCompleted={note.isCompleted}
                                remove={remove}
                                number ={index+1}
                                note = {note}
                    />
                </CSSTransition>
            )}
        </TransitionGroup>

    </div>
)
}

export default NoteList;
