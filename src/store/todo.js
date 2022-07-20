import {makeAutoObservable} from 'mobx';
class Todo {
    todo = [
        {id: 1, title: 'First', completed: false},
        {id: 2, title: 'Second', completed: false},
        {id: 3, title: 'Third', completed: false},
    ];

    constructor() {
        makeAutoObservable(this);
        //* makeAutoObservable(this, {}, {deep: true}); //* for watching objects with several nesting levels
        //-->
        //* makeAutoObservable(this, {todo: observable, addTodo: action/computed}, {});
    }

    addTodo(todo) {
        this.todo.push(todo);
    }

    removeTodo(id) {
        this.todo = this.todo.filter((item) => item.id !== id);
    }

    completeTodo(todo) {
        todo.completed = true;
    }

    incompleteTodo(todo) {
        todo.completed = false;
    }
}

export const TodoInstance = new Todo();
