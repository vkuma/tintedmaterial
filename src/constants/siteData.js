const SITE = {
    link: 'javascript:;', // javascript:;
    home2: '#/app/home',
    home: '/app/home',
    productLink: 'https://themeforest.net/item/material-design-reactjs-admin-web-app-with-bootstrap-4/19582625',
    gitLink: 'https://github.com/vkuma',
    user: 'Vin',
    login: '#/user/login',
    signUp: '#/user/sign-up',
    forgotPassword: '#/user/forgot-password',
};

// header links
SITE.headerLink = {
    profile: '#/app/page/about',
    about: '#/app/page/about',
    help: '#/app/page/contact',
    signOut: '#/user/login' // redirect login page
};

SITE.services = [
    {
        name: 'TACAS',
        img: 'assets/services/server.png',
        date: 'August 20th, 2019',
        title: 'Making a High Precision Hot Wire Cutter from an Old ATX Computer PSU',
        content: 'Q: Why did the can crusher quit his job?\n A: Because it was soda pressing.',
        tag: 'Quotes',
        author: 'Vin Kumar',
        category: 'Service',
        link: 'http://pcarya0n.ott.ciena.com/BookableServerMGT/intranet-back-end/tac_status.php'
    }, {
        name: 'RADIUS',
        img: 'assets/services/server.png',
        date: 'May 18th, 2019',
        title: 'Flashing A PIC MCU: Making your first PIC Program',
        content: 'A man was walking down the street and saw a sign in a store window that said "Help Wanted," so the man ran in the store and yelled out, "What\'s wrong?!"',
        tag: 'Quotes',
        author: 'Vin Kumar',
        category: 'Service',
        link: 'http://pcarya0n.ott.ciena.com/BookableServerMGT/intranet-back-end/tac_status.php'
    }
];

export default SITE;