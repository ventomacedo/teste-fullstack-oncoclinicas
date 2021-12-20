import { IoMdHome, IoIosLogOut } from "react-icons/io";
import { GiStethoscope } from 'react-icons/gi';

const menu = [
    {
        name: 'Início',
        link: '/',
        icon: IoMdHome,
    },

    {
        name: 'Médicos',
        link: '/medicos',
        icon: GiStethoscope,
    },

    {
        name: 'Sair',
        link: '/login',
        icon: IoIosLogOut
    },
];

export default menu;
