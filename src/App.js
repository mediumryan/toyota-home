import { styled } from 'styled-components';
import './CSS/index.css';
import Header from './Components/Header/Header';

const MainWrapper = styled.main`
    height: 500vh;
`;

function App() {
    return (
        <MainWrapper>
            <Header />
        </MainWrapper>
    );
}

export default App;
