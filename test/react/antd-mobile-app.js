import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, ConfigProvider, DatePicker } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import { useState } from "react";
export function App() {
    const [visible, setVisible] = useState(false);
    return (_jsxs(ConfigProvider, { locale: zhCN, children: [_jsx(Button, { color: 'primary', onClick: () => setVisible(true), children: "Hello, world!" }), _jsx(DatePicker, { visible: visible, onCancel: () => setVisible(false) })] }));
}
