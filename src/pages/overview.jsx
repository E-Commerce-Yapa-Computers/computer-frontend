import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom"
import LoadingAnimation from "../components/loadingAnim";
import ImageSlide from "../components/ImageSlide";
import formatPrice from "../utils/price-format";
import { addToCart, getCart } from "../utils/cart";

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
                        <div className="w-[50%] h-full border flex items-center justify-center">
                            <ImageSlide images={product.images} />
                        </div>
                        <div className="w-[50%] h-full flex flex-col justify-center p-5">
                            <h1 className="text-3xl font-bold mb-4">{product.name}
                                <span>
                                    {
                                        product.altNames.map((altName, index) => (
                                            <span key={index} className="font-medium text-gray-700">
                                                | {altName}
                                            </span>
                                        ))
                                    }
                                </span>
                            </h1>
                            {<p className="text-lg font-medium mb-2">
                                <span>{product.brand || ""}</span>
                                <span>-</span>
                                <span>{product.model || ""}</span>
                            </p>
                            }
                            <p className="text-sm text-gray-500 mb-4">{product.productId}</p>
                            <p className="text-2xl font-bold mb-4">
                                {formatPrice(product.price)}
                            </p>
                            {
                                product.labeledPrice &&
                                <p className="text-lg text-gray-500 line-through mb-4">
                                    {formatPrice(product.labeledPrice)}
                                </p>
                            }
                            <p className="text-md mb-4">{product.description}</p>
                            <div className="w-full h-[100px] flex items-center justify-start text-white font-bold text-xl">
                                <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 cursor-pointer" onClick={
                                    () => {
                                        addToCart(product, 1)
                                        toast.success("Added to cart!")
                                    }
                                }>Add to Cart</button>
                                <button className="px-4 py-2 bg-blue-500 rounded ml-4 hover:bg-blue-600 cursor-pointer" onClick={
                                    () => {
                                        console.log(getCart())
                                    }
                                }>Buy Now</button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}