// Reducer function
function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.todo]);
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : // ES6 feature
            Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case "ADD_GOAL":
      return state.concat([action.goal]);
    case "REMOVE GOAL":
      return state.filter((goal) => goal.id !== action.id);
    default:
      return state;
  }
}

// I made this because I need to split the reducer into todos and goals
function app(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: todos(state.goals, action),
  };
}

// This function will return us the Store
function createStore(reducer) {
  // The Store will have 4 parts:

  // 1. The State
  // 2. Getting the State
  // 3. Listen to changes in the State
  // 4. Updating the State

  let state;
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
    state = reducer(state, action);
    // after updating the state we need to loop over the listensers and invoke each one of them so that they know the state was updated
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    listenToState,
    dispatch,
  };
}
