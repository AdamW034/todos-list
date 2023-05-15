import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: getTasksFromLocalStorage() || [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload);
      state.tasks[index].done = !state.tasks[index].done;
    },
    setAllDone: ({ tasks }) => {
      tasks.map(task => task.done = true)
    },
    removeTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload);
      state.tasks.splice(index, 1);
    },
    fetchExampleTasks: () => {},
    setTasks: (state, {payload: tasks}) => {
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
  setTasks,
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export const getTaskById = (state, taskId) => {
  selectTasks(state).find(({id}) => id === taskId);
};
  

export default tasksSlice.reducer;