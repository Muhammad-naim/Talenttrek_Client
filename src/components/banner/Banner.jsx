import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from '../../assets/blob-haikei (1).png'
import img2 from '../../assets/blob-haikei (2).png'
import img3 from '../../assets/blob-haikei (3).png'
import img4 from '../../assets/blob-haikei (4).png'
import img5 from '../../assets/blob-haikei (5).png'
import img6 from '../../assets/blob-scene-haikei.png'
import { useEffect, useState } from "react";

const Banner = () => {
    const imgs = [img, img2, img3, img4, img5, img6]
    const [bannerContent, setBannerContent] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/banner')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBannerContent(data)
            })
    }, [])
    console.log(bannerContent);
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
                            <div className="absolute inset-0 bg-black bg-opacity-70 lg:flex flex-col justify-center items-center px-5">
                                <div className="grid grid-cols-3 w-full">
                                    <div className="text-left col-span-2">
                                        <h3 className="text-white  lg:text-5xl">{banner.text}</h3>
                                        <button className="btn btn-sm mt-3">
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