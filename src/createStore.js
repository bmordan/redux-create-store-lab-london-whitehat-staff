export default function createStore(reducer) {
  let state

  const getState = () => {
    return state
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    render()
  }

  dispatch({ type: "@@init" })

  return { getState, dispatch }
}

function render() {
  const container = document.getElementById('container');
}
