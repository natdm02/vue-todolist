const { createApp, ref } = Vue;

createApp({
    data() {
        return {
            newTodoText: '',
            todos: [
                { text: 'Task 1',
                  done: false },
                { text: 'Task 2', 
                  done: true },
                { text: 'Task 3', 
                  done: false },
                { text: 'Task 4',
                  done: true },
            ],
            errorMessage: '',
        };
    },
    methods: {
        addTodo() {
            if (this.newTodoText.trim() !== '') {
                this.todos.push({ text: this.newTodoText, done: false });
                this.newTodoText = '';
                this.errorMessage = '';
            } else {
                this.errorMessage = 'Il campo non può essere vuoto.';
            }
        },
    },
}).mount('#app');