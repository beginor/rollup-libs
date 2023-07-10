import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { render } from 'react-dom';
render(_jsx(App, {}), document.getElementById('root'));
function App() {
    const chartRef = useRef(null);
    // useEchart(chartRef, chartOption);
    return (_jsx("div", { style: { width: '100%', height: '100%' }, ref: chartRef }));
}
