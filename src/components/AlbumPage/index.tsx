import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { api } from '../../api'
import { AlbumContentType } from '../../types/AlbumContentType'
import { AlbumType } from '../../types/AlbumType'

import { BackButton } from '../BackButton'
import { Loading } from '../Loading'
import { Photo } from '../Photo'
import * as C from './styles'

export const AlbumPage = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [albumPhotos, setAlbumPhotos] = useState<AlbumContentType[]>([])
    const [album, setAlbum] = useState<AlbumType>()
    const params = useParams()
    const albumId: number = parseInt(params.id!)

    useEffect(() => {
        getAlbumInfo()
        getAlbum()
    }, [])

    const getAlbumInfo = async () => {
        setLoading(true)
        let json = await api.getAlbumPhotos(albumId)
        setAlbumPhotos(json)
        setLoading(false)
    }

    const getAlbum = async () => {
        setLoading(true)
        let json = await api.getAlbum(albumId)
        setAlbum(json)
        setLoading(false)
    }

    const handleClickPhoto = (id: number) => {
        navigate(`/photos/${id}`)
    }

    return (
        <div>
            <BackButton />
            <C.AlbumName>{album?.title}</C.AlbumName>
            {loading &&
                <Loading />
            }
            {!loading &&
                <C.GridPhotos>
                    {albumPhotos.map((item, index) => (
                        <Photo 
                            key={index}
                            item={item}
                            clickFn={handleClickPhoto}
                        />
                    ))}
                </C.GridPhotos>
            }
        </div>
    )
}