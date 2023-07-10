import React from 'react';
import { createRoot } from 'react-dom/client';

import { Button, ConfigProvider, DatePicker } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday.js';
import localeData from 'dayjs/plugin/localeData.js';

dayjs.extend(weekday);
dayjs.extend(localeData);

function App(): JSX.Element {
    return (
        <ConfigProvider locale={zhCN}>
          <p>
            <Button>OK</Button>
          </p>
          <p>
            <DatePicker defaultValue={dayjs(new Date())}/>
          </p>
        </ConfigProvider>
    );
}

const root = createRoot(document.getElementById('app')!);

root.render(
    <App />
);
