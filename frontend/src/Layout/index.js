import Header     from '../components/Header';
import { Main } from './styles';

const Layout = ({ children }) => {
    return (
        <Main>
            <Header />
            { children }
        </Main>
    );
}

export default Layout;