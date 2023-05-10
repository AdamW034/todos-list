import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga'
import tasksReducer from './features/tasks/tasksSlice';
import { watchFetchExampleTasks } from './features/tasks/tasksSaga';

const sagaMiddleWare = createSagaMiddleWare();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(watchFetchExampleTasks);

export default store;