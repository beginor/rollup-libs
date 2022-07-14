import { useEffect, useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Subject } from 'rxjs';

import * as demoApi from './demo-api';

function App(): JSX.Element {

    const [count, setCount] = useState(0);
    const [messages, setMessages] = useState<string[]>([]);

    const userId = 'beginor';

    useEffect(() => {
        document.title = `You have clicked ${count} times.`;
    }, [count]);

    useEffect(() => {
        console.log('init');
        return () => {
            console.log('destroy');
        };
    }, []);

    return (
        <div>
            <p>You have clicked {count} times.</p>
            <button className='btn btn-primary'
                onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

document.getElementById('init')?.addEventListener('click', () => {
    // const app = React.createElement(App);
    render(<App />, document.getElementById('app'));
});

document.getElementById('destroy')?.addEventListener('click', e => {
    unmountComponentAtNode(document.getElementById('app') as HTMLElement);
});
