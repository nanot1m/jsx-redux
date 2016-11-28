import store from './store'

store.dispatch({ type: 'Inc' })

if (store.getState() === 1) {
  console.log(" Increment done ")
} else {
  console.error(" Increment failed ")
}

store.dispatch({ type: 'UknownType' })

if (store.getState() === 1) {
  console.log(" UknownType ignored ")
} else {
  console.error(" UknownType failed ")
}

store.dispatch({ type: 'Dec' })

if (store.getState() === 0) {
  console.log(" Default case done ")
} else {
  console.error(" Default case failed ")
}
