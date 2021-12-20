import { useForm }  from 'react-hook-form';
import { BiSearch, BiXCircle } from 'react-icons/bi';
import { Form } from './styles';

import { 
    InputRightElement,
    Button,
    Input,
    InputGroup,
    Icon
} from '@chakra-ui/react';
import { useState } from 'react';

const Search = ({ action, clear }) => {

    const [ empty, setEmpty ] = useState(true);
    const { register, setValue, formState: { errors, isSubmitted }, handleSubmit } = useForm({ criteriaMode: "all" });
    const onSubmit = (data) => {
        action(data.terms);
        setEmpty(false);
    }
    const handleClear = () => {
        setValue('terms', '');
        clear();
        setEmpty(true);
    }

    return (
        <Form autoComplete="off" noValidate onSubmit={ handleSubmit(onSubmit) }>
            <InputGroup>
                <Input 
                    width="100%"
                    id="terms" 
                    type="text" 
                    placeholder="Buscar" 
                    isInvalid={ !!errors?.terms }
                    errorBorderColor="red.500"
                    autoComplete="off"
                    { ...register("terms", { required: true }) }/>
                <InputRightElement width="unset">
                    { !empty && (<Button type="button" padding="0" margin="0" colorScheme="transparent" onClick={ handleClear }><Icon as={ BiXCircle } w={ 5 } h={ 5 } color="green.500" /></Button>)}
                    <Button type="submit" padding="0" margin="0" colorScheme="transparent"><Icon as={ BiSearch  } w={ 6 } h={ 6 } color="green.500" /></Button>
                </InputRightElement>
            </InputGroup>
        </Form>
    );
}

export default Search;