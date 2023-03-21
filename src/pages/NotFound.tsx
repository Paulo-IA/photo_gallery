import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    const navigate = useNavigate()

    const handleClickButton = () => {
        navigate(-1)
    }

    return (
        <div>
            Página não encontrada
            <button onClick={handleClickButton}>Voltar</button>
        </div>
    )
}