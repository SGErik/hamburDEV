import "./App.css";
import { PedidoContextProvider } from "./context/pedidoContext";
import  Router  from "./routes";


function App() {

  return (
    <PedidoContextProvider>
      <div className="App">
        <Router />
      </div>
    </PedidoContextProvider>
  );
}

export default App;
