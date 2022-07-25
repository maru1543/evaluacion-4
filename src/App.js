import ReactDOM from "react-dom/client"
import {
  Routes,
  Route,
} from "react-router-dom"
import Inicio from "./components/Inicio"
import Pokemon from "./components/Pokemon"
import Recomendaciones from "./components/Recomendaciones"

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/pokedex' element={<Pokemon/>}/>
        <Route path='/recomienda' element={<Recomendaciones/>}/>
      </Routes>

    </>
  );
}

export default App;
