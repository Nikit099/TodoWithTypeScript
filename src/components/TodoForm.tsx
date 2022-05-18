import React from 'react';
// import { useRef } from 'react';
import { useState } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
    theme: boolean
}

const TodoForm: React.FC<TodoFormProps> = ({onAdd, theme}) => {
    const [title, setTitle] = useState<string>('')
    // const ref = useRef<HTMLInputElement>(null)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        
    }
    const handleKeyDown = (e: React.KeyboardEvent) => {
        
        if(e.key === "Enter"){
        //    console.log(ref.current!.value);
        //    ref.current!.value = ''
            onAdd(title)
            setTitle('')
        }
        
    }
    return (
        <div className="mt2 row">
        <div className="input-field col s12">
          <input  value={title} onChange={handleChange} onKeyDown={handleKeyDown} placeholder='Введите задачу' type="text" className={'validate ' + (theme ? '' : 'color')} />
          <label htmlFor="text" className='active'>Введите название дела</label>
        </div>
        </div>

    );
};

export default TodoForm;