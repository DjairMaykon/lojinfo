import './style.css'
import LogoSvg from '../../assets/Logo.svg'
import SearchIcon from '../../assets/SearchIcon.svg'
import { Link } from 'react-router-dom'

export function Header(props) {
  const { onSearch } = props
  return (
    <>
      <input type="checkbox" id="checkboxMenuHamburger" />
      <header id="mainHeader">
        <div className="headerContainer">
          <figure>
            <Link to="/">
              <div className="logoLojinhaHeaderContainer">
                <img src={LogoSvg} alt="Logo Lojinfo" />
              </div>
            </Link>
          </figure>
          <label className="searchInput">
            <input
              type="text"
              onChange={e => onSearch(e.target.value)}
              placeholder="Pesquise por um produto"
            />
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
        </div>
      </header>
    </>
  )
}
