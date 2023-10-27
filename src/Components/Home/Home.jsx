import { useRecoilValue } from 'recoil';
import { headerHeightState } from '../../atom';
import { styled } from 'styled-components';
import HomeSlider from './HomeSlider';
import HomeBanner from './HomeBanner';

const HomeWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export default function Home() {
    const headerHeight = useRecoilValue(headerHeightState);

    return (
        <HomeWrapper style={{ marginTop: `${headerHeight}px` }}>
            <HomeBanner />
            <HomeSlider />
        </HomeWrapper>
    );
}
