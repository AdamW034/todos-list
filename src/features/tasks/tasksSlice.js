import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: getTasksFromLocalStorage() || [],
    hideDone: false,
    loading: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, {payload: taskId}) => {
      const index = state.tasks.findIndex(task => task.id === taskId);
      state.tasks[index].done = !state.tasks[index].done;
    },
    setAllDone: ({ tasks }) => {
      tasks.map(task => task.done = true)
    },
    removeTask: (state, {payload: taskId}) => {
      const index = state.tasks.findIndex(task => task.id === taskId);
      state.tasks.splice(index, 1);
    },
    fetchExampleTasks: state => {
      state.loading = true;
    },
    fetchExampleTasksSuccess: (state, {payload: tasks}) => {
      state.loading = false;
      state.tasks = tasks;
    },
    fetchExampleTasksError: state => {
      state.loading = false;
    },
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
  },
});



export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  removeTask,
  fetchExampleTasks,
  fetchExampleTasksError,
  fetchExampleTasksSuccess,
  setTasks,
} = tasksSlice.actions;
export const selectTasksState = state => state.tasks;
export const selectLoading = state => selectTasksState(state).loading;
export const selectTasks = state => selectTasksState(state).tasks;

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasksState(state)

  if (!query || query === "") {
    return tasks;
  }

  return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()))
};

export default tasksSlice.reducer;