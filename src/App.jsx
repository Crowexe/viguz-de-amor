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
        title: "Hay algo más",
        buttons: {
          cancel: false,
          confirm: true,
        }
    })
      .then(() => {
            swal({
            title: "Inexplicable como su mirada",
            buttons: {
              cancel: false,
              confirm: true,
            }
      })
        .then(() => {
          swal({
          title: "Inigualable como la manera en que me cela",
          buttons: {
            cancel: false,
            confirm: true,
          }
        })      
        .then(() => {
            swal({
            title: "Y trata de disimular que no está mal",
            buttons: {
              cancel: false,
              confirm: true,
            }
          })      
          .then(() => {
              swal({
              title: "Voy a cuidarte por las noches",
              buttons: {
                cancel: false,
                confirm: true,
              }
            })      
            .then(() => {
                swal({
                title: "Voy a amarte sin reproches",
                buttons: {
                  cancel: false,
                  confirm: true,
                }
              })      
              .then(() => {
                  swal({
                  title: "Te voy a extrañar en la temprestad",
                  buttons: {
                    cancel: false,
                    confirm: true,
                  }
                })      
                  .then(() => {
                      swal({
                      title: "Y aunque existan mil razones para renunciar",
                      buttons: {
                        cancel: false,
                        confirm: true,
                      }
                    })      
                    .then(() => {
                        swal({
                        title: "No hay nadie más",
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
      <h1>Te amo mi niño</h1>
      <h2>eres lo mejor de mí y de mi mundo</h2>
      <div className="card">
        <button onClick={alerta}>Repetir</button>
      </div>
      <p className="read-the-docs">
        Viguz de amor &#60;3
      </p>
    </div>
  )
}

export default App
