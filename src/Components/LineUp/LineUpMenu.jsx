import { useRecoilState, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { carTypeArr, nowCarType } from '../../atom';
import { AnimatePresence, motion } from 'framer-motion';

const LineUpMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    span {
        margin-right: 1rem;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
    }
`;

const NowHere = styled(motion.div)`
    width: 100%;
    height: 2px;
    background-color: var(--accent-100);
`;

export default function LineUpMenu() {
    const [lineUpMenu, setLineUpMenu] = useRecoilState(carTypeArr);
    const setNowType = useSetRecoilState(nowCarType);

    const handleMenu = (item, index) => {
        const copy = [...lineUpMenu];
        const updatedMenu = copy.map((type) => ({
            ...type,
            state: false,
        }));
        updatedMenu[index].state = true;
        setLineUpMenu(updatedMenu);
        setNowType(item.type);
    };

    return (
        <LineUpMenuWrapper>
            {lineUpMenu.map((item, index) => {
                return (
                    <AnimatePresence key={item.id}>
                        <span
                            onClick={() => {
                                handleMenu(item, index);
                            }}
                        >
                            {item.japanese}
                            {item.state && <NowHere layoutId="now_here" />}
                        </span>
                    </AnimatePresence>
                );
            })}
        </LineUpMenuWrapper>
    );
}
