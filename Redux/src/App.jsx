import React from 'react'
import Message from './Messages/Message'
import { store } from './Redux/Store'
import {Provider} from  'react-redux'
const App = () => {
  return (
    <div>
        <Provider store={store}>
        <h1>App component</h1>
        <hr/>
        <Message/>
        </Provider>
    </div>
  )
}

export default App