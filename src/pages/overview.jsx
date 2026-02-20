import { useParams } from "react-router-dom"

export default function Overview() {

    const params = useParams();

    

    return (
        <div className="w-full flex items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">Overview Page of {params.productId}</h1>
        </div>
    )
}