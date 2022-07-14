import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { render } from 'react-dom';
import { useEcharts } from '../../src/hooks/echarts.js';
import chartOption from './option.js';
render(_jsx(App, {}), document.getElementById('root'));
function App() {
    const chartRef = useRef(null);
    useEcharts(chartRef, chartOption);
    return (_jsx("div", { style: { width: '100%', height: '100%' }, ref: chartRef }));
}
//# sourceMappingURL=chart.js.map