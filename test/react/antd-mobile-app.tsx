import { Button, ConfigProvider, DatePicker } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import { useState } from "react";

export function App(): JSX.Element {
    const [visible, setVisible] = useState(false);
    return (
        <ConfigProvider locale={zhCN}>
          <Button color='primary' onClick={() => setVisible(true)}>Hello, world!</Button>
          <DatePicker visible={visible} onCancel={() => setVisible(false)} />
        </ConfigProvider>
    );
}
