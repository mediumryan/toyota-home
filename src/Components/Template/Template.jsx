import { styled } from 'styled-components';
import TemplateLeft from './TemplateLeft';
import TemplateRight from './TemplateRight';
import { useRecoilValue } from 'recoil';
import { templates } from '../../atom';

const TemplateOuter = styled.section`
    margin: 4rem 1rem;
`;

const TemplateInner = styled.div`
    padding-left: 5rem;
`;

const TemplateInset = styled.div`
    display: flex;
    margin: 1rem 0;
    margin-bottom: 5rem;
`;

export default function Template() {
    const template = useRecoilValue(templates);

    return (
        <TemplateOuter>
            <TemplateInner>
                {template.map((item, index) => {
                    return (
                        <TemplateInset key={item}>
                            <TemplateLeft
                                item={item}
                                index={index}
                                style={{
                                    flexBasis: index % 2 === 0 ? '40%' : '60%',
                                }}
                            />
                            <TemplateRight
                                item={item}
                                index={index}
                                style={{
                                    flexBasis: index % 2 === 0 ? '60%' : '40%',
                                }}
                            />
                        </TemplateInset>
                    );
                })}
            </TemplateInner>
        </TemplateOuter>
    );
}
