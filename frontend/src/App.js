import Routes       from './routes';
import GlobalStyles from './styles/globals';
import theme        from './styles/theme';

import { AuthProvider }   from './provider/auth';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
    return (
        <ChakraProvider cssReset theme={ theme }>
            <AuthProvider>
                <GlobalStyles />
                <Routes />
            </AuthProvider>
        </ChakraProvider>
    );
};

export default App;

