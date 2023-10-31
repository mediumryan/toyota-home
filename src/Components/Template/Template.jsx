import { styled } from 'styled-components';
import TemplateLeft from './TemplateLeft';
import TemplateRight from './TemplateRight';

const TemplateOuter = styled.section`
    margin: 4rem 0;
`;

const TemplateInner = styled.div``;

const TemplateInset = styled.div`
    display: flex;
    margin: 1rem 0;
`;

export default function Template() {
    const arr = [1, 2, 3, 4, 5];

    return (
        <TemplateOuter>
            <TemplateInner>
                {arr.map((item, index) => {
                    return (
                        <TemplateInset
                            style={{ order: index % 2 === 0 ? 1 : 2 }}
                            key={index}
                        >
                            <TemplateLeft
                                style={{
                                    order: index % 2 === 0 ? 1 : 2,
                                    flexBasis: index % 2 === 0 ? '33%' : '67%',
                                }}
                                index={index}
                            />
                            <TemplateRight
                                style={{
                                    order: index % 2 === 0 ? 2 : 1,
                                    flexBasis: index % 2 === 0 ? '67%' : '33%',
                                }}
                                index={index}
                            />
                        </TemplateInset>
                    );
                })}
            </TemplateInner>
        </TemplateOuter>
    );
}
