import './style.css'
import ReactModal from 'react-modal'
ReactModal.setAppElement('#root')

export function Modal(props) {
  const { modalIsOpen } = props
  return (
    <ReactModal>
      isOpen={modalIsOpen}
      <img src="" alt="" />
      <p></p>
      <div>
        <img src="" alt="" />
        <div>
          <h4></h4>
          <h4></h4>
        </div>
        <div>
          <img src="" alt="" />
          <h3></h3>
          <img src="" alt="" />
        </div>
        <div>
          <h2></h2>
          <p></p>
        </div>
        <div>
          <h2></h2>
          <p></p>
        </div>
        <div>
          <h2></h2>
          <p></p>
        </div>
        <h1></h1>
        <div>
          <div>
            <img src="" alt="" />
            <h5></h5>
          </div>
          <div>
            <img src="" alt="" />
            <h5></h5>
          </div>
        </div>
        <button></button>
      </div>
    </ReactModal>
  )
}
