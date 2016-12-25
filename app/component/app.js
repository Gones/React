import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderControl from './header';
import ButtonControl from './button';
import ListControl from './list';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <HeaderControl />
	  <ListControl />
	  <ButtonControl />
	</div>
  </MuiThemeProvider>
);

export default App