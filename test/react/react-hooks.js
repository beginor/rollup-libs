import { jsx as _jsx } from "react/jsx-runtime";
import { lazy } from 'react';
import { render } from 'react-dom';
import { Example, Output } from './react-hooks-example.js';
render(_jsx(Example, { initialMessage: 'init message', text: 'Click me' }), document.getElementById('root'));
const LazyFunc = lazy(() => import('./LazyFunc'));
render(_jsx(Output, {}), document.getElementById('test1'));
//# sourceMappingURL=react-hooks.js.map