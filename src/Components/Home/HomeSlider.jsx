import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useRecoilValue } from 'recoil';
import { HomeSliderArr } from '../../atom';

export default function HomeSlider() {
    const homeSlider = useRecoilValue(HomeSliderArr);

    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval="5000"
            showThumbs={false}
        >
            {homeSlider.map((item) => {
                return (
                    <div>
                        <img src={item.image_path} alt={item.title} />
                    </div>
                );
            })}
        </Carousel>
    );
}
