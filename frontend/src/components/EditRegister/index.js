import { AiOutlineEdit } from 'react-icons/ai';
import { Icon, useDisclosure } from '@chakra-ui/react';
import Formulary  from '../Formulary';

const EditRegister = ({ children, reload }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Icon as={ AiOutlineEdit } w={ 5 } h={ 5 } margin="0 5px" cursor="pointer" onClick={ onOpen } />
            <Formulary  useDisclosure={ { isOpen, onOpen, onClose } } reload={ reload } type="edit">
                { children }
            </Formulary>
        </>
    )
}

export default EditRegister;