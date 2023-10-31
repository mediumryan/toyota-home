import { styled } from 'styled-components';
import LineUpSlider from './LineUpSlider';
import LineUpMenu from './LineUpMenu';
import { NoticeViewAll } from '../Notice/Important';
import { BsChevronRight } from 'react-icons/bs';

const LineUpOuter = styled.section`
    padding: 5rem 10rem;
`;

const LineUpInner = styled.div`
    position: relative;
`;

const LineUpTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 3rem;
`;

const LineUpViewAll = styled(NoticeViewAll)`
    position: absolute;
    right: 0;
    padding: 4px 8px;
    &:hover {
        background-color: var(--bg-200);
    }
    a {
        font-size: 14px;
        div {
        }
    }
`;

export default function LineUp() {
    return (
        <LineUpOuter>
            <LineUpInner>
                <LineUpTitle>ラインアップ</LineUpTitle>
                <LineUpMenu />
                <LineUpSlider />
                <LineUpViewAll>
                    <a
                        href="https://toyota.jp/carlineup/?padid=from_tjptop_carlineup_all"
                        target="blank"
                    >
                        <div>
                            ラインアップ一覧へ
                            <BsChevronRight />
                        </div>
                    </a>
                </LineUpViewAll>
            </LineUpInner>
        </LineUpOuter>
    );
}
