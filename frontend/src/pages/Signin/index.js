import { useState }     from 'react';
import { useForm }      from "react-hook-form";

import { useAuth }  from '../../provider/auth';
import logoImg      from '../../assets/images/logo-oncoclinicas.svg';
import Notification from '../../components/Notification';

import { BsEyeSlash, BsEye }       from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine }      from "react-icons/ri";

import { Input, FormControl, InputGroup, InputLeftElement, InputRightElement, Button } from '@chakra-ui/react';
import {  Main, Logo, Aside, Form, Content, Error } from './styles';

const Signin = () => {
    const [ showPass, setShowPass ] = useState(false);
    const [ valid,       setValid ] = useState(true);

    const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm({ criteriaMode: "all" });
  
    const { signIn } = useAuth();
    const onSubmit = async (data) => {
        setValid(true);
        const response = await signIn(data.email, data.password);
        setValid(response);
    }

    return (
        <Main>
            <Aside />
            <Content>
                <Logo src={ logoImg } alt="Logotipo do grupo Oncoclinicas" />
                <Form autoComplete="off" noValidate onSubmit={ handleSubmit(onSubmit) }>
                    
                    <FormControl mt={ 5 }>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' children={ <MdOutlineAlternateEmail color='gray.300' /> } />
                            <Input 
                                id="email" 
                                type="email" 
                                placeholder="E-mail" 
                                isInvalid={ !!errors?.email }
                                errorBorderColor="red.500"
                                autoComplete="off"
                                { ...register("email", { 
                                        required: true,
                                        pattern: {
                                            value:   /\S+@\S+\.\S+/,
                                            message: "Este e-mail é inválido"
                                        }
                                    }) 
                                }/>
                        </InputGroup>
                        { !!errors.email && <Error>{ errors.email.type === "required" ? "O e-mail é obrigarório" : errors.email.message }</Error> }
                    </FormControl>
                    
                    <FormControl mt={ 5 }>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' children={ <RiLockPasswordLine color='gray.300' /> } />
                            <Input 
                                id="password" 
                                type={ showPass ? "text" : "password" }  
                                placeholder="Password"
                                isInvalid={ !!errors?.password }
                                errorBorderColor="red.500"
                                autoComplete="off"
                                { ...register("password", { required: true }) } />
                            <InputRightElement 
                                pointerEvents='pointer' 
                                onClick={ () => setShowPass(!showPass) } 
                                style={ { cursor: "pointer" }}
                                children={ 
                                    showPass 
                                        ? <BsEyeSlash color='gray.300' /> 
                                        : <BsEye color='gray.300' />
                                } />
                        </InputGroup>
                        { !!errors.password && <Error>A senha é obrigarória</Error> }
                    </FormControl>
                    
                    <FormControl mt={ 5 }>
                        <Button 
                            type="submit" 
                            colorScheme="green" 
                            isLoading={ isSubmitting }
                            loadingText='Aguarde...' 
                            width="100%" 
                            margin="auto">
                                Entrar
                        </Button>
                    </FormControl>
                
                    <FormControl mt={ 5 }>
                        <Notification show={ !valid } severity="error" message="Usuário ou senha inválidos" />
                    </FormControl>

                </Form>


            </Content>
        </Main>
    );
};

export default Signin;
