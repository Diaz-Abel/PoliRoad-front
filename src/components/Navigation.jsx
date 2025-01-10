import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <div>
            <Link to="/create"><h1>Crear</h1></Link>
            <Link to="/list"><h1>Listar</h1></Link>
        </div>
    )
}
