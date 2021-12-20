import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
} from '@chakra-ui/react';

import { Pagination, Overflow, Loading } from './styles';

import Formylary      from '../Form';
import Show           from '../Show';

import RemoveRegister from '../../../../components/RemoveRegister';
import EditRegister   from '../../../../components/EditRegister';

const List = ({ data, paginate, reload, remove, loading }) => {
    
    const { rows, pagination } = data;
    const handlePage = (page) => paginate(page);
    
    return (
        <>
            <Overflow>
                
                { loading && <Loading size='100px' isIndeterminate /> }

                <Table variant="striped" colorScheme="gray">
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>CRM</Th>
                            <Th>Especialização</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            !!rows?.length && rows.map(item => (
                                <Tr key={ item?.id }>
                                    <Td>{ item?.name }</Td>
                                    <Td>{ item?.crm }</Td>
                                    <Td>{ item?.specialization }</Td>
                                    <Td>
                                        <Show data={ item } />
                                        <EditRegister formulary={ Formylary } reload={ reload }><Formylary data={ item } /></EditRegister>
                                        <RemoveRegister data={ item } removeRegister={ remove } reload={ reload } />
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>

            </Overflow>           
            
            {
                pagination?.totalPages > 1 && (<Pagination>
                    { Array.apply(0, { length: pagination?.totalPages }).map((item, index) => (<li key={ String(index) } className={ pagination?.currentPage === index+1 ? "active" : "" } onClick={ () => handlePage(index+1) } >{ index+1 }</li>)) }
                </Pagination>)
            }
        </>
    );
}

export default List;
