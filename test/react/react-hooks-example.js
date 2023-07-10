import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { BehaviorSubject } from 'rxjs';
const subject = new BehaviorSubject('');
export function Example(props) {
    const message = useMessage(subject);
    // subject.next(props.initialMessage);
    const inputRef = useRef(null);
    function updateMessage() {
        if (!!inputRef.current) {
            subject.next(inputRef.current.value);
        }
    }
    return (_jsxs("div", { children: [_jsx("p", { children: _jsx("input", { type: "text", defaultValue: props.initialMessage, ref: inputRef }) }), _jsx("button", { onClick: () => updateMessage(), children: props.text }), _jsxs("div", { children: ["output: ", message, " "] })] }));
}
export function Output(props) {
    const message = useMessage(subject);
    return (_jsxs("div", { children: ["output: ", message, " "] }));
}
export function useMessage(subject) {
    const [message, setMessage] = useState(subject.getValue());
    useEffect(() => {
        const msg$ = subject.subscribe(msg => setMessage(msg));
        return () => {
            msg$.unsubscribe();
        };
    });
    return message;
}
