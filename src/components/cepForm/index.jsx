import { useState } from 'react'
import toast from 'react-hot-toast'
import MapIcon from '../../assets/mapIcon.svg'
import api from '../../utils/api'

import './style.css'

export function CepForm(props) {
  const [cep, setCep] = useState('')

  function handleGetCepError() {
    toast.error('Endereço não localizado.')
  }

  function handleGetCep() {
    if (cep)
      api
        .get(`cep/${cep}`)
        .then(response => {
          let addressInfo
          if (response.data.response)
            addressInfo = {
              street: response.data.response.logradouro,
              city: response.data.response.localidade,
              uf: response.data.response.uf,
            }
          else toast.error('Endereço não localizado')
          props.onGetCep(addressInfo)
        })
        .catch(err => {
          toast.error('Endereço não localizado')
          props.onGetCep(undefined)
        })
  }
  return (
    <form id="formCep">
      <h1 className="titleFormCep">
        <img src={MapIcon} alt="" />
        Buscar CEP
      </h1>
      <div className="inputFormCep">
        <input
          type="text"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={e => setCep(e.target.value)}
        />
        <a style={{ fontWeight: cep ? 600 : 400 }} onClick={handleGetCep}>
          Aplicar
        </a>
      </div>
      <hr />
    </form>
  )
}
