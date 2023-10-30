import { styled } from 'styled-components';
import './CSS/index.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notice from './Components/Notice/Notice';
import LineUp from './Components/LineUp/LineUp';

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
        </MainWrapper>
    );
}

export default App;
