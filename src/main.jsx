import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppWrapper from './AppWrapper.jsx'
import { Provider } from 'react-redux'
import store from './states/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <AppWrapper/>
    </Provider>
  </StrictMode>,
)
