import { styled } from 'styled-components';

const HomeBannerWrapper = styled.div`
    width: 100%;
    a {
        background-color: var(--bg-200);
        width: 100%;
        padding: 1rem;
        margin: 0 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        transition: 150ms all ease;
        &:hover {
            background-color: var(--text-100);
            color: var(--bg-100);
        }
    }
`;

export default function HomeBanner() {
    return (
        <HomeBannerWrapper>
            <a href="https://toyota.jp/member/mytoyota/?padid=from_tjptop_loginpush">
                <span>ログインすると購入検討・オーナーライフが快適に</span>
            </a>
        </HomeBannerWrapper>
    );
}
