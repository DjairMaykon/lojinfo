import MapIcon from '../../assets/mapIcon.svg'

import './style.css'

export function CepForm() {
  return (
    <form id="formCep">
      <h1 className="titleFormCep">
        <img src={MapIcon} alt="" />
        Buscar CEP
      </h1>
      <div className="inputFormCep">
        <input type="text" placeholder="Digite seu CEP" />
        <a>Aplicar</a>
      </div>
      <hr />
    </form>
  )
}
