import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Autoplay} from 'swiper'
import XSalada from '../../assets/XSalada.jpg'
import XBacon from '../../assets/XBacon.jpg'
import XCheedar from '../../assets/XCheedar.jpg'
import S from './Slide.module.css'
import 'swiper/css/navigation'
import 'swiper/css';

const Slide = () => {
  return (
    <Swiper
    centeredSlides={true} 
    loop={true}
    spaceBetween={30}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[Navigation, Autoplay]}
    navigation={true}
    grabCursor={true}
    className={S.carrousel}
    >
    <SwiperSlide><img src={XSalada} /></SwiperSlide>
    <SwiperSlide><img src={XBacon} /></SwiperSlide>
    <SwiperSlide><img src={XCheedar}  /></SwiperSlide>

    </Swiper>
  )
}

export default Slide