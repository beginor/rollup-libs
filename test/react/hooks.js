import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
function App() {
    const [count, setCount] = useState(0);
    const [messages, setMessages] = useState([]);
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
    return (_jsxs("div", { children: [_jsxs("p", { children: ["You have clicked ", count, " times."] }), _jsx("button", { className: 'btn btn-primary', onClick: () => setCount(count + 1), children: "Click me" })] }));
}
document.getElementById('init')?.addEventListener('click', () => {
    // const app = React.createElement(App);
    render(_jsx(App, {}), document.getElementById('app'));
});
document.getElementById('destroy')?.addEventListener('click', e => {
    unmountComponentAtNode(document.getElementById('app'));
});
