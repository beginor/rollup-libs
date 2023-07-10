import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from 'react';
import { createRoot } from 'react-dom/client';
class App extends Component {
    $props;
    constructor(props) {
        super(props);
        this.state = { clickCount: 0 };
    }
    onClick = () => {
        const count = this.state.clickCount || 0;
        this.setState({ clickCount: count + 1 });
    };
    render() {
        return (_jsx("button", { className: 'btn btn-primary', type: 'button', onClick: this.onClick, children: !this.state.clickCount ? 'Hello, React !' : this.state.clickCount }));
    }
}
createRoot(document.querySelector('#root')).render(_jsx(App, { count: 0 }));
