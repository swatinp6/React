import React from 'react'
import Product from './Product'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
  return (
    <div>
        <Provider store={store}>
        <h1>App component</h1>
        <Product/>
        </Provider>
       
    </div>
  )
}

export default App