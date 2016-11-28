export const React = {
  createElement(type, props, ...children) {
    return type(props, children)
  }
}

function createReducer(children) {
  return function(state, action) {
    for (const caseFn of children) {
      const result = caseFn(state, action)
      if (result.matched) {
        return result.state
      }
    }
    return state
  }
}

function createCase(props) {
  const { action, make } = props
  return function(state, _action) {
    if (action === _action.type) {
      return {
        state: make(state, _action),
        matched: true
      }
    }
    return {
      matched: false
    }
  }
}

export const Default = function(props) {
  return function(state, action) {
    return {
      state: props.make(state, action),
      matched: true
    }
  }
}

function createStore({ createStoreFn, reducer, initialState }) {
  return createStoreFn(reducer, initialState)
}

export const Reducer = function(props, children) {
  return createReducer(children)
}

export const Store = function(props) {
  return createStore(props)
}

export const Case = function(props) {
  return createCase(props)
}
