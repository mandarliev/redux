// Build the Store

// This function will return us the Store
function createStore() {
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

  return {
    getState,
    listenToState,
  };
}
