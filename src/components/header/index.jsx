import './style.css'
import LogoSvg from '../../assets/Logo.svg'
import SearchIcon from '../../assets/SearchIcon.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <>
      <input type="checkbox" id="checkboxMenuHamburger" />
      <header id="mainHeader">
        <figure>
          <img src={LogoSvg} alt="Logo Lojinfo" />
        </figure>
        <label className="searchInput">
          <input type="text" placeholder="Pesquise por um produto" />
          <img src={SearchIcon} alt="Icone de Pesquisa" />
        </label>
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
            <li>
              <Link to="/product">Anunciar</Link>
            </li>
            <li className="buttonCarrinho">
              <Link to="/cart" type="button">
                Carrinho
              </Link>
            </li>
          </ul>
        </nav>
        <label className="buttonHamburger" htmlFor="checkboxMenuHamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </header>
    </>
  )
}
