import { useState } from "react";
import { createContext } from "react";

export const PedidoContext = createContext()

export function PedidoContextProvider({ children }){
    const [pedido, setPedido] = useState(39)
    return(
        <PedidoContext.Provider value={{pedido, setPedido}}>
            {children}
        </PedidoContext.Provider>
    )
}