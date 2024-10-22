import React from 'react'
import Product from './Product'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Message from './Message'

const App = () => {
  return (
    <div>
        <Provider store={store}>
        <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="navbar-brand">Redux Example</a>
        </nav>
        <h1>App component</h1>
        <Product/>
        <hr/>
        <Message/>
        </Provider>
       
    </div>
  )
}

export default App