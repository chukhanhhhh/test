import React from 'react';
import './ListItem.scss';

const ListItem = (
    {   
        key,
        TextInput,
        handlerDelete
    }) => {
        const handleRemoveItem = (e) => {
            handlerDelete((deleteItem) => deleteItem.key === key);
        }


        return(
            <div className="list-item" >
                <p >I am {TextInput}</p>
                <button onClick={handleRemoveItem}>Delete</button>

            </div>
            
        )
}

export default ListItem;
