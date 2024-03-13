const { createApp, ref } = Vue;

createApp({
    data() {
        return {
            newTodoText: '',
            todos: [
                { text: 'palestra', done: false },
                { text: 'compiti', done: true },
                { text: 'spesa', done: false },
                { text: 'ripassare lezione', done: true },
            ],
            errorMessage: '',
        };
    },
    methods: {
        addTodo() {
            if (this.newTodoText.trim().length < 4) {
                this.errorMessage = 'Il testo deve contenere almeno 4 caratteri.';
            } else {
                this.todos.push({ text: this.newTodoText, done: false });
                this.newTodoText = '';
                this.errorMessage = '';
            }
        },
        removeTodo(index) {
            if (this.todos[index].done) {
                this.todos.splice(index, 1);
                this.errorMessage = '';
            } else {
                this.errorMessage = 'Puoi eliminare solo i task completati.';
            }
        },
        toggleDone(index) {
            this.todos[index].done = !this.todos[index].done;
            this.errorMessage = '';
        },
    },
    computed: {
        hasCompletedTasks() {
            return this.todos.some(todo => todo.done);
        }
    },
}).mount('#app');