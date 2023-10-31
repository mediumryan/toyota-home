import { styled } from 'styled-components';

const TemplateLeftWrapper = styled.div`
    background-color: red;
    flex-basis: ${(props) => (props.index % 2 === 0 ? '33%' : '67%')};
`;

export default function TemplateLeft({ index }) {
    return (
        <TemplateLeftWrapper index={index}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            facilis? Architecto quasi ex dolor! Molestias numquam ipsa
            doloremque blanditiis suscipit, illum autem magnam qui, mollitia
            inventore velit? Blanditiis, reprehenderit aspernatur.{index}
        </TemplateLeftWrapper>
    );
}
