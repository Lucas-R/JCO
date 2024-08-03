import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"
import { Menu } from "@components/menu"
import { Home } from "@pages/Home"

const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Not Found 404</div>,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/gestao-exclusiva",
        element: <Menu type="primary"/>,
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
        path: "/imovel/:id",
        element: <div>imovel</div>,
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