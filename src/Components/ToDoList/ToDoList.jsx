import React, {useState} from 'react';
import ListItem from '../ListIem/ListItem';
// import { StyleSheet, View, Text, Button } from 'react-native';
import './ToDoList.scss';

const ToDoList = () => {
    const [dataInput, setDataInput] = useState("");
    const [text, setText] = useState([]);

    const handlerInput = (e) => {
        // console.log(e.target.value);
        setDataInput(e.target.value);
    }

    const clickUserInput = (e) => {
        e.preventDefault();
        setText([
            ...text, {text: dataInput, key: Math.floor(Math.random() * 30 )}
        ]);
        setDataInput("");
    }

    const handlerUserDelete = (newkey) => {
        const dataDelete = [...text];
        dataDelete.splice(dataDelete.filter(item => item.key === newkey), 1);
        setText(dataDelete);
    }

    return(
        <form className="to-do-form">
            <div className="user-handler">
                <input 
                    type="text"
                    placeholder="Jot do something"
                    className={(dataInput === "") ? 'user-un-required':'user-required' }
                    onChange={handlerInput}
                    value={dataInput}    
                    required/>
                <button className="user-button"
                        onClick={clickUserInput} >
                        Input
                </button>
            </div>

            <div>
                { 
                    text.map(u => <ListItem
                        handlerDelete = {handlerUserDelete}
                        TextInput={u.text} 
                        key={u.key}/>)
                }
            </div>
        </form>
    )
}

export default ToDoList;