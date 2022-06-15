import './style.css'

export function Footer(){
  return <footer>
    <ul className='navMenuFooter'>
      <li>Início</li>
      <li>Produtos</li>
      <li>Anunciar</li>
      <li>Carrinho</li>
    </ul>
    <img className='logoLojinhaFooter' src="./imgs/Logo Footer" alt="Logo da Lojinha" />
    <div className='socicalMediaLogosFooter'>
      <img src="./imgs/Facebook Logo" alt="Logo do Facebook" />
      <img src="./imgs/Twitter Logo" alt="Logo do Twitter" />
      <img src="./imgs/Instagram Logo" alt="logo do Instagram" />
    </div>
    <p className='footerMessage'>Feito pela Infojr UFBA com Figma, React e muito 💚</p>
  </footer>
}