import { Container, Flex, Heading } from '@chakra-ui/react';
import { Title, Button } from './styles';

const PageHeader = (props) => {
    

    return (
        <Title>
            <Container maxW='container.xl'>
                <Flex flexFlow="row wrap" align="center" justifyContent="space-between">
                    <Heading as="h1" size="2xl" color="white">{ props?.title }</Heading>
                    <Button onClick={ props?.openModal }>Cadastrar</Button>
                </Flex>
            </Container>
        </Title>
    );
}

export default PageHeader;