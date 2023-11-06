import React from 'react';
import { styled } from 'styled-components';
import FooterMainMenu from './FooterMainMenu';
import { BsChevronRight } from 'react-icons/bs';
import FooterContact from './FooterContact';
import FooterSubmenu from './FooterSubmenu';

const FooterOuter = styled.section`
    background-color: var(--bg-200);
    margin: 1rem 0;
    padding: 3rem 0;
`;

const FooterInner = styled.div`
    margin-bottom: 3rem;
    margin: 0 auto;
    padding: 0 3rem;
    width: 100%;
    max-width: 1312px;
`;

const FooterContents = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 13.157894%) minmax(0, 53.947368%) minmax(
            0,
            18.421052%
        );
    gap: 0 7.236842%;
`;

const FAQ = styled.div`
    font-weight: 900;
    a {
        padding: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:hover {
            opacity: 0.75;
        }
    }
`;

const FooterRights = styled.div`
    font-size: 0.8rem;
    color: var(--text-200);
    margin-top: 1rem;
    margin-left: 0.5rem;
    cursor: default;
`;

export default function Footer() {
    return (
        <FooterOuter>
            <FooterInner>
                <FooterContents>
                    <FAQ>
                        <a href="https://faq.toyota.jp/?padid=from_tjptop_footer_faq&site_domain=default&_ga=2.214298960.613655581.1698571182-286818589.1698218336&_gl=1*1rshuq3*_ga*Mjg2ODE4NTg5LjE2OTgyMTgzMzY.*_ga_BLSGKL3LFQ*MTY5ODg5NzM4Ni4xMi4xLjE2OTg4OTc1NzcuMzguMC4w*_fplc*YjNtUGFyJTJCJTJCc0JGSHBnOFpOYXFsR1VkcGlvZENZb2YwVGhxbTRJMlI0ak5IMlZ6JTJCcXR0b2s5JTJCR2xUbmUyQmVtT1VCNEtvdWhBOWxUQm5FbWNlWXQ5SmwlMkJ1TE9mUllNc1lmZFR5RiUyQiUyRnVqUCUyQkk0QTVScSUyRkhVNXVkbDc5Zmh3JTNEJTNE">
                            <span>FAQ・お問い合わせ</span>
                            <span>
                                <BsChevronRight />
                            </span>
                        </a>
                    </FAQ>
                    <FooterMainMenu />
                    <FooterContact />
                </FooterContents>
                <FooterSubmenu />
                <FooterRights>
                    ©1995-2023 TOYOTA MOTOR CORPORATION. ALL RIGHTS RESERVED.
                </FooterRights>
            </FooterInner>
        </FooterOuter>
    );
}
