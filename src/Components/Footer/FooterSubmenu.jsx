import { styled } from 'styled-components';

const SubMenuWrapper = styled.div`
    margin-top: 4rem;
`;

const SubMenuList = styled.ul`
    display: flex;
    align-items: center;
    li {
        font-size: 0.8rem;
        padding: 0.5rem;
        margin-right: 0.5rem;
        a {
            color: var(--text-200);
        }
    }
`;

export default function FooterSubmenu() {
    const subMenuItem = [
        {
            id: 0,
            name: 'サイトマップ',
            url: 'https://toyota.jp/sitemap/?padid=from_tjptop_footer_sitemap#/',
        },
        {
            id: 1,
            name: 'サイト利用について',
            url: 'https://toyota.jp/attribute/?padid=from_tjptop_footer_attribute',
        },
        {
            id: 2,
            name: '個人情報の取扱いについて',
            url: 'https://toyota.jp/privacy_statement/?padid=from_tjptop_footer_privacy_statement',
        },
        {
            id: 3,
            name: 'TOYOTA/LEXUSの共通ID利用規約',
            url: 'https://id.toyota/commonTerms/content?padid=from_tjptop_footer_idtoyotajp_tb_terms&_ga=2.123910345.23716633.1699254518-286818589.1698218336&_gl=1*jrrmxl*_ga*Mjg2ODE4NTg5LjE2OTgyMTgzMzY.*_ga_BLSGKL3LFQ*MTY5OTI1NDUxNy4xNC4xLjE2OTkyNTYxMzYuNTcuMC4w*_fplc*JTJCazZqZ25NS25XU3d0aG9PUFFvcTVpZWV1MmpoRHolMkJ3QkZmdG9hdjglMkJ2dWduJTJGSlBDSDVaZ085UHNhc09NTzV3SWYwbHhNYWJNdktPJTJGQkpJZHVTa2Z4ZGZlRkoxd2pnQ2thMlBjMnUxaUdJWU5YOEVQMXBqT2pBZU41RnpEQSUzRCUzRA..',
        },
        {
            id: 4,
            name: '反社会的勢力に対する基本方針',
            url: 'https://toyota.jp/antisocial/?padid=from_tjptop_footer_antisocial',
        },
        {
            id: 5,
            name: '企業情報',
            url: 'https://global.toyota/jp/?padid=from_tjptop_footer_globaltoyota',
        },
        {
            id: 6,
            name: 'リコール情報',
            url: 'https://toyota.jp/recall/?padid=from_tjptop_footer_recall',
        },
    ];

    return (
        <SubMenuWrapper>
            <div>
                <SubMenuList>
                    {subMenuItem.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href={item.url}>{item.name}</a>
                            </li>
                        );
                    })}
                </SubMenuList>
            </div>
        </SubMenuWrapper>
    );
}
