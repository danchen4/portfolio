import calculatorGIF from '../assets/calculator.gif';
import ringbuilderGIF from '../assets/ringbuilder.gif';
import lenderGIF from '../assets/lender.gif';
import memoryGIF from '../assets/memory.gif';
import todoGIF from '../assets/todo.gif';

export interface Project {
  id: number;
  name: string;
  previewLink: string;
  imageId: string;
  description: string;
  githubLink: string;
  tags: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Ring Builder',
    imageId: ringbuilderGIF,
    previewLink: 'https://ring-commerce.web.app',
    description:
      'Design your own engagement ring and preview your ring before purchasing.  Mobile friendly eCommerce application built using   React with Typescript.',
    githubLink: 'https://github.com/danchen4/ringbuilder',
    tags: [
      'React',
      'TypeScript',
      'Redux',
      'Router',
      'Styed Components',
      'react-transition-group',
      'SASS',
      'Material UI',
    ],
  },
  {
    id: 2,
    name: 'Lender',
    imageId: lenderGIF,
    previewLink: 'https://loan-application-formik.web.app',
    description:
      'Shop now and pay later.  Fill out a short loan application and get approved today!  Dynamic loan application web app built using React.',
    githubLink: 'https://github.com/danchen4/Lender',
    tags: [
      'React',
      'Redux',
      'Router',
      'Styed Components',
      'react-transition-group',
      'Material UI',
      'Formik',
      'Yup',
    ],
  },
  {
    id: 3,
    name: 'Todo List',
    imageId: todoGIF,
    previewLink: 'https://todo-list-d6088.web.app/ ',
    description: 'Just (to) do it!  Classic todo list built using React with Typescript',
    githubLink: 'https://github.com/danchen4/todo',
    tags: ['React', 'TypeScript', 'react-transition-group', 'SASS', 'BEM'],
  },
  {
    id: 4,
    name: 'Memory Game',
    imageId: memoryGIF,
    previewLink: 'https://memory-game-2eeba.web.app/',
    description: 'Put your memory to the test!  Classic memory game built with vanilla Javascript.',
    githubLink: 'https://github.com/danchen4/memorygame',
    tags: ['Javascript', 'ES6', 'SASS', 'BEM', 'Parcel'],
  },
  {
    id: 5,
    name: 'Calculator',
    imageId: calculatorGIF,
    previewLink: 'https://codepen.io/danchen4/pen/oNXQQGZ',
    description:
      'A simple calculator that allows you to save up to four variables built using vanilla Javascript.',
    githubLink: 'https://github.com/danchen4/SimpleCalculator',
    tags: ['Javascript', 'ES6'],
  },
];
