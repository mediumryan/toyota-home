import { styled } from 'styled-components';

const TemplateLeftWrapper = styled.div`
    order: ${(props) => (props.index % 2 === 0 ? 1 : 2)};
    padding-left: ${(props) => (props.index % 2 === 0 ? '5rem' : 0)};
    padding-right: ${(props) => (props.index % 2 === 0 ? 0 : '5rem')};
    width: 35%;
`;

const TemplateType = styled.h5`
    font-size: 0.8rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
`;

const TemplateName = styled.h3`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
`;

const TemplateDescription1 = styled.p`
    font-size: 1.15rem;
    font-weight: 500;
    padding-right: 5rem;
    line-height: 2;
    margin-bottom: 2rem;
`;

const TemplateDescription2 = styled.p`
    font-size: 1.15rem;
    font-weight: 900;
    padding-right: 5rem;
    line-height: 2;
`;

const TemplateMore = styled.button`
    width: 75%;
    background-color: var(--text-100);
    padding: 1.5rem 3rem;
    margin: 2rem 0;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: var(--text-200);
    }
    a {
        color: var(--bg-100);
        font-size: 1.15rem;
    }
`;

const TemplateEstimate = styled.button`
    width: 75%;
    padding: 1.5rem 3rem;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    &:hover {
        background-color: var(--bg-200);
    }
    a {
        font-size: 1.15rem;
    }
`;

export default function TemplateLeft({ item, index }) {
    return (
        <TemplateLeftWrapper index={index}>
            <TemplateType>{item.type}</TemplateType>
            <TemplateName>{item.name}</TemplateName>
            <TemplateDescription1>{item.description1}</TemplateDescription1>
            <TemplateDescription2>{item.description2}</TemplateDescription2>
            <TemplateMore>
                <a
                    href="https://toyota.jp/crownsport/?padid=from_tjptop_pr_crownsport"
                    target="blank"
                >
                    詳細はこちら
                </a>
            </TemplateMore>
            <TemplateEstimate>
                <a
                    href="https://toyota.jp/service/estimate/?car_name_en=CROWN%20SPORT&padid=from_tjptop_pr_crownsport_sim"
                    target="blank"
                >
                    見積りシミュレーション
                </a>
            </TemplateEstimate>
        </TemplateLeftWrapper>
    );
}
