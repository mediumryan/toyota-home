import { styled } from 'styled-components';
import LineUpSlider from './LineUpSlider';
import LineUpMenu from './LineUpMenu';

const LineUpOuter = styled.section`
    padding: 5rem 10rem;
`;

const LineUpInner = styled.div``;

const LineUpTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 3rem;
`;

export default function LineUp() {
    return (
        <LineUpOuter>
            <LineUpInner>
                <LineUpTitle>ラインアップ</LineUpTitle>
                <LineUpMenu />
                <LineUpSlider />
            </LineUpInner>
        </LineUpOuter>
    );
}
