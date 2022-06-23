import './style.css'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { Forms } from '../../components/forms'
import { useParams } from 'react-router-dom'
import api from '../../utils/api'
import { useEffect, useState } from 'react'

export function Product() {
  const [product, setProduct] = useState()
  const { id } = useParams()
  useEffect(() => {
    if (id) {
      api.get(`produtos/${id}`).then(response => {
        if (response.data.response.length) {
          const produto = response.data.response[0]
          setProduct({
            id: produto.id,
            price: produto.preco,
            url: produto.url,
            title: produto.titulo,
            description: produto.descricao,
            brand: produto.marca,
            color: produto.cor,
            category: produto.categoria,
            subcategory: produto.subcategoria,
          })
        }
      })
    }
  }, [id])

  function onSendForm(product) {
    if (id) {
      console.log(product)
      api
        .put(`produtos/${id}`, {
          preco: product.price,
          url: product.url,
          titulo: product.title,
          descricao: product.description,
          marca: product.brand,
          cor: product.color,
          categoria: product.category,
          subcategoria: product.subcategory,
        })
        .then(() => {
          alert('Produto editado com sucesso')
        })
    } else {
      api
        .post('produtos', {
          preco: product.price,
          url: product.url,
          titulo: product.title,
          descricao: product.description,
          marca: product.brand,
          cor: product.color,
          categoria: product.category,
          subcategoria: product.subcategory,
        })
        .then(() => {
          alert('Produto adicionado com sucesso')
        })
    }
  }

  return (
    <>
      <Header />
      <main>
        <div className="titlesForms">
          <h1 className="titleFormsH1">Venha vender com a gente!</h1>
          <p className="titleFormsP">Cadastre seu produto e venda na Lojinha</p>
        </div>
        {(!id || (id && product)) && (
          <Forms product={product} onSendForm={onSendForm} />
        )}
      </main>

      <Footer />
    </>
  )
}
