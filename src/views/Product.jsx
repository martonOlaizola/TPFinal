import "../styles/Product.css"
import { useLocation } from "react-router-dom"
import Layout from "../layouts/Layout"

const Product = () => {
  const { state } = useLocation()
  const prod = state?.prod

  if(!prod) {
    return ( 
      <>
      <Layout>
        <p>Producto no encontrado</p>
      </Layout>
      </>
    )
  }
  return (
    <>
    <Layout> 
      <div className="product-detail">
        <h1>{prod.title}</h1>
        <p>SKU: {prod.id}</p>
        <p>{prod.description}</p>
        <p><strong>Precio:</strong> ${prod.price}</p>
        <button>Comprar</button>
      </div>
    </Layout>
    </>
  )
}

export default Product