import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom"

export default function Overview() {

    const params = useParams();

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/products/" + params.productId).then(
            (response) => {
                console.log(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
                toast.error("Failed to fetch product details!")
            }
        )
    }, []);


    return (
        <div className="w-full flex items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">Overview Page of {params.productId}</h1>
        </div>
    )
}