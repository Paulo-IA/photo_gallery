import { useEffect, useState } from 'react'

import { api } from '../../api'
import { AlbumType } from '../../types/AlbumType'
import { Album } from '../Album'
import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { Loading } from '../Loading'

export const ListAlbuns = () => {
    const [albunsList, setAlbunsList] = useState<AlbumType[]>([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        loadAlbuns()
    }, [])

    const loadAlbuns = async () => {
        setLoading(true)
        let json = await api.getAllAlbums()
        setLoading(false)
        setAlbunsList(json)
    }

    const handleOpenAlbum = (id: number) => {
        navigate(`/albums/${id}`)
    } 

    return (
        <>
            <C.AlbumsGrid>
                {loading &&
                    <Loading />
                }

                {!loading && albunsList.length > 0 &&
                albunsList.map((album, index) => (
                    <Album album={album} index={album.id} clickFn={handleOpenAlbum} />
                ))
                }
            </C.AlbumsGrid>
        </>
    );
}