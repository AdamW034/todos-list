export const getExampleTasks = async () => {
    const response = await fetch("/todo-list-react/public/exampleTasks.json");

    if(!response.ok) {
        new Error(response.statusText)
    }

    return await response.json();
};