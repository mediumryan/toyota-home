import React, { useEffect, useRef, useState } from 'react';
import HeaderController from './HeaderController';
import HeaderSubController from './HeaderSubController';
import { styled } from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { headerHeightState } from '../../atom';

const HeaderWrapper = styled.header`
    background-color: rgba(255, 255, 255, 0.75);
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 12rem;
    transform-origin: bottom center;
    transition: transform 300ms ease;
    z-index: 2;
`;

export default function Header() {
    const headerRef = useRef(null);
    const [isHeaderHidden, setHeaderHidden] = useState(false);
    const setHeight = useSetRecoilState(headerHeightState);

    useEffect(() => {
        const headerHeight = headerRef.current.offsetHeight;
        setHeight(headerHeight);
        const handleScroll = () => {
            if (window.scrollY > headerHeight) {
                setHeaderHidden(true);
            } else {
                setHeaderHidden(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderWrapper
            ref={headerRef}
            style={{ transform: isHeaderHidden ? 'translateY(-100%)' : 'none' }}
        >
            <HeaderController />
            <HeaderSubController />
        </HeaderWrapper>
    );
}
