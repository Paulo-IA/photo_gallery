import { AlbumContentType } from '../../types/AlbumContentType'
import * as C from './styles'

type Props = {
    item: AlbumContentType,
    clickFn: (id: number) => void
}

export const Photo = ({ item, clickFn }: Props) => {
    
    const handleClick = (id: number) => {
        clickFn(id)
    }

    return (
        <C.Container onClick={() => handleClick(item.id)}>
            <C.Photo src={`${item.thumbnailUrl}`} />
            <C.PhotoTitle>{item.title}</C.PhotoTitle>
        </C.Container>
    )
}