import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>NotFound
      <p>Volver al <Link to="/home">home</Link></p>
    </div>
  )
}
