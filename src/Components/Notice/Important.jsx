import { styled } from 'styled-components';
import { BsChevronRight } from 'react-icons/bs';

export const NoticeInnerWrapper = styled.div`
    display: flex;
    padding: 3rem 0;
    background-color: var(--bg-200);
    font-size: 16px;
`;

export const NoticeTitle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    flex-basis: 25%;
    margin-left: 10rem;
`;

export const NoticeItemList = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
`;

export const NoticeItem = styled.a`
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
    &:first-child {
        margin-bottom: 2rem;
    }
`;

export const NoticeViewAll = styled.p`
    flex-basis: 25%;
    svg {
        margin-left: 0.5rem;
    }
    a {
        div {
            display: flex;
            align-items: center;
        }
    }
`;

export default function Important() {
    return (
        <NoticeInnerWrapper>
            <NoticeTitle>重要なお知らせ</NoticeTitle>
            <NoticeItemList>
                <NoticeItem
                    href="https://toyota.jp/info/tax_compensation/?padid=from_tjptop_info"
                    target="blank"
                >
                    コースターの燃費補償ならびに重量税補償開始について
                </NoticeItem>
                <NoticeItem
                    href="https://www.toyota.co.jp/jpn/auto/recall/information.html?padid=ag001_tjptop_newsarea_recall-airbag&_ga=2.243176068.761436457.1698218336-286818589.1698218336&_gl=1*1g2fazr*_ga*Mjg2ODE4NTg5LjE2OTgyMTgzMzY.*_ga_BLSGKL3LFQ*MTY5ODM5MDQyOS40LjEuMTY5ODM5MDQzMS41OC4wLjA.*_fplc*TkFXZEtud3RLJTJCTlZXWDRIeWZ4OFV1eXFZOG9WZWclMkY5M0lOVVZSWmpzVll1MTFkNm1MREJ4QkpEMlpMdWMwZyUyRmhqRGcyJTJCV0FldmZJZGJmZXpMcnFYR1d6YnNMUTJsUWJLbCUyQmFRRlQlMkZtRnIwTzVNbDBxd2tzSGd2ZHNBdFV3JTNEJTNE"
                    target="blank"
                >
                    タカタ製エアバッグ リコールに関する大切なお知らせ
                </NoticeItem>
            </NoticeItemList>
            <NoticeViewAll>
                <a
                    href="https://toyota.jp/news/?padid=from_tjptop_important_all#important"
                    target="blank"
                >
                    <div>
                        一覧を見る <BsChevronRight />
                    </div>
                </a>
            </NoticeViewAll>
        </NoticeInnerWrapper>
    );
}
