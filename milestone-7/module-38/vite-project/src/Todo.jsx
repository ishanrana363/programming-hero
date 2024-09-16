import React from 'react';

const Todo = ({name,isDone}) => {
    if(isDone){
        return (
            <div>
                <ul>
                    <li> Todo finish :  {name} </li>
                </ul>
            </div>
        );
    }
    return (
        <div>
            <li>Learnig todo : {name}</li>
        </div>
    )
};

export default Todo;