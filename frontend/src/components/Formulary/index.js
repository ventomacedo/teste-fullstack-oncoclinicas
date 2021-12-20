import { cloneElement } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton    
} from '@chakra-ui/react';

const Formulary = ({ type, children, useDisclosure, reload }) => {
    const { isOpen, onClose } = useDisclosure;    

    return (
        <Modal isOpen={ isOpen } onClose={ onClose } size="xl" isCentered closeOnOverlayClick={ false }>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {
                        type === "edit"
                            ? "Formulário de edição"
                            : "Formulário de cadastro"
                    }
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    { cloneElement(children, { ...children.props, onClose, reload }) }
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default Formulary;