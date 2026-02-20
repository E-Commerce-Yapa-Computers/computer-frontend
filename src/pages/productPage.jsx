import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import ProductCard from "../components/productCard"
import LoadingAnimation from "../components/loadingAnim"

export default function ProductPage() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            if (loading) {
                axios.get(import.meta.env.VITE_API_URL + "/products")
                    .then(
                        (response) => {
                            setProducts(response.data)
                            setLoading(false)
                        }
                    ).catch(
                        () => {
                            toast.error("Failed to fetch products!")
                            setLoading(false)
                        }
                    )
            }
        }, [loading]

    )
    return (
        <div className="flex items-center justify-center flex-wrap">
            {
                loading && <LoadingAnimation />
            }
            {
                products.map(
                    (item) => {
                        return (
                            <ProductCard product={item} key={item.productId} />
                        )
                    }
                )
            }
        </div>
    )
}
