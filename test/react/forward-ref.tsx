import { forwardRef, useEffect, useRef } from 'react';

const Search = forwardRef<HTMLInputElement>((props, ref) => {
    return <input ref={ref} type="search" />;
});
Search.displayName = 'Search';


// export default function App() { // eslint-disable-line max-len, @typescript-eslint/explicit-module-boundary-types
//     const input = useRef<HTMLInputElement>(null);
//     useEffect(() => {
//         if (input.current) {
//             input.current.focus();
//         }
//     }, []);
//     return (<Search ref={input} />);
// }
