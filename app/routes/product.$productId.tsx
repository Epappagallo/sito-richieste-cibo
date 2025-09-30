import { useLoaderData, useParams } from "react-router-dom";
import React from 'react';

// Definizione del tipo atteso per i dati del prodotto
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
}

/**
 * Loader function per fetchare i dati del prodotto in base all'ID.
 * @returns I dati del prodotto o un Response di errore.
 */
export async function loader({ params }: { params: { productId: string } }): Promise<Product | Response> {
    const { productId } = params;
    
    try {
        // 1. Fetch dei dati tramite l'ID dinamico
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

        if (response.status === 404) {
             // 2. Gestione Prodotto non trovato (404)
            return new Response("Prodotto non trovato (ID non valido).", { status: 404 });
        }

        if (!response.ok) {
            // Gestione di altri errori HTTP
            throw new Error(`Errore HTTP! Stato: ${response.status}`);
        }

        const product = await response.json() as Product;
        return product;

    } catch (error) {
        console.error("Errore nel caricamento del prodotto:", error);
        // Lancia un errore per permettere a ErrorBoundary di gestirlo
        throw new Response("Errore del server durante il recupero dei dati del prodotto.", { status: 500 });
    }
}


/**
 * Componente per la visualizzazione del dettaglio del prodotto.
 */
export default function ProductDetail() {
    // useLoaderData recupera i dati restituiti dal loader
    const product = useLoaderData() as Product; 

    // useParams viene usato qui solo per mostrare l'ID nell'URL
    const params = useParams();
    const productId = params.productId; 

    return (
        <main className="pt-16 p-4 container mx-auto max-w-4xl">
            <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
                Dettaglio Prodotto #{productId}
            </h1>
            
            <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-8 space-y-6">
                
                {product ? (
                    <>
                        {/* 3. Mostra il titolo del prodotto */}
                        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                            {product.title}
                        </h2>
                        
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Descrizione</h3>
                            {/* 4. Mostra la descrizione del prodotto */}
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-wrap">
                                {product.description}
                            </p>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                             <span className="text-2xl font-extrabold text-green-600 dark:text-green-400">
                                ${product.price?.toFixed(2) || 'N/A'}
                            </span>
                             <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                                {product.category}
                            </span>
                        </div>
                    </>
                ) : (
                    <p className="text-xl text-red-500">Impossibile caricare i dati del prodotto.</p>
                )}
            </div>
        </main>
    );
}
