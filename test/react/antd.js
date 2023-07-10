import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { Button, ConfigProvider, DatePicker } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday.js';
import localeData from 'dayjs/plugin/localeData.js';
dayjs.extend(weekday);
dayjs.extend(localeData);
function App() {
    return (_jsxs(ConfigProvider, { locale: zhCN, children: [_jsx("p", { children: _jsx(Button, { children: "OK" }) }), _jsx("p", { children: _jsx(DatePicker, { defaultValue: dayjs(new Date()) }) })] }));
}
const root = createRoot(document.getElementById('app'));
root.render(_jsx(App, {}));
