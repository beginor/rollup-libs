import {} from 'react';
import { createRoot } from 'react-dom/client';

import 'antd-mobile/es/global';

import { App } from './antd-mobile-app.js';

const root = createRoot(document.getElementById('app')!);
root.render(<App />);
