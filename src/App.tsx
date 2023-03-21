import React from 'react';
import './App.css';
import Stem from './views/stem/Stem';
import { CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import { theme } from 'style/theme';

const connect = async () => {
  const res = await fetch('https://dev.pem.electricity.cfd/negotiate?id=skip');
  const data = await res.json();
  const ws = new WebSocket(data.url, 'json.webpubsub.azure.v1');
  const ackId = 0;
  ws.onopen = () => {
    console.log('connected');
  };
  ws.onerror = evt => {
    console.error(`WebSocket error ${evt}`);
  };
  ws.onclose = evt => {
    console.error(`WebSocket closed, code: ${evt.code}`);
  };
  ws.onmessage = event => {
    const message = JSON.parse(event.data);
    // if (message.type === 'message' && message.group === 'stream') {
    console.log(event, message);
  };
};
// const useStyles = makeStyles(() => ({
//   main: { position: 'relative', display: 'flex', padding: 16 },
//   content: { height: '100%', width: '100%', display: 'flex' },
// }));
function App() {
  return (
    // <ThemeProvider theme={theme}>
    // <CssBaseline />
    <div className='stem-container'>
      <Stem />
    </div>
    // </ThemeProvider>
  );
}

export default App;
