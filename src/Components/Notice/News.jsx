import React from 'react';
import {
    NoticeInnerWrapper,
    NoticeItem,
    NoticeItemList,
    NoticeTitle,
    NoticeViewAll,
} from './Important';
import { BsChevronRight } from 'react-icons/bs';
import { styled } from 'styled-components';

const NewsInnerWrapper = styled(NoticeInnerWrapper)`
    background-color: var(--bg-100);
`;

export default function News() {
    return (
        <NewsInnerWrapper>
            <NoticeTitle>ニュース</NoticeTitle>
            <NoticeItemList>
                <NoticeItem
                    href="https://toyota.jp/bz4x/?padid=ag001_tjptop_info_news_contents"
                    target="blank"
                >
                    bZ4Xを一部改良。
                </NoticeItem>
                <NoticeItem
                    href="https://toyota.jp/corollacross/?padid=ag001_tjptop_info_news_contents"
                    target="blank"
                >
                    カローラ クロスを一部改良。
                </NoticeItem>
            </NoticeItemList>
            <NoticeViewAll>
                <a
                    href="https://toyota.jp/news/?padid=from_tjptop_info_all#news_info"
                    target="blank"
                >
                    一覧を見る <BsChevronRight />
                </a>{' '}
            </NoticeViewAll>
        </NewsInnerWrapper>
    );
}
