import { put, takeEvery,} from 'redux-saga/effects'



function* addTodo(action) {
   try {
        yield put({type:'ADD_TODO_SAGA',payload:action.payload})
   } catch (e) {
      console.log(e)
   }
}

function* removeTodo(action) {
  try {
       yield put({type:'REMOVE_TODO_SAGA',payload:action.payload.id})
  } catch (e) {
     console.log(e)
  }
}

function* updateTodo(action) {
   try {
        yield put({type:'UPDATE_TODO_SAGA',payload:action.payload})
   } catch (e) {
      console.log(e)
   }
}







function* todoSaga() {
  yield takeEvery("ADD_TODO", addTodo);
  yield takeEvery("REMOVE_TODO", removeTodo);
  yield takeEvery("UPDATE_TODO", updateTodo);
}



export default todoSaga;