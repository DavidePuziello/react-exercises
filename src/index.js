import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'

let root = document.querySelector('#root')

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , root)