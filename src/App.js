// importamos el bootstrap que debe estar instalado
import "bootstrap/dist/css/bootstrap.min.css";
// importamos el componente BrowserRouter de la libreria react-router-dom instalada
import { BrowserRouter, Routes, Route } from "react-router-dom"
// Importamos el componente Navbar
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto.jsx";
// Importamos las vistas (que estan en /views) que se van a enlazar a las rutas a definir con Route
import Home from "./views/Home.jsx";
import NotFound from "./views/NotFound.jsx";


function App() {
  return (
    <div className="App">
      {/* hacemos uso del componente BrowseRouter importado, para envolver toda la aplicacion */}
      <BrowserRouter>
        {/* llamada al componente de Navegacion Navbar importado de /components */}
        <Navbar />
        {/* Routes envuelve las diversas rutas, cada ruta se define con Route asociada a una vista importada */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
