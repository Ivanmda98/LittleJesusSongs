
import './App.css'
import HeaderComponent from './components/headerComponent';
import Albums from './pages/albums';
import Bonus from './pages/bonus';
import Inicio from './pages/inicio';

function App() {
  
  return (
    <>
      <div>
        <HeaderComponent></HeaderComponent>
      </div>
        <Inicio></Inicio>
        <Albums></Albums>
        <Bonus></Bonus>
    </>
  )
}

export default App
