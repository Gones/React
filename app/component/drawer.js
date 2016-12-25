import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const PubSub = require('pubsub-js');

class DrawerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
	this.token = null;
	
	this.handleClose = this.handleClose.bind(this);
  }
  
  componentDidMount() {
	  var subscriber = function(msg, data) {
		  this.setState({open: !this.state.open});
	  }.bind(this);
	  
	  this.token = PubSub.subscribe("MyTopic", subscriber);
  }
  
  componentWillUnmount() {
	  PubSub.unsubscribe(this.token);
  }

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Tasks</MenuItem>
		  <MenuItem onTouchTap={this.handleClose}>Plans</MenuItem>
		  <MenuItem onTouchTap={this.handleClose}>Fruits</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>About</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default DrawerControl;