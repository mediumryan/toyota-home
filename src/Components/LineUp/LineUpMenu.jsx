import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { carTypeArr } from '../../atom';

const LineUpMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    span {
        margin-right: 1rem;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        div {
            width: 100%;
            height: 2px;
            background-color: var(--accent-100);
        }
    }
`;

export default function LineUpMenu() {
    const [lineUpMenu, setLineUpMenu] = useRecoilState(carTypeArr);

    const handleMenu = (index) => {
        const copy = [...lineUpMenu];
        const updatedMenu = copy.map((type) => ({
            ...type,
            state: false,
        }));
        updatedMenu[index].state = true;
        setLineUpMenu(updatedMenu);
    };

    return (
        <LineUpMenuWrapper>
            {lineUpMenu.map((item, index) => {
                return (
                    <span
                        key={item.id}
                        onClick={() => {
                            handleMenu(index);
                        }}
                    >
                        {item.japanese}
                        <div
                            style={{ display: item.state ? 'block' : 'none' }}
                        ></div>
                    </span>
                );
            })}
        </LineUpMenuWrapper>
    );
}
