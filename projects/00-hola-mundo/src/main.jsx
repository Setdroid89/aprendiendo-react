// Punto de entrada de nuestar aplicación

// Los componentes van en PascalCase o no funciona
// Siempre tiene que "devolver" algo

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Solo acepta un parametro
root.render(
  <App />
)



