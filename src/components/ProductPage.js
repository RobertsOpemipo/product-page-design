import React, {useState} from 'react';

const ProductPage = () => {
    const [images,setImages] = useState({
        img1 : "https://cdn.pixabay.com/photo/2016/04/12/14/08/shoe-1324431_1280.jpg",
        img2: "https://cdn.pixabay.com/photo/2014/04/05/11/38/nike-316449_1280.jpg",
        img3: "https://cdn.pixabay.com/photo/2020/09/17/06/26/sneakers-5578113_1280.jpg",
        img4: "https://cdn.pixabay.com/photo/2016/10/21/20/34/running-1759148_1280.jpg",
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1)
    return (
        <div className='gap-16 flex flex-col justify-between lg:flex-row lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt='' className='w-full h-full aspect-square object-cover rounded-xl'/> 
                <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt='' className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img3} alt='' className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt='' className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                    <img src={images.img2} alt='' className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                </div>
            </div>

            {/*  About*/}
            <div className='flex flex-col gap-4'>
                <div >
                    <span className='text-violet-600 font-semibold'>Special Sneaker</span>
                    <h1 className='text-3xl font-bold'>Nike Invincible</h1>
                </div>
                <p className='text-gray-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod deleniti voluptatum
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod doloremque nih
                    aperiam voluptatum cumque? Ipsa molestias repellat qui recus
                </p>
                <h6 className='text-2xl font-semibold'>$ 199.00</h6>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className=' py-2 px-4 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <button className='bg-violet-800 text-white font-semibold py-3 px-6 rounded-xl'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage