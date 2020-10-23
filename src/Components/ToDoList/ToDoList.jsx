import React, {useState} from 'react';
import ListItem from '../ListIem/ListItem';
// import { StyleSheet, View, Text, Button } from 'react-native';
import './ToDoList.scss';

const ToDoList = () => {
    const [dataInput, setdataInput] = useState("");
    const [text, setText] = useState([]);

    const __user_input_name = (e) => {
        // console.log(e.target.value);
        setdataInput(e.target.value);
    }

    const __user_handler_input = (e) => {
        e.preventDefault();
        setText([
            ...text, {text: dataInput, key: Date.now}
        ]);
        setdataInput("");
    }

    const __user_delete = (e) => {
        e.preventDefault();
        const delete_data = [...text];
        delete_data.splice(delete_data.findIndex(item => item.text === dataInput), 1);
        setText(delete_data);
    }

    const elementClass = [];

    if(dataInput === ''){
        elementClass.push('user-un-required');
    }
    else {
        elementClass.push('user-required');
    }
    return(
        <form className="to-do-form">
            <div className="user-handler">
                <input 
                    type="text"
                    placeholder="Jot do something"
                    className={elementClass.join('')}
                    onChange={__user_input_name}
                    value={dataInput}    
                    required/>
                <button className="user-button"
                        onClick={__user_handler_input} >
                        Input
                </button>
            </div>

            <div>
                { 
                    text.map(u => <ListItem
                        Delete = {__user_delete}
                        dataInput={u.text} 
                        key={u.key}/>)
                }
            </div>
        </form>
    )
}

export default ToDoList;