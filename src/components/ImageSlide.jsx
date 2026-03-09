import { useState } from "react";

export default function ImageSlide(props) {
    const images = props.images;
    const [activeImage, setActiveImage] = useState(0);

    function getClasses(index) {
        return index === activeImage ? 
        "h-[100px] w-[100px] object-contain rounded-[20px] shadow-md border-4 border-accent cursor-pointer" :
         "h-[100px] w-[100px] object-contain rounded-[20px] shadow-md cursor-pointer";
    }

    return (
        <div className="w-[500px] h-[600px] border flex flex-col">
            <img src={images[activeImage]} className="h-[500px] w-full object-cover" />
            <div className="w-full h-[100px] flex flex-row px-4 gap-4 items-center justify-center">
                {images.map((img, index) => (
                    <img 
                    onClick={() => {setActiveImage(index)}}
                    key={index} src={img} className={getClasses(index)} />
                ))}
            </div>
        </div>
    )
}