import { useState } from "react";
import "./App.css";
import { PedidoContextProvider } from "./context/pedidoContext";
import Router from "./Router";

function App() {
  const [loading, setLoading] = useState(true);
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
      setLoading(false);
    }, 1500);
  }

  return (
    !loading && (
      <PedidoContextProvider>
        <div className="App">
          <Router />
        </div>
      </PedidoContextProvider>
    )
  );
}

export default App;
