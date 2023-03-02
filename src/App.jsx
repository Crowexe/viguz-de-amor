import './App.css'
import swal from 'sweetalert';

function alerta() {
  swal({
    title: "Te la dedico",
    icon: "info",
    buttons: {
      cancel: false,
      confirm: true,
    }
  })
    .then(() => {
      swal({
        title: "Sos lo que me da paz",
        buttons: {
          cancel: false,
          confirm: true,
        }
    })
      .then(() => {
            swal({
            title: "Lo que andaba buscando",
            buttons: {
              cancel: false,
              confirm: true,
            }
      })
        .then(() => {
          swal({
          title: "y esa felicidad",
          buttons: {
            cancel: false,
            confirm: true,
          }
        })      
        .then(() => {
            swal({
            title: "Que hace que ande sonriendo",
            buttons: {
              cancel: false,
              confirm: true,
            }
          })      
          .then(() => {
              swal({
              title: "Quiero verte feliz",
              buttons: {
                cancel: false,
                confirm: true,
              }
            })      
            .then(() => {
                swal({
                title: "Mejor si es al lado de mí",
                buttons: {
                  cancel: false,
                  confirm: true,
                }
              })      
              .then(() => {
                  swal({
                  title: "Love incondicional",
                  buttons: {
                    cancel: false,
                    confirm: true,
                  }
                })      
                  .then(() => {
                      swal({
                      title: "Como perro a su amo",
                      buttons: {
                        cancel: false,
                        confirm: true,
                      }
                    })      
                    .then(() => {
                        swal({
                        title: "TE SIGO AMANDO",
                        buttons: {
                          cancel: false,
                          confirm: true,
                        }
                      })      
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
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
