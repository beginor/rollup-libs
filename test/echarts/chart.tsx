import React, { useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import * as echarts from 'echarts';
// import 'echarts-gl';
// import 'echarts-wordcloud';

import chartOption from './option.js';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);

function App(): JSX.Element {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartRef.current) {
            return;
        }
        const instance = echarts.init(chartRef.current);
        instance.setOption(chartOption);
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }} ref={chartRef}></div>
    );

}

