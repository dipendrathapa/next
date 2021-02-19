import { useState } from 'react';
import '../styles/index.css'

export default () => {
    const [todos, setTodos] = useState(['']);
    const [todo, setTodo] = useState('');
    const removeTodo = (todo) => {
        setTodos(todos.filter(t => t !== todo))
    };

    return (
        <div className ="container">
        <h1>list to do</h1>
       <input value = { todo }
        onChange = { e => setTodo(e.target.value) } /> 
        <button onClick = { () => setTodos([...todos, todo])} > Add </button> {
        todos.map((todo, index) => ( 
         <>
            <h1 > { todo } </h1> 
            <button onClick = { () => removeTodo(todo) } > remove </button> 
        </>
        
        ))
     };
    </div>
    );
};