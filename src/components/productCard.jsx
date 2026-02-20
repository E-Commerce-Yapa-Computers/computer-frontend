import { Link } from 'react-router-dom';
import formatPrice from '../utils/price-format.js';

export default function ProductCard(props) {
    const product = props.product
    return (
        <Link to={"/overview/" + product.productId} className="w-[300px] h-[400px] m-4 rounded-lg shadow-lg bg-white overflow-hidden hover:[&_.main-image]:opacity-0 relative">
            <div className="bg-white w-full absolute top-0 left-0">
                <img src={product.images[1]} alt={product.name} className="w-full h-[250px] object-cover" />
            </div>

            <div className="bg-white main-image w-full absolute top-0 left-0 transition-opacity duration-300">
                <img src={product.images[0]} alt={product.name} className="w-full h-[250px] object-cover" />
            </div>

            <div className="h-[150px] w-full absolute bottom-0 flex justify-center flex-col p-2">
                <span className="text-xs opacity-50">{product.productId}</span>
                <h1 className="text-lg font-semibold">{product.name}</h1>
                {
                    product.labeledPrice > product.price && <p className="text-red-500 line-through opacity-60 text-sm">{formatPrice(product.labeledPrice)}</p>
                }
                <p className="text-green-500 font-bold text-md">{formatPrice(product.price)}</p>

            </div>


        </Link>
    )

}