import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Not Found 404</div>,
    },
    {
        path: "/",
        element: <div>Home</div>,
    },
    {
        path: "/gestao-exclusiva",
        element: <div>Gestão Exclusiva</div>,
    },
    {
        path: "/homepricing",
        element: <div>Homepricing</div>,
    },
    {
        path: "/sobre",
        element: <div>Jardins&co</div>,
    },
    {
        path: "/anuncie",
        element: <div>Anuncie</div>,
    },
    {
        path: "/contato",
        element: <div>Contato</div>,
    },
    {
        path: "/gestao-exclusiva",
        element: <div>Gestão Exclusiva</div>,
    },
    {
        path: "/busca",
        element: <div>Busca</div>,
    },
    {
        path: "/blog",
        element: <div>Blog</div>,
    },
    {
        path: "/blog/post/:name",
        element: <div>post</div>,
    },
    {
        path: "/blog/categoria/:name",
        element: <div>Categoria</div>,
    },
    {
        path: "/bairros/:name",
        element: <div>Bairro</div>,
    },
    {
        path: "/lp/:name",
        element: <div>Landing page</div>,
    },
]);

export function Router() {
    return(
        <RouterProvider router={router} />
    )
}