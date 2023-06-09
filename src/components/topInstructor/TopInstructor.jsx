import Heading from "../heading/Heading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Topinstructor.css";
import { EffectCards } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useInstructors from "../../hooks/useInstructors";
import { useEffect, useRef } from "react";

const TopInstructor = () => {
    const targetRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                AOS.refresh();
            } 
          });
        });
        if (targetRef.current) {
          observer.observe(targetRef.current);
        }
        return () => {
          if (targetRef.current) {
            observer.unobserve(targetRef.current);
          }
        };
    }, []);
    
    useEffect(() => {
        AOS.init();
    }, [])

    const [instructors] = useInstructors()
    return (
        <div className="my-4 overflow-x-hidden">
            <Heading
                Heading={"Meet Our Popular Instructor"}
                subHeading={"World class instructors are ready to teach you"}
            />
            <div className="grid lg:grid-cols-2 gap-2 lg:px-8">
                <div
                    ref={targetRef}
                    data-aos="fade-right"
                    data-aos-once="false"
                    className="lg:pl-12 flex flex-col text-center lg:text-left justify-center">
                    <p className="text-lg mb-3">
                        Learning from our top instructors is an investment in your linguistic future. Their expertise and dedication to your success will propel you towards fluency and open doors to new opportunities in your personal and professional life.
                    </p>
                    <div>
                        <button className="btn btn-outline btn-sm ">Explore</button>
                    </div>
                </div>
                <Swiper
                    data-aos="fade-left"
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    {
                        instructors.map(instructor => {
                            return <SwiperSlide
                                key={instructor._id}
                                className="bg-base-200 border-2 shadow-xl grid grid-rows-2 text-black font-normal "
                            >
                                <>
                                    <div className="">
                                        <img src={instructor.imageURL} className="border border-slate-900 rounded-full h-32 mx-auto  " />
                                    </div>
                                    <div className="text-center flex-col justify-start px-1">
                                        <p className="text-base font-semibold">{instructor.name}</p>
                                        <p className="text-base">{instructor.email}</p>
                                        <p className="text-base">Courses: {instructor.courses}</p>
                                        <button className="btn btn-primary btn-xs">See details</button>
                                    </div>
                                </>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>

        </div >
    );
};

export default TopInstructor;