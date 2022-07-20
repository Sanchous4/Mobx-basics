import {TodoInstance} from '../store/todo';
import {observer} from 'mobx-react-lite';
import {useState} from 'react';
import AddSpacer from './AddSpacer';

const TodoList = observer(() => {
    // ! Key and decomposition of components are crucial for MobX
    const [newTodo, setNewTodo] = useState('My new todo');

    const handleChangedInput = (event) => {
        setNewTodo(event.target.value);
    };

    const addNewTodo = () => {
        if (newTodo.length < 2) return;
        TodoInstance.addTodo({
            id: TodoInstance.todo.length,
            title: newTodo,
            completed: false,
        });
        setNewTodo('');
    };
    return (
        <div>
            <h2>Add new todo:</h2>
            <input type='text' value={newTodo} onChange={handleChangedInput} />
            <p>
                <button onClick={addNewTodo}>Add New Todo</button>
            </p>
            {TodoInstance.todo.map((todo) => (
                <div key={todo.id}>
                    <h2 style={{color: todo.completed ? 'green' : 'red'}}>
                        {todo.title}
                    </h2>
                    <AddSpacer />
                    <button onClick={() => TodoInstance.removeTodo(todo.id)}>
                        Remove
                    </button>
                    <AddSpacer />
                    <button onClick={() => TodoInstance.completeTodo(todo)}>
                        Complete
                    </button>
                    <AddSpacer />
                    <button onClick={() => TodoInstance.incompleteTodo(todo)}>
                        Incomplete
                    </button>
                </div>
            ))}
        </div>
    );
});

export default TodoList;
