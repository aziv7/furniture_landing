import transport from './assets/transportation.svg';
import support from './assets/support.svg';
import safety from './assets/safety.svg';
import bed from './assets/bed.svg';
import living from './assets/living.svg';
import dinning from './assets/dinning.svg';
import purchase from './assets/Purchase Securely.svg';
import ship from './assets/Ships From Warehouse.svg';
import style from './assets/Style Your Room.svg';
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
const ranges = [
  {
    label: 'Dining',
    picture: dinning,
  },
  {
    label: 'Living',
    picture: living,
  },
  {
    label: 'Bedroom',

    picture: bed,
  },
];

const works = [
  {
    label: 'Purchase Securely',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    picture: purchase,
  },
  {
    label: 'Ships From Warehouse',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    picture: ship,
  },
  {
    label: 'Style Your Room',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    picture: style,
  },
];
export { links, services, ranges, works };
