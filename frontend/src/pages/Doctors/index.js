import doctorService from '../../services/doctors';
import PageHeader    from '../../components/PageHeader';

import DocForm    from './components/Form';
import Formulary  from '../../components/Formulary';


import Search        from '../../components/Search';
import Notification  from '../../components/Notification';
import Table         from './components/Table';

import { useDisclosure, Box, Container }  from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Page, Filter } from './styles';

const Doctors = () => {
    const _feedback = { success: false, severity: 'info', message: '' };
    
    const [ feedback,   setFeedback ] = useState(_feedback);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ doctors,     setDoctors ] = useState([ ]);
    const [ reload,       setReload ] = useState(false);
    const [ loading,     setLoading ] = useState(false);
    const [ page,           setPage ] = useState(1);

    useEffect(() => {
        const mounted  = true;
        const loadData = async () => {
            if(mounted) {
                setLoading(true);
                const data = await doctorService.all();
                setLoading(false);
                setDoctors(data);
                setReload(false);
            }
        }
        loadData();
    }, [ reload ]);

    useEffect(() => {
        const mounted  = true;
        const paginate = async () => {
            if(mounted) {
                setDoctors([ ]);
                setLoading(true);
                const data = await doctorService.all(page);
                setLoading(false);
                setDoctors(data);
            }
        }
        paginate();
    }, [ page ]);

    const handleSearch = async (terms) => {
        setDoctors([ ]);
        setLoading(true);
        const data = await doctorService.search(terms);
        setLoading(false);
        setDoctors(data);
    }

    const handleDelete = async (doctor) => {
        setFeedback(_feedback);
        const response = await doctorService.remove(doctor.id) 
            ? { success: true, severity: 'success', message: 'Médico(a) removido(a) com sucesso!' }
            : { success: true, severity: 'error',   message: 'Falha ao remover o(a) médico(a)' }
        setFeedback(response);
    }

    const handleClear = async () => {
        setDoctors([ ]);
        setLoading(true);
        const data = await doctorService.all();
        setLoading(false);
        setDoctors(data);
        setReload(false);
    }

    return (
        <Page>

            <Formulary  useDisclosure={ { isOpen, onOpen, onClose } } reload={ setReload } ype="register">
                <DocForm />
            </Formulary>

            <PageHeader title="Médicos" openModal={ onOpen } />
            
            <Container maxW="container.xl">
                <Box 
                    bg="white" 
                    width="100%"
                    padding="15px"
                    borderWidth='0' 
                    borderRadius='lg' 
                    overflow='hidden' 
                    margin="-50px auto 0">
                        
                        <Filter>
                            
                            { <Notification show={ feedback.success } severity={ feedback.severity } message={ feedback.message } /> }
                            <Search action={ handleSearch } clear={ handleClear }/>
                            
                        </Filter>

                        <Table 
                            data={ doctors } 
                            paginate={ setPage } 
                            loading={ loading }
                            disclosure={ useDisclosure }
                            remove={ handleDelete }
                            reload={ setReload } />
                </Box>
            </Container>

        </Page>
    );
};

export default Doctors;
