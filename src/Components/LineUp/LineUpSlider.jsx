import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useRecoilValue } from 'recoil';
import { cars, nowCarType } from '../../atom';
import { styled } from 'styled-components';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const LineUpCarousel = styled(Carousel)`
    height: 250px;
    a {
        margin: 12px;
        padding: 12px 24px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        &:hover {
            background-color: var(--bg-200);
        }
        img {
            width: 100%;
        }
        span {
            font-size: 1rem;
            margin-top: 12px;
        }
    }
`;

export default function LineUpSlider() {
    const car = useRecoilValue(cars);
    const nowType = useRecoilValue(nowCarType);

    return (
        <LineUpCarousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {car
                .filter((a) => a.type === nowType)
                .map((item) => {
                    return (
                        <a href={item.url} target="blank" key={item.id}>
                            <img src={item.image_path} alt={item.name} />
                            <span>{item.japanese}</span>
                        </a>
                    );
                })}
        </LineUpCarousel>
    );
}
