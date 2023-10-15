import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { store } from './reduxtk/store.js'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import { DataContextProvider } from './context/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
 <Provider store={store}>
 <DataContextProvider>
 <App />
 </DataContextProvider>
 </Provider>
 </BrowserRouter>
 
)


