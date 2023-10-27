import { styled } from 'styled-components';
import './CSS/index.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notice from './Components/Notice/Notice';

const MainWrapper = styled.main`
    height: 500vh;
`;

function App() {
    return (
        <MainWrapper>
            <Header />
            <Home />
            <Notice />
        </MainWrapper>
    );
}

export default App;
