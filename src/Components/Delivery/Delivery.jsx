import { styled } from 'styled-components';

const DeliveryOuter = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DeliveryInner = styled.a`
    cursor: pointer;
    border: 1px solid var(--text-100);
    padding: 1.5rem 12.5rem;
    transition: 300ms all ease;
    &:hover {
        background-color: var(--bg-200);
    }
`;

const DeliveryContent = styled.span`
    font-size: 1rem;
    font-weight: 900;
`;

export default function Delivery() {
    return (
        <DeliveryOuter>
            <DeliveryInner href="https://toyota.jp/news/delivery/?padid=from_tjptop_delivery_all">
                <DeliveryContent>工場出荷時期目処のご案内</DeliveryContent>
            </DeliveryInner>
        </DeliveryOuter>
    );
}
