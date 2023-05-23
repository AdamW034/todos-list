import { takeEvery, call, put, takeLatest, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess, selectTasksState} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(2000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks))
  } catch (error) {
    yield put(fetchExampleTasksError())
    yield call(alert, "Coś poszło nie tak")
  }
};

function* saveTasksInLocalStorageHandler() {
  const {tasks} = yield select(selectTasksState);
  yield call(saveTasksInLocalStorage, tasks)
}

export function* watchFetchExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler)
}   