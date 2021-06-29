
let counter = document.getElementById("counter");
let operationsCount = document.getElementById("operations-count")

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Action creator
function incrementAction(x = 1) {
  return { type: INCREMENT, payload: x }
}

function inc() {
  store.dispatch(incrementAction());
}

function dec() {
  store.dispatch({ type: DECREMENT, payload: 1 });
}

function reset() {
  store.dispatch({ type: RESET });
}



// estado inicial - información por defecto
let initialState = {
  counter: 0,
  operationsCount: 0,
}

//Principios de la programación funcional:
// El state debe ser inmutable.
// solucion: crear una copia y modificar la copia.

// crear un store
// callback == reducer (función reductora)
let store = Redux.createStore(function(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return { 
        ...state,
        counter : state.counter + action.payload,
        operationsCount: state.operationsCount + 1 
      };
    case RESET:
      return { ...state,
        counter: 0,
        operationsCount: state.operationsCount + 1
      };
    case DECREMENT:
    return { ...state,
      counter : state.counter - action.payload,
      operationsCount: state.operationsCount + 1 
    };
  }

  return state;
});

// El subscribe debe ir antes de cualquier acción.
store.subscribe(function () {
  counter.innerHTML = store.getState().counter;
  operationsCount.children[0].innerHTML = store.getState().operationsCount;
});

