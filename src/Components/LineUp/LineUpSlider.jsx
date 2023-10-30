import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useRecoilValue } from 'recoil';
import { cars } from '../../atom';
import { styled } from 'styled-components';

const LineUpCarousel = styled(Carousel)`
    height: 50px;
`;

export default function LineUpSlider() {
    const car = useRecoilValue(cars);

    return (
        <LineUpCarousel
            autoPlay={true}
            infiniteLoop={true}
            interval="5000"
            showThumbs={true}
        >
            {car.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.image_path} alt={item.title} />
                    </div>
                );
            })}
        </LineUpCarousel>
    );
}
