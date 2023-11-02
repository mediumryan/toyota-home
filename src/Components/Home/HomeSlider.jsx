import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useRecoilValue } from 'recoil';
import { HomeSliderArr } from '../../atom';
import { styled } from 'styled-components';

const HomeSliderWrapper = styled.div`
    padding: 0 1rem;
`;

export default function HomeSlider() {
    const homeSlider = useRecoilValue(HomeSliderArr);

    return (
        <HomeSliderWrapper>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval="5000"
                showThumbs={false}
                showStatus={false}
            >
                {homeSlider.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.image_path} alt={item.title} />
                        </div>
                    );
                })}
            </Carousel>
        </HomeSliderWrapper>
    );
}
