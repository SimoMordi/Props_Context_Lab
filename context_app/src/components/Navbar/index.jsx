import { Link } from "react-router-dom"
import { primaryContext } from "../../Context/primaryContext"
import { useContext } from "react"

const Navbar = () => {
  const { products } = useContext(primaryContext)
  return (
    <div>
      {/* we need products array here */}
        <div>Random Product: {products[0].name}</div>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Navbar