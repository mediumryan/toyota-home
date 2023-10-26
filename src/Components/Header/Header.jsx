import React from 'react';
import HeaderController from './HeaderController';
import HeaderSubController from './HeaderSubController';
import { styled } from 'styled-components';

const HeaderWrapper = styled.header``;

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderController />
            <HeaderSubController />
        </HeaderWrapper>
    );
}
