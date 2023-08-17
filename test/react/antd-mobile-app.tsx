import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, ConfigProvider, DatePicker } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';

export function App(): JSX.Element {
    const [visible, setVisible] = useState(false);
    return (
        <ConfigProvider locale={zhCN}>
          <Button color='primary' onClick={() => setVisible(true)}>Hello, world!</Button>

          <p>
            <motion.div style={{width: '100px', height: '100px', backgroundColor: '#f00'}}
              initial={{opacity: 0.5, scale: 0.5}}
              animate={{opacity: 1.0, scale: 1.0}}
              transition={{duration: 0.5}}>
                  Trans
            </motion.div>
          </p>

          <DatePicker visible={visible} onCancel={() => setVisible(false)} />
        </ConfigProvider>
    );
}
