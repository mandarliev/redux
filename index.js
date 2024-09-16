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

// This function will return us the Store
function createStore() {

  // The Store will have 4 parts:

  // 1. The State
  // 2. Getting the State
  // 3. Listen to changes in the State
  // 4. Updating the State

  let listeners = [];

  const getState = () => state;

  const listenToState = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };



  return {
    getState,
    listenToState,
  };
}
