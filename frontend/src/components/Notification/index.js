import { useEffect, useState } from 'react';
import { Alert, Fade }         from '@chakra-ui/react';

const Notification = (props) => {
    
    const { show, severity, message } = props;
    const [ active, setActive ]       = useState(show);

    useEffect(() => {
        let timeout = null;
        setActive(show);

        if(!!show)
            timeout = setTimeout(() => setActive(active => !active), 7000);

        return () => clearTimeout(timeout);
    }, [ show ]);
    
    return (
        <Fade in={ active } style={ { width: '100%' } }>
            <Alert borderRadius="3" status={ severity }>{ message }</Alert>
        </Fade>
    );
}

export default Notification;