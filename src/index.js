import React from 'react';
import {render} from 'react-dom';

import Routers from './routers.js';
import './main.css';
import 'highlight.js/styles/atom-one-light.css';
import './post.css'

render(<Routers />,document.getElementById('root'));
