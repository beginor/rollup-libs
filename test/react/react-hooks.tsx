import { useState, useEffect, useLayoutEffect, lazy } from 'react';
import { render } from 'react-dom';

import { Example, Output } from './react-hooks-example';

render(
  <Example initialMessage='init message' text='Click me'/>,
  document.getElementById('root')
);

const LazyFunc = lazy(() => import('./LazyFunc'));

render(
    <Output />,
    document.getElementById('test1')
);
