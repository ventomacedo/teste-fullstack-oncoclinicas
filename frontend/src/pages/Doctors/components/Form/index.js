import { useState, useEffect } from 'react';
import { useForm }             from 'react-hook-form';

import { 
    Button,
    FormControl,
    Input,
    Flex
} from '@chakra-ui/react';

import doctorService from '../../../../services/doctors';
import Notification  from '../../../../components/Notification';
import { Error }     from './styles';

const Form = (props) => {
    const _feedback = { success: false, severity: 'info', message: '' };
    const { data, onClose, reload } = props ;

    const [ feedback, setFeedback ] = useState(_feedback);
    const { register, formState: { errors, isSubmitting }, handleSubmit, setValue } = useForm({ criteriaMode: "all" });

    useEffect(() => {
        setValue('name',           data?.name,           { shouldValidate: false });
        setValue('crm',            data?.crm,            { shouldValidate: false });
        setValue('specialization', data?.specialization, { shouldValidate: false });
    }, [ data, setValue ]);

    const onSubmit = async (_data) => {
        setFeedback(_feedback);
        
        if(!!data?.id) {
            const response = await doctorService.update(data.id, _data)
                ? { success: true, severity: 'success', message: 'Médico(a) Atualizado(a) com sucesso!' }
                : { success: true, severity: 'error',   message: 'Falha ao Atualizado o(a) médico(a)' }
            setFeedback(response);
        }
        else {
            const response = await doctorService.insert(_data)
                    ? { success: true, severity: 'success', message: 'Médico(a) cadastrado(a) com sucesso!' }
                    : { success: true, severity: 'error',   message: 'Falha ao cadastrar o(a) médico(a)' }
            setFeedback(response);
        }

        reload(true);
        const timeout = setTimeout(() => {
            onClose();
            clearTimeout(timeout);
        }, 2000);
    }

    return (<form autoComplete="off" noValidate onSubmit={ handleSubmit(onSubmit) }> 
            
        <FormControl>
            <Input 
                id="name" 
                type="text" 
                placeholder="Nome completo" 
                isInvalid={ !!errors?.name }
                errorBorderColor="red.500"
                autoComplete="off"
                { ...register("name", { required: true }) }/>
            { !!errors.name && <Error>Nome é um campo obrigarório</Error> }
        </FormControl>

        <FormControl mt={ 5 }>
            <Input 
                id="crm" 
                type="text" 
                placeholder="CRM" 
                isInvalid={ !!errors?.crm }
                errorBorderColor="red.500"
                autoComplete="off"
                { ...register("crm", { required: true }) }/>
            { !!errors.crm && <Error>CRM é um campo obrigarório</Error> }
        </FormControl>

        <FormControl mt={ 5 }>
            <Input 
                id="specialization" 
                type="text" 
                placeholder="Especialização" 
                isInvalid={ !!errors?.specialization }
                errorBorderColor="red.500"
                autoComplete="off"
                { ...register("specialization", { required: true }) }/>
            { !!errors.specialization && <Error>Especialização é um campo obrigarório</Error> }
        </FormControl>
        
        <FormControl mt={ 5 }>
            <Notification show={ feedback.success } severity={ feedback.severity } message={ feedback.message } />
        </FormControl>

        <Flex mt={ 5 } direction="row-reverse">
            <Button 
                type="submit"
                colorScheme="green"
                isLoading={ isSubmitting }
                loadingText='Salvando...'>Salvar</Button>
            <Button colorScheme="gray" mr={3} onClick={ props?.onClose }>Cancelar</Button>
        </Flex>

    </form>);
}

export default Form;