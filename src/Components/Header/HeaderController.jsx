import { styled } from 'styled-components';
// icon
import { SiToyota } from 'react-icons/si';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderControllerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 12rem;
    h1 {
        a {
            font-size: 3.5rem;
        }
    }
    ul {
        display: flex;
        align-items: center;
        li {
            padding: 0.5rem;
            margin: 0 0.5rem;
        }
    }
`;

export default function HeaderController() {
    return (
        <HeaderControllerWrapper>
            <h1>
                <a href="https://toyota.jp/?padid=from_tjptop_menu_logo">
                    <SiToyota />
                </a>
            </h1>
            <nav>
                <ul>
                    <li>ログイン</li>
                    <li>
                        <FaSearch />
                    </li>
                    <li>
                        <GiHamburgerMenu />
                    </li>
                </ul>
            </nav>
        </HeaderControllerWrapper>
    );
}
