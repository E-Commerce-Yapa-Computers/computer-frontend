import { BiShoppingBag } from "react-icons/bi";
import { Link, Navigate } from "react-router-dom";


export default function Header() {
    return (
        <header className="w-full bg-accent h-[100px] flex justify-center items-center sticky top-0">
            <div className="h-full flex justify-center items-center absolute left-5">
                <img src="../src/assets/logo.png" alt="logo" className="h-[100px] w-[100px]" />
                <h1 className="text-white text-2xl font-bold ml-2">Yapa Computers</h1>
            </div>
            <div className="h-full flex justify-center items-center">
                <Link to="/" className="text-white mx-4 hover:border-b-2">Home</Link>
                <Link to="/products" className="text-white mx-4 hover:border-b-2">Products</Link>
                <Link to="/about" className="text-white mx-4 hover:border-b-2">About</Link>
                <Link to="/contact" className="text-white mx-4 hover:border-b-2">Contact</Link>
            </div>
            <Link to="/cart" className="absolute right-10 cursor-pointer">
                <BiShoppingBag color="white" size={30} />
            </Link>

        </header>
    )
}