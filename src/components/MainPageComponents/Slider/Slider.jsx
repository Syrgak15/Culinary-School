import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation,Autoplay,Pagination} from 'swiper/modules';
import styles from './SliderComponent.modules.css'
import {useSelector, useDispatch} from 'react-redux';
import {getUsersList} from "../../../store/MainPageSlice";


const SliderComponent = ({title}) => {

    const lists = useSelector(state => state.mainReducer.users);
    const dispatch = useDispatch();

    const getLists = () => {
        dispatch(getUsersList());
    }
    useEffect(() => {
        getLists()
    }, [])


    return (
        <div className='slider-wrapper'>
            <div className="container">
                <div className="slide-wrapper__title">
                    <h2>{title}</h2>
                </div>
                <Swiper
                    modules={[Navigation,Autoplay,Pagination]}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation
                    spaceBetween={50}
                    slidesPerView={2}
                    loop
                >

                    {lists && lists.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className='slider-slide'
                        >
                            <img src="https://cdn-icons-png.flaticon.com/512/1211/1211059.png" alt={item.id}/>
                            <h2>{item.name}</h2>
                            <h2>{item.username}</h2>
                            <span>{item.email}</span>
                            <span>{item.phone}</span>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
};

export default SliderComponent;