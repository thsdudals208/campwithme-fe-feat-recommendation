export function addTodoItem(todoData, date, value) {
    const newItem = { val: value, done: false };
    if(!todoData[date]) todoData[date] = [];
    todoData[date].push(newItem);
    return todoData;
}

export function deleteTodoItem(todoData, date, value) {
    if(!todoData[date]) return todoData;
    const updateTodos = todoData[date].filter(item => item.val !== value);
    todoData[date] = updateTodos;
    return todoData
}

export function toggleTodoItem(todoData, date, value, done) {
    if(!todoData[date]) return todoData;
    const index = todoData[date].findIndex(item => item.val === value);
    if(index > -1) {
        todoData[date][index].done = done;
    }
    return todoData;
}