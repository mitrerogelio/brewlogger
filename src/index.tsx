import React from 'react'
import ReactDOM, {Root} from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

let root: Root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	// </React.StrictMode>
)
