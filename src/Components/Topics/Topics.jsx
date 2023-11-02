import { BsChevronRight } from 'react-icons/bs';
import { styled } from 'styled-components';

const TopicsWrapper = styled.section`
    padding: 0 1rem;
    padding-bottom: 5rem;
`;

const TopicsContent = styled.a`
    margin-left: 9rem;
    padding: 0.5rem;
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 900;
    &:hover {
        background-color: var(--bg-200);
    }
`;

export default function Topics() {
    return (
        <TopicsWrapper>
            <TopicsContent
                href="https://toyota.jp/topics/?padid=from_tjptop_topics_all"
                target="blank"
            >
                <span>トピックス</span>
                <BsChevronRight />
            </TopicsContent>
        </TopicsWrapper>
    );
}
