import React, {useState} from 'react';

const ProductPage = () => {
    const [images,setImages] = useState({
        img1 : "https://cdn.pixabay.com/photo/2016/04/12/14/08/shoe-1324431_1280.jpg",
        img2: "https://cdn.pixabay.com/photo/2014/04/05/11/38/nike-316449_1280.jpg",
        img3: "https://cdn.pixabay.com/photo/2020/09/17/06/26/sneakers-5578113_1280.jpg",
        img4: "https://cdn.pixabay.com/photo/2016/10/21/20/34/running-1759148_1280.jpg",
    })

    const [activeImg, setActiveImage] = useState(images.img1)
    return (
        <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-6'>
                <img src={activeImg} alt='' className='w-full h-full aspect-square object-cover'/> 
                <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt='' className='w-24 h-24 rounded-md'/>
                    <img src={images.img1} alt='' className='w-24 h-24 rounded-md'/>
                    <img src={images.img1} alt='' className='w-24 h-24 rounded-md'/>
                    <img src={images.img1} alt='' className='w-24 h-24 rounded-md'/>
                </div>
            </div>
        </div>
    )
}

export default ProductPage