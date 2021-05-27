import React from 'react';
import RactDom from 'react-dom';
import {SpeechProvider, speechProvider} from '@speechly/react-client';

import {Provider} form './context/context';
import App from './App';
import './index.css';
ReactDOM.render(
<SpeechProvider appid="">
<Provider>
<App/>
</Provider>
</SpeechProvider>
document.getElementById('root'),
);