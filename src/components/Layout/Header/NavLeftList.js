import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { withRouter } from 'react-router-dom';

class NavLeftList extends React.Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item">

          <div>
            <IconButton
              aria-label="notifications"
              className="header-btn"
              // aria-owns={anchorEl ? 'header-long-menu' : null}
              // aria-haspopup="true"
              // onClick={this.handleClick}
            >
              <i className="material-icons">notifications_none</i>
            </IconButton>
          </div>
        </li>
      </ul>
    );
  }
}

export default withRouter(NavLeftList);
