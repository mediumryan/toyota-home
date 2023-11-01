import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { styled } from 'styled-components';

const TemplateRightWrapper = styled.div`
    order: ${(props) => (props.index % 2 === 0 ? 2 : 1)};
    margin-left: ${(props) => (props.index % 2 === 0 ? '2rem' : 0)};
    margin-right: ${(props) => (props.index % 2 === 0 ? 0 : '2rem')};
    width: 65%;
`;

export default function TemplateRight({ item, index }) {
    return (
        <TemplateRightWrapper index={index}>
            <Carousel infiniteLoop={true} showThumbs={false} showStatus={false}>
                {item.images.map((img) => {
                    return (
                        <div key={img.id}>
                            <img
                                src={img.image_url}
                                alt={`${item} - ${index}`}
                            />
                        </div>
                    );
                })}
            </Carousel>
        </TemplateRightWrapper>
    );
}
