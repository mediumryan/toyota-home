import React from 'react';
import { styled } from 'styled-components';

const HeaderSubControllerWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem 0;
    li {
        font-size: 1rem;
        padding: 0.5rem;
        margin-right: 0.5rem;
        &:hover {
            background-color: var(--bg-200);
        }
    }
    li:first-child {
        border-bottom: 2px solid var(--accent-100);
    }
    li:nth-child(3) {
        width: 1px;
        height: 1.5rem;
        background-color: var(--text-100);
        padding: 0;
    }
`;

export default function HeaderSubController() {
    const subControllerItem = [
        {
            id: 0,
            name: 'トヨタのクルマ',
            path: 'https://toyota.jp/carlineup/?padid=from_tjptop_menu_carlineup_header',
        },
        {
            id: 1,
            name: 'オーナーサポート',
            path: 'https://toyota.jp/member/mytoyota/?padid=from_tjptop_menu_owner_header',
        },
        {
            id: 2,
            name: '',
            path: '',
        },
        {
            id: 3,
            name: 'カーライフ',
            path: 'https://toyota.jp/carlife/?padid=from_not_tjptop_menu_carlife_header',
        },
    ];

    return (
        <HeaderSubControllerWrapper>
            {subControllerItem.map((item) => {
                return (
                    <li key={item.id}>
                        <a href={item.path}>{item.name}</a>
                    </li>
                );
            })}
        </HeaderSubControllerWrapper>
    );
}
