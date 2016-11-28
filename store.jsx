import { React, Store, Reducer, Case, Default } from './jsxRedux'
import { createStore } from 'redux'

function increment(state) {
  return state + 1
}

function decrement(state) {
  return state - 1
}

let decReducer =
  <Reducer>
    <Case action="Dec" make={decrement} />
  </Reducer>

let reducer =
  <Reducer>
    <Case action="Inc" make={increment} />
    <Default make={decReducer} />
  </Reducer>

let store =
  <Store
    createStoreFn={createStore}
    reducer={reducer}
    initialState={0}
  />

export default store
