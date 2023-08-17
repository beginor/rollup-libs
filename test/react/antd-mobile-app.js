import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, ConfigProvider, DatePicker } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
export function App() {
    const [visible, setVisible] = useState(false);
    return (_jsxs(ConfigProvider, { locale: zhCN, children: [_jsx(Button, { color: 'primary', onClick: () => setVisible(true), children: "Hello, world!" }), _jsx("p", { children: _jsx(motion.div, { style: { width: '100px', height: '100px', backgroundColor: '#f00' }, initial: { opacity: 0.5, scale: 0.5 }, animate: { opacity: 1.0, scale: 1.0 }, transition: { duration: 0.5 }, children: "Trans" }) }), _jsx(DatePicker, { visible: visible, onCancel: () => setVisible(false) })] }));
}
