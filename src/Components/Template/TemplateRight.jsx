import { styled } from 'styled-components';

const TemplateRightWrapper = styled.div`
    background-color: blue;
    flex-basis: ${(props) => (props.index % 2 === 0 ? '67%' : '33%')};
`;

export default function TemplateRight({ index }) {
    return (
        <TemplateRightWrapper index={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            eum quia reiciendis accusantium accusamus delectus illum repellat
            aspernatur laborum officia. Quia cupiditate doloribus magni nobis
            deserunt debitis, a expedita culpa.{index}
        </TemplateRightWrapper>
    );
}
