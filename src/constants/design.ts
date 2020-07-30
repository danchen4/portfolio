import gagediamonds from '../assets/gagediamonds.png';
import lendfirm from '../assets/lendfirm.png';
import brilliantbed from '../assets/brilliantbed.png';

export interface Design {
  id: number;
  name: string;
  previewLink: string;
  imageId: string;
  description: string;
}

export const DESIGN_PROJECTS: Design[] = [
  {
    id: 1,
    name: 'Gage Diamonds',
    imageId: gagediamonds,
    previewLink: 'https://www.gagediamonds.com',
    description:
      'Designed and coded 10+ mobile friendly landing pages with HTML5, CSS, and Boostrap.  Redesigned and oversaw the development of "design your own ring" feature.',
  },
  {
    id: 2,
    name: 'LendFirm',
    imageId: lendfirm,
    previewLink: 'https://www.lendfirm.com',
    description:
      'Designed and hand coded front-end informational Wordpress site in HTML and CSS.  UI/UX design and oversaw the development of the back-end loan application site.',
  },
  {
    id: 3,
    name: 'Brilliant Bed',
    imageId: brilliantbed,
    previewLink: 'https://www.brilliantbed.com',
    description: 'UI/UX design and oversaw the development of Magento e-Commerce site.',
  },
];
