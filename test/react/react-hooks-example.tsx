import { useState, useEffect, useRef } from 'react';

import { BehaviorSubject, Subject, Subscription } from 'rxjs';

import { state } from 'shared/index';

const subject = new BehaviorSubject<string>('');

export function Example(
    props: { initialMessage: string; text: string; }
): JSX.Element {
    const message = useMessage(subject);

    // subject.next(props.initialMessage);

    const inputRef = useRef<HTMLInputElement>(null);

    function updateMessage() {
        if (!!inputRef.current) {
            subject.next(inputRef.current.value);
        }
    }

    return (
        <div>
            <p>
                <input type="text" defaultValue={props.initialMessage} ref={inputRef} />
            </p>
            <button onClick={ () => updateMessage() }>{props.text}</button>
            <div>output: {message} </div>
        </div>
    );
}

export function Output (
    props: any
) {
    const message = useMessage(subject);
    return (
        <div>output: {message} </div>
    );
}

export function useMessage(
    subject: BehaviorSubject<string>
) {
    const [message, setMessage] = useState(subject.getValue());
    
    useEffect(() => {
        const msg$ = subject.subscribe(msg => setMessage(msg));
        return () => {
            msg$.unsubscribe();
        }
    });
    return message;
}
