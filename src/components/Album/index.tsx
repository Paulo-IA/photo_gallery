import { AlbumType } from '../../types/AlbumType'
import * as C from './styles'

import pictureSvg from '../../svgs/picture.svg'

type Props = {
    album: AlbumType;
    index: number;
    clickFn: (id: number) => void;
}

export const Album = ({ album, index, clickFn }: Props) => {
    
    const handleClickAlbum = (id: number) => {
        clickFn(id)
    }
    
    return (
        <C.Container onClick={() => handleClickAlbum(index)}>
            <C.Title>
                <C.Icon src={pictureSvg} />
                <C.AlbumNumber>Album {index}</C.AlbumNumber>
            </C.Title>
            <C.AlbumTitle>{album.title}</C.AlbumTitle>
        </C.Container>
    )
}