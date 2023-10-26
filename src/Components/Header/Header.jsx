import React, { useEffect, useRef, useState } from 'react';
import HeaderController from './HeaderController';
import HeaderSubController from './HeaderSubController';
import { styled } from 'styled-components';

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 12rem;
    transform-origin: bottom center;
    transition: transform 0.3s ease;
`;

export default function Header() {
    const headerRef = useRef(null);
    const [isHeaderHidden, setHeaderHidden] = useState(false);

    useEffect(() => {
        const headerHeight = headerRef.current.offsetHeight;
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
