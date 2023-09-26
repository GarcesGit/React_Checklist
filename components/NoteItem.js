import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';


 function NoteItem (props)  {

	return (
    <div className = "note">
        <div className = {props.isCompleted ? 'notActive' : 'note_content'}>

            <strong> {props.number}. </strong>
            {props.isEdit
            ? <input className ='input' type="text" value={props.note.title}
            onChange={(event) => props.editNote(props.note, event)}
            />
            : <strong>{props.note.title}</strong>
            }

            <div className = "note_content_time">
                <div className = "note_content_time_each">
                    {props.note.body}
                </div>
                <div className = "note_content_time_each">
                    {props.note.time}
                </div>
            </div>
		</div>

		<div className = "note_btn">
			<MyButton   style = {{color: 'orange'}}
                        onClick={()=> props.toggleMode(props.note)}>
                        {props.isEdit ? 'save': 'edit'}
            </MyButton>
            <MyButton   style = {{color: 'green'}}
                        onClick={()=> props.complete(props.note)}>
                        &#10004;
            </MyButton>
            <MyButton   style = {{color: 'red'}}
                        onClick={()=> props.remove(props.note)}>
                        &#10008;
            </MyButton>
		</div>

	</div>
)
}

export default NoteItem;
