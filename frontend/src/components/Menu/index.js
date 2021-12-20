import { useMemo }     from 'react';
import { useLocation } from 'react-router-dom';
import classNames      from 'classnames';
import { Flex }        from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { useAuth }     from '../../provider/auth';
import { NavLink }     from './styles';

import menu        from './menu';
import colors      from '../../styles/colors';

const Menu = ({ closeDrawer }) => {
    const { pathname } = useLocation();
    const { signOut }  = useAuth();
    const navigate     = useNavigate();
    
    useMemo(() => {
        const title    = menu.find(item => item.link === pathname);
        document.title = `${title?.name} | Oncoclínicas`;
    }, [ pathname ]);

    const action = (name, link) => {
        if(name === 'Sair')
            return signOut();

        navigate(link);
        closeDrawer();
    };

    return (
        <Flex direction="column" marginTop="20px">
            {
                menu.map(({ icon: Icon, link, name, absolute }, id) => (
                    <NavLink
                        key={ String(id) }
                        className={ classNames({ active: pathname === link, absolute: absolute }) }
                        onClick={ () => action(name, link) } >
                            <Icon color={ colors.black } size="1.4rem" />
                            { name }
                    </NavLink>
                ))
            }
        </Flex>
    );
}

export default Menu;