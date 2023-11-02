import React from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { footerMenu1, footerMenu2 } from '../../atom';

const FooterMainOuter = styled.div`
    font-size: 1rem;
    dt {
        margin-bottom: 1.5rem;
        button {
            border: none;
            background: none;
            outline: none;
            cursor: default;
            font-weight: 900;
        }
    }
`;

const FooterMainInner = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 28.658536%) minmax(0, 60.365853%);
    gap: 0 10.975609%;
`;

const MenuUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    grid-template-rows: repeat(4, auto);
    grid-auto-flow: column;
    gap: 16px 12.121212%;
    line-height: 1.5;
`;

export default function FooterMainMenu() {
    const menu1 = useRecoilValue(footerMenu1);
    const menu2 = useRecoilValue(footerMenu2);

    return (
        <FooterMainOuter>
            <FooterMainInner>
                <dl>
                    <dt>
                        <button>関連サイト</button>
                    </dt>
                    <dd>
                        <div>
                            <MenuUl>
                                {menu1.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a href={item.url}>{item.name}</a>
                                        </li>
                                    );
                                })}
                            </MenuUl>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <button>関連サービス</button>
                    </dt>
                    <dd>
                        <div>
                            <MenuUl>
                                {menu2.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a href={item.url}>{item.name}</a>
                                        </li>
                                    );
                                })}
                            </MenuUl>
                        </div>
                    </dd>
                </dl>
            </FooterMainInner>
        </FooterMainOuter>
    );
}
