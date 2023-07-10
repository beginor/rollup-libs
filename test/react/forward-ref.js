import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
const Search = forwardRef((props, ref) => {
    return _jsx("input", { ref: ref, type: "search" });
});
Search.displayName = 'Search';
