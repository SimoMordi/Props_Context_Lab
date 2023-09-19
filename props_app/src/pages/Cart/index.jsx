
const Cart = ({products}) => {
  return (
    <div>
        {/* we need products array here */}
        {products.filter((product) => {
            if (product.inCart) {
                return trueccd
            } else {
                return false
            }
          }).map((product) => {
            return (
                <div key={product.name}>
                    {product.name} - ${product.price}
                </div>
            );
        })}
    </div>
  )
}

export default Cart