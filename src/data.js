import transport from './assets/transportation.svg';
import support from './assets/support.svg';
import safety from './assets/safety.svg';
const links = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/',
    label: 'Services',
  },
  {
    path: '/',
    label: 'Doctors',
  },
  {
    path: '/',
    label: 'Products',
  },
  {
    path: '/',
    label: 'Gallery',
  },
];

const services = [
  {
    label: 'Free Delivery',
    desc: 'Lorem ipsum dolor sit amet.',
    icon: transport,
  },
  {
    label: 'Support 24/7',
    desc: 'Lorem ipsum dolor sit amet.',
    icon: support,
  },
  {
    label: '100% Authentic',
    desc: 'Lorem ipsum dolor sit amet.',
    icon: safety,
  },
];

export { links, services };
