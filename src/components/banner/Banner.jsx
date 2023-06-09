import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";

const Banner = () => {
    const [bannerContent, setBannerContent] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/banner')
            .then(res => res.json())
            .then(data => {
                setBannerContent(data)
            })
    }, [])
    if (bannerContent.length === 0) {
        return <div className="h-96 flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    return (
        <div>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                className="text-center"
            >
                {
                    bannerContent.map((banner, index) => {
                        return <div
                            key={index}
                            className="h-40 lg:h-96 relative bg-cover bg-no-repeat"
                            style={{ backgroundImage: `url(${banner.imageURL})`, backgroundPosition: "center" }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-70 lg:flex flex-col justify-center items-center px-8">
                                <div className="grid grid-cols-3 w-full">
                                    <div className="text-left col-span-2">
                                        <h3 className="text-white  lg:text-5xl">{banner.text}</h3>
                                        <button className="btn btn-sm mt-3 btn-outline text-white hover:bg-slate-50 hover:text-black">
                                            Explore
                                        </button>
                                    </div>
                                    <div className="flex items-center">
                                        <img src={banner.imageURL} className="w-40" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </Carousel>
        </div>
    );
};

export default Banner;