import { useState } from 'react'
import './App.css'
import swal from 'sweetalert';

function alerta() {
  swal({
    title: "Te la dedico",
    icon: "info",
    buttons: true
  })
  .then(() => {
      swal({
      title: "Sos lo que me da paz",
      buttons: true
    })
      .then(() => {
        swal({
        title: "Lo que andaba buscando",
        buttons: true
      })
        .then(() => {
          swal({
          title: "y esa felicidad",
          buttons: true
        })      
      })
        .then(() => {
            swal({
            title: "y esa felicidad",
            buttons: true
          })      
        })
          .then(() => {
              swal({
              title: "y esa felicidad",
              buttons: true
            })      
          })
    })
  });
}

function App() {
  alerta()

  return (
    <div className="App">
      <h1>Viguz de amor &#60;3</h1>
      <div className="card">
        <button onClick={alerta}>Repetir</button>
      </div>
    </div>
  )
}

export default App
