import { Container, Flex, Heading, Text, Box, Link } from '@chakra-ui/react';

const Dashboard = () => {
    return (
        <Container maxW='container.xl'>
            <Box width="100%" marginTop="25px" padding="20px" borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Flex direction="column">
                    <Heading as="h1" size="lg">
                        Seja bem vindo ao teste do Vento Macedo.
                    </Heading>
                    <Text fontSize="md" paddingTop="20px">
                        Esse projeto está rodando em ReactJS integrado ao backend em NodeJS.<br/>
                        Navegue pelo menu acima e veja seu funcionamento. Dúvidas entre em contato:<br/>
                        <Box padding="20px"overflow='hidden'>
                            <ul>
                                <li><Link href="https://api.whatsapp.com/send?phone=5541995033349" isExternal>WhatsApp</Link></li>
                                <li><Link href="mailto:rafa.osbourne@gmail.com" isExternal>Email</Link></li>
                                <li><Link href="https://www.linkedin.com/in/ventomacedo/" isExternal>Linkedin</Link></li>
                            </ul>
                        </Box>
                    </Text>
                </Flex>
            </Box>
        </Container>
    );
};

export default Dashboard;
