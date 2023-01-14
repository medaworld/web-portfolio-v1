import BlockchainDesktop from '/public/images/Blockchain/BlockchainDesktop.png';
import BlockchainMobile from '/public/images/Blockchain/BlockchainMobile.png';
import PhotoDesktop from '/public/images/Photo/PhotoDesktop.png';
import PhotoMobile from '/public/images/Photo/PhotoMobile.png';

export const workData = [
  {
    order: 1,
    name: 'Blockchain.com Explorer',
    description: 'One of the most trusted and used Bitcoin explorers.',
    roles: ['Front-end Developer'],
    images: { desktop: BlockchainDesktop.src, mobile: BlockchainMobile.src },
    links: { site: 'https://www.blockchain.com/explorer', github: null },
  },
  {
    order: 2,
    name: 'Photography Portfolio',
    description:
      'Photo portfolio website that allows admin to upload and store images onto a database storage (Firebase).',
    roles: ['Full Stack Developer', 'UI Designer'],
    images: { desktop: PhotoDesktop.src, mobile: PhotoMobile.src },
    links: {
      site: 'https://photos.meda.world/',
      github: 'https://github.com/medaworld/meda-photo-gallery',
    },
  },
  // {
  //   order: 3,
  //   name: 'Music Website',
  //   description: 'Music artist website with a built in media player.',
  //   roles: ['Full Stack Developer', 'UI Designer'],
  //   images: { desktop: BlockchainDesktop.src, mobile: BlockchainMobile.src },
  // },
];
