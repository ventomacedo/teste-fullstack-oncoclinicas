
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    useDisclosure,
    Icon
} from '@chakra-ui/react'

import { AiOutlineDelete } from 'react-icons/ai';

const Remove = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data, removeRegister, reload } = props;

    const handleAsk = () => {
        onOpen();
    }

    const handleRemove = () => {
        removeRegister(data);
        reload(true);
        onClose();
    }

    return (<>
        <Icon as={ AiOutlineDelete } w={ 5 } h={ 5 } margin="0 5px" cursor="pointer" onClick={ handleAsk } />
        <Modal isCentered isOpen={ isOpen } onClose={ onClose }>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Confirmação</ModalHeader>
                <ModalBody>
                    Você deseja realmente excluir esse médico?
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="gray" mr={3} onClick={ onClose }>Não</Button>
                    <Button colorScheme="red" onClick={ handleRemove }>Sim</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>);

}

export default Remove;