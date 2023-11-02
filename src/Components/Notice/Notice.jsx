import React from 'react';
import Important from './Important';
import News from './News';
import { styled } from 'styled-components';

const NoticeWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
`;

export default function Notice() {
    return (
        <NoticeWrapper>
            <Important />
            <News />
        </NoticeWrapper>
    );
}
