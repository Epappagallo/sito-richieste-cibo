// routes.ts

import { type RouteConfig, index, route } from "@react-router/dev/routes";

// NON è necessario importare ProtectedRoute o Profile qui

export default [
    // Home Page
    index("welcome/Welcome.tsx"), 
    
    // Nuova rotta per il Login
    route("login", "routes/login.tsx"), 

    // Rotte statiche (percorsi corretti senza './')
    // CORREZIONE: Ritorno al percorso del file. La protezione è in profile.tsx
    route("profile", "routes/profile.tsx"),
    route("merch", "routes/merch.tsx"), 

    // ROTTA DINAMICA 
    route(
        "product",                     
        "routes/product._layout.tsx",  
        [ 
            // Corretto il typo nel nome del file: product.$productId.tsx
            route(":productId", "routes/product.$productId.tsx"), 
        ]
    )
] satisfies RouteConfig;