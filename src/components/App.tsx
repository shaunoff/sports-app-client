import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import {lightTheme} from '../lib/theme'
import Test  from './Test'
import store, {history} from '../store'
import './App.css';
import { ConnectedRouter } from 'connected-react-router';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={lightTheme}>
            <div className="App">
                <Test message={'Click Here'} hello={'Submit'}/>
            </div>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
