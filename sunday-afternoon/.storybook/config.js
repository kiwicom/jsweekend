import { configure } from '@storybook/react';
import 'antd/dist/antd.css';

function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
