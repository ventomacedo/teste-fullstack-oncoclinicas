import moment from 'moment';
import { VscOpenPreview } from 'react-icons/vsc';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    SimpleGrid,
    Box,
    useDisclosure,
    Icon
} from '@chakra-ui/react'

const Show = ({ data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Icon as={ VscOpenPreview } w={ 5 } h={ 5 } margin="0 5px" cursor="pointer" onClick={ onOpen } />
            <Modal isCentered isOpen={ isOpen } onClose={ onClose }>
                <ModalOverlay />
                <ModalContent padding="15px">
                    <ModalHeader>Dados do(a) Médico(a)</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SimpleGrid columns={2}>
                            <Box padding="10px" bg='silver.500'><strong>Nome completo:</strong></Box>
                            <Box padding="10px" >{ data.name }</Box>
                            <Box padding="10px" bg='silver.500'><strong>CRM:</strong></Box>
                            <Box padding="10px" >{ data.crm }</Box>
                            <Box padding="10px" bg='silver.500'><strong>Especialização:</strong></Box>
                            <Box padding="10px" >{ data.specialization }</Box>
                            <Box padding="10px" bg='silver.500'><strong>Cadastrado em:</strong></Box>
                            <Box padding="10px" >{ moment(data.createdAt).format('DD/MM/YYYY') }</Box>
                        </SimpleGrid>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Show;