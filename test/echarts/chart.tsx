import { useRef } from 'react';
import { render } from 'react-dom';

import { useEchart } from 'hooks/index';
import chartOption from './option';

render(<App />, document.getElementById('root'));

function App(): JSX.Element {
    const chartRef = useRef<HTMLDivElement>(null);

    useEchart(chartRef, chartOption);

    return (
        <div style={{ width: '100%', height: '100%' }} ref={chartRef}></div>
    );

}

