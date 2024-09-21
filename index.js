{
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false,
  }
}

{
  type: 'REMOVE_TODO',
  id: 0,
}

{
  type: 'TOGGLE_TODO',
  id: 0,
}

{
  type: 'ADD_GOAL',
  goal: {
    id: 0,
    name: 'Run a Marathon'
  }
}

{
  type: 'REMOVE_GOAL',
  id: 0
}

// Reducer function
function todos (state = [], action) {

  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  }

  return state;
}

// This function will return us the Store
function createStore(reducer) {

  // The Store will have 4 parts:

  // 1. The State
  // 2. Getting the State
  // 3. Listen to changes in the State
  // 4. Updating the State

  let state
  let listeners = [];

  const getState = () => state;

  const listenToState = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  // With the dispatch method you can change the state by passing an object to it
  // Like this store.dispatch(object)
  const dispatch = (action) => {
    // call todos in order to update the state
    state = reducer(state, action)
    // after updating the state we need to loop over the listensers and invoke each one of them so that they know the state was updated
    listeners.forEach((listener) => listener())
  }

  return {
    getState,
    listenToState,
    dispatch
  };
}
