import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import BackArrow from '../../svgs/back-arrow.svg'

export const BackButton = () => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate(-1)
    }

    return (
        <C.Container onClick={handleBackButton}>
            <C.Image src={BackArrow} />
        </C.Container>
    )
}