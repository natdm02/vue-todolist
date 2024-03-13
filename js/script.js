const { createApp, ref } = Vue;

createApp({
    data() {
        return {
            newTodoText: '',
            todos: [
                { text: 'palestra',
                  done: false },
                { text: 'compiti', 
                  done: true },
                { text: 'spesa', 
                  done: false },
                { text: 'ripassare lezione',
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
        removeTodo(index) {
          this.todos.splice(index, 1);
      },
      toggleDone(index) {
          this.todos[index].done = !this.todos[index].done;
      },
    },  
}).mount('#app');