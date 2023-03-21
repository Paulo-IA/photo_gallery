import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';
import { AlbumContentType } from '../../types/AlbumContentType';
import { BackButton } from '../BackButton';
import { Loading } from '../Loading';
import * as C from './styles'

export const PhotoPage = () => {
    const params = useParams()
    const [loading, setLoading] = useState(false)
    const [photoInfo, setPhotoInfo] = useState<AlbumContentType>()
    const photoId: number = parseInt(params.id!);

    useEffect(() => {
        getPhoto();
    }, [])

    const getPhoto = async () => {
        setLoading(true)
        let json = await api.getPhoto(photoId)
        setPhotoInfo(json)
        setLoading(false)
    }


    return (
        <C.Container>
            <BackButton />
            <C.PhotoTitle>{photoInfo?.title}</C.PhotoTitle>
            {loading && 
                <Loading />
            }

            {!loading && photoInfo &&
                <C.PhotoContainer>
                    <C.Photo src={photoInfo.url} />
                </C.PhotoContainer>
            }
        </C.Container>
    );
}