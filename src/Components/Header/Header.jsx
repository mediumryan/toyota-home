import React from 'react';
import HeaderController from './HeaderController';
import HeaderSubController from './HeaderSubController';
import { styled } from 'styled-components';

const HeaderWrapper = styled.header`
    padding: 1rem 12rem;
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderController />
            <HeaderSubController />
        </HeaderWrapper>
    );
}
