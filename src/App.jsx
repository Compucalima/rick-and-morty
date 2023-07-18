import './App.css'
import RickMorti from './Components/RickMorti'
import imagerym from "./assets/img/RickAndMorty.png"
function App() {
  return (
    <div className='all__app'>
      <header className='back__header'>
        <div className='header__mask'>
          <img className='header__image' src={imagerym} alt="Rick and Morty Multiverse" />
        </div>
      </header>
        <RickMorti />
      <footer className='credits__footer'>
        <div className=''>
          <h3>Creado por: José Gentil Barreto</h3>
        </div>
      </footer>
    </div>
  )
}
export default App