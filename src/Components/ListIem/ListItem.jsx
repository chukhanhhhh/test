import React from 'react';
import './ListItem.scss';

const ListItem = (
    {   
        dataInput,
        Delete,
    }) => {
        return(
            <div >
                <button onClick={Delete}>Delete</button>
                <p >I am {dataInput}</p>

            </div>
            
        )
}

export default ListItem;
