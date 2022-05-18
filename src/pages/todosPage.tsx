import React, { FC } from 'react';
import { useEffect } from "react";
import { useState } from "react";
import TodoForm from '../components/TodoForm';
import TodoList from '../components/todoList';
import { ITodo } from '../interfaces';
interface TodoPageProps {
  theme: boolean
}
const TodoPage: FC<TodoPageProps> = ({theme}) => {
    const [todos, setTodos] = useState<ITodo[]>([])
  const [confirm, setConfirm] = useState<boolean>(false)

  const addHandler = (title: string) => {
    const todo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => ([todo, ...prev]))
  }
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const hanldeToggle = (id: number) => {
    
    setTodos(prev => prev.map(todo => {
      if(todo.id === id )todo.completed = !todo.completed 
      return todo
    }))   
}
const removeTodo = (id: number) => {
  if(confirm){
    const toggleConfirm = window.confirm("Ты точно хочешь удалить задачу?")
    toggleConfirm && setTodos(todos.filter(i => i.id !== id)) 
  }
  else{
    setTodos(todos.filter(i => i.id !== id)) 
  }
}
  return (
    <>
      <div className="switch  center">
      <label>
      no Confirm
      <input type="checkbox" checked={confirm} onClick={() => setConfirm(prev => !prev)}/>
      <span className="lever"></span>
      yes Confirm
    </label>
  </div>
      <div className="container">
      <TodoForm theme={theme} onAdd ={addHandler} />
      <TodoList onToggle={hanldeToggle} DeletTodo={removeTodo} todos={todos} />
      
      </div>
    </>
  );
};

export default TodoPage;