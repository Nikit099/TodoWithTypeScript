import React from 'react';

interface TodoListProps {
    todos: any[]
    onToggle(id: number): void
    DeletTodo(id: number): void
}

const TodoList: React.FC<TodoListProps> = ({todos, onToggle, DeletTodo}) => {
    const removeHandler = (e: React.MouseEvent, id: number) => {
        e.preventDefault()
        DeletTodo(id)
    }
   if(todos && todos.length === 0){
       return <h4 className='center'>Нет Задач</h4>
   }
    return (
        <ul>
            {
              todos &&  todos.map(todo => (
                <li key={todo.id} className={todo.completed === false ? 'todo ' : 'todo  completed'}>
                <label  >
                    <input onClick={() => onToggle(todo.id)} type="checkbox" checked={todo.completed} />
                    <span>{todo.title}</span>
                    <i className='material-icons red-text' onClick={(e) => removeHandler(e, todo.id)}>delete</i>
                </label>
                </li>
                ))
            }
            
        </ul>
    );
};

export default TodoList;