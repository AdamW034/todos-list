import { takeEvery, call, put, takeLatest, select } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks))
  } catch (error) {
    yield call(alert, "Coś poszło nie tak")
  }
};

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(setTasks);
  yield call(saveTasksInLocalStorage, tasks)
}

export function* watchFetchExampleTasks() {
  console.log("Saga działa");
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler)
}   