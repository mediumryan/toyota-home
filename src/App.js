import { styled } from 'styled-components';
import './CSS/index.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notice from './Components/Notice/Notice';
import LineUp from './Components/LineUp/LineUp';
import Delivery from './Components/Delivery/Delivery';
import Template from './Components/Template/Template';
import Topics from './Components/Topics/Topics';

const MainWrapper = styled.main`
    height: 500vh;
`;

function App() {
    return (
        <MainWrapper>
            <Header />
            <Home />
            <Notice />
            <LineUp />
            <Delivery />
            <Template />
            <Topics />
        </MainWrapper>
    );
}

export default App;
