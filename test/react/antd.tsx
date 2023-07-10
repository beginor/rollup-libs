import React from 'react';
import { createRoot } from 'react-dom/client';

import { Button, ConfigProvider, DatePicker } from 'antd';

import zhCN from 'antd/locale/zh_CN';

import dayjs from 'dayjs';
import locale from 'dayjs/locale/zh-cn';

import weekday from 'dayjs/plugin/weekday.js';
import localeData from 'dayjs/plugin/localeData.js';

dayjs.locale('zh-cn', locale);
dayjs.extend(weekday);
dayjs.extend(localeData);

function App(): JSX.Element {
    return (
        <ConfigProvider locale={zhCN}>
          <div>
            <Button>OK</Button>
          </div>
          <div>
            <DatePicker defaultValue={dayjs(new Date())}/>
          </div>
        </ConfigProvider>
    );
}

const root = createRoot(document.getElementById('app')!);

root.render(
    <App />
);
