import React from 'react';
import Important from './Important';
import News from './News';
import { styled } from 'styled-components';

const NoticeWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export default function Notice() {
    return (
        <NoticeWrapper>
            <Important />
            <News />
        </NoticeWrapper>
    );
}
