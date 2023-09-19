
const ProductsDisplay = ({products, setProducts}) => {

    
        // we have the id of the clicked property
        const handleProductClick = (name) => {
          setProducts(products.map(product => 
              product.name === name ? {inCart: true} : product
          ));
      };
            
        // 1. make a new products array (from the old state)
        // 2. set inCart = true for the clicked product
        // 3. set state to this new products array
    

  return (
  <div>
        {/* we need the products array here */}
      {products.map((product) => {
          return <div key={product.name} onClick={() => handleProductClick(product.name)}>{product.name}</div>
        })}
  </div>
  )
}

export default ProductsDisplay