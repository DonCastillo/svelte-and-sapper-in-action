import TodoList from './TodoList.svelte';

const todolist = new TodoList({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default todolist;