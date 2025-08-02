import { useEffect, useState } from "react"
import { getProducts } from "../../services/productService"
import "./Main.css"
import { Link } from "react-router-dom"

const Main = () => {
    const [productos, setProducts] = useState([])
    useEffect(() => {
        getProducts().then((data) => {
            console.log("Productos obtenidos:", data)
            setProducts(data)
    })
}, [])

    return ( 
        <main>
            <section className="banner">
                <h1>Bienvenidos a la tienda</h1>
                <h2>Encuentre sus productos favoritos</h2>
            </section>
            <section className="productList">
                {
                    productos.length === 0 && <p>No hay productos disponibles</p>
                }
                {
                    productos.map((prod => {
                        return (
                            <div className="product" key={prod.id}>
                                <h2>{prod.title}</h2>
                                <p>SKU: {prod.sku}</p>
                                <p>${prod.price}</p>
                                <p>{prod.description}</p>
                                <Link to="/product"
                                state={{prod}}
                                >
                                <button onClick={() => localStorage.setItem("prod", JSON.stringify(prod))}>
                                    Comprar
                                </button>
                                </Link>
                            </div>
                        )
                    }))
                }
            </section>
        </main>
    )
}

export default Main
