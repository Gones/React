import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import DrawerControl from './drawer';

const PubSub = require('pubsub-js');

class HeaderControl extends React.Component { 
  constructor(props) {
    super(props);
	
	this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = () => {  
	  PubSub.publish("MyTopic", "Click");
  }
  
  render() { 
	  return (
	    <div>
		<AppBar 
			title="Todo"
			iconElementLeft={
				<IconButton onClick={this.handleClick}><MenuIcon /></IconButton>
			}
			iconElementRight={
				<IconMenu
					iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
					targetOrigin={{horizontal: 'right', vertical: 'top'}}
					anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
				<MenuItem primaryText="About" />
			  </IconMenu>
			}
		/>
		<DrawerControl />
		</div>
	  );
  }
}

export default HeaderControl;