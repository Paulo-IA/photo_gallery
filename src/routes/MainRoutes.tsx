import { useRoutes } from "react-router-dom"
import { AlbumPage } from "../components/AlbumPage";
import { ListAlbuns } from "../components/ListAlbuns"
import { PhotoPage } from "../components/PhotoPage";
import { NotFound } from "../pages/NotFound"

export const MainRoutes = () => {
    return useRoutes([
        { path: '/albums', element: <ListAlbuns /> },
        { path: '/albums/:id', element: <AlbumPage /> },
        { path: '/photos/:id', element: <PhotoPage /> },
        { path: '*', element: <NotFound /> },
    ]);
}