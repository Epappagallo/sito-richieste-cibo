import { Outlet } from "react-router-dom";

/**
 * Componente Layout Genitore per tutte le rotte sotto /product.
 * Garantisce che la navigazione nidificata funzioni correttamente.
 */
export default function ProductLayout() {
  // L'Outlet renderizzerà il componente del prodotto specifico (product.$productId.tsx)
  return <Outlet />;
}
