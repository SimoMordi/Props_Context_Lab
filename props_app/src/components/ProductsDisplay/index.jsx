
const ProductsDisplay = ({products, setProducts}) => {

    const handleProductClick = (id) => {
      setProducts(products.map(product => 
          product.id === id ? {...product, inCart: true} : product
      ));
    };
    
    return (
        <div>
            {products.map((product) => {
                return <div key={product.name} onClick={() => handleProductClick(product.name)}>{product.name}</div>
            })}
        </div>
    )
}

export default ProductsDisplay;



      
        // 1. make a new products array (from the old state)
        // 2. set inCart = true for the clicked product
        // 3. set state to this new products array
    

  