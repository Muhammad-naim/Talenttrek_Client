import { useEffect, } from "react";
import Heading from "../heading/Heading";
import useCourses from "../../hooks/useCourses";
import Swiper from 'react-id-swiper';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ClassesCard from "../shared/classesCard/ClassesCard";
import useSelect from "../../hooks/useSelect";

const DiscountPage = () => {
    const [courses] = useCourses()
    const { handleselect } = useSelect();
    const params = {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    }   

        useEffect(() => {
            const secondElement = document.querySelector('.second span');
            const hourElement = document.querySelector('.hour span');
            const intervalId = setInterval(() => {
                let value = parseInt(getComputedStyle(secondElement).getPropertyValue('--value'), 10);
                let hourValue = parseInt(getComputedStyle(hourElement).getPropertyValue('--value'), 10);
                value--;
                if (value === 0) {
                    value = 59
                    hourValue--
                }
                secondElement.style.setProperty('--value', value);
                hourElement.style.setProperty('--value', hourValue);
            }, 1000);

            // Clean up the interval when the component unmounts
            return () => {
                clearInterval(intervalId);
            };
        }, []);

        useEffect(() => {
            AOS.init();
        }, [])


        return (
            <div>
                <Heading
                    Heading={"Special Discount"}
                    subHeading={"grab your desired course now"}
                />
                <div className="flex items-center mb-3">
                    <div>
                        <h2 className="text-3xl font-semibold">Ends in: </h2>
                    </div>
                    <div className="flex gap-5">
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 5 }}></span>
                            </span>
                            days
                        </div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div>
                            <span className="hour countdown font-mono text-4xl">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div>
                            <span className=" second countdown font-mono text-4xl">
                                <span style={{ "--value": 6 }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
                <div
                >
                    <div className="overflow-x-hidden">
                        <Swiper {...params} >
                            {
                                courses.map(course => {
                                    return <div
                                        key={course._id}
                                        className="child:h-[312px]"
                                        data-aos="fade-up"

                                    >
                                        <ClassesCard
                                            course={course}
                                            badgeText={'Hot'}
                                            handleselect={handleselect}

                                        />
                                    </div>
                                })
                            }
                        </Swiper>
                    </div>

                </div>
            </div>
        );
    };

    export default DiscountPage;