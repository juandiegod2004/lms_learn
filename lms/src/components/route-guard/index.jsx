import { Fragment } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function RouteGuard({ authenticated, user, element }) {
    const location = useLocation();

    console.log("Authenticated:", authenticated, "User:", user, "Element:", element);

    // Redirige al usuario no autenticado a la página de autenticación
    if (!authenticated && !location.pathname.includes("/auth")) {
        return <Navigate to="/auth" />;
    }

    // Redirige a usuarios autenticados que no sean instructores cuando intentan acceder a rutas de "instructor" o "/auth"
    if (
        authenticated && 
        user?.role !== "instructor" &&
        (location.pathname.includes("instructor") || location.pathname.includes("/auth"))
    ) {
        return <Navigate to="/home" />;
    }

    // Redirige a usuarios autenticados como instructores a la página de instructor si están en otra ruta
    if (authenticated && user.role === "instructor" && !location.pathname.includes("instructor")) {
        return <Navigate to="/instructor" />;
    }

    // Verifica si `element` es un componente de función o un nodo JSX
    if (typeof element === 'function') {
        const Component = element;
        return <Component />;
    }

    return <Fragment>{element}</Fragment>;
}

export default RouteGuard;
