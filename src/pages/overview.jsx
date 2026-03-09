import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom"
import LoadingAnimation from "../components/loadingAnim";
import ImageSlide from "../components/ImageSlide";

export default function Overview() {

    const params = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/products/" + params.productId).then(
            (response) => {
                setProduct(response.data);
            }
        ).catch(
            (error) => {
                console.log(error)
                toast.error("Failed to fetch product details!")
            }
        )
    }, []);


    return (
        <div className="w-full h-[calc(100vh-100px)] flex items-center  justify-center bg-amber-300">
            {
                product == null ? <LoadingAnimation /> :
                    <div className="w-full h-full flex">
                        <div className="w-[50%] h-full border">
                            <ImageSlide images={product.images}/>
                        </div>
                        <div className="w-[50%] h-full border">

                        </div>
                    </div>
            }
        </div>
    )
}