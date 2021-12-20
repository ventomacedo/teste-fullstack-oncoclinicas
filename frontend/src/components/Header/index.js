import { Header, Fixed, Logo } from './styles'
import { Container, Flex }     from '@chakra-ui/react';

import Menu        from '../../components/Menu';
import logoImg     from '../../assets/images/logo-oncoclinicas.svg';

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from '@chakra-ui/react'

import { Icon }     from '@chakra-ui/react';
import { IoMdMenu } from 'react-icons/io';

const TopHeader = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Header>
            
            <Flex direction="column">
                <Fixed>
                    <Container maxW='container.xl'>
                        <Flex>
                            <Icon as={ IoMdMenu } w={ 7 } h={ 7 } color="white" cursor="pointer" onClick={ onOpen } />
                        </Flex>
                    </Container>
                </Fixed>

            </Flex>

            <Drawer placement="left" onClose={ onClose } isOpen={ isOpen } size="sm">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton size='sm' />
                    <DrawerHeader borderBottomWidth='1px' padding="15px 10px">
                        <Logo src={ logoImg } alt="Logotipo do grupo Oncoclinicas" />
                    </DrawerHeader>
                    <DrawerBody>
                        <Menu closeDrawer={ onClose } />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </Header>
    )
}

export default TopHeader;