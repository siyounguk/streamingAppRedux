import React, { Component } from "react";
import { Link } from "react-router";
import Avatar from "material-ui/Avatar";
import { ListItem } from "material-ui/List";
import IconButton from "material-ui/IconButton";
import Cancel from "material-ui/svg-icons/navigation/cancel";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import Eye from "material-ui/svg-icons/image/remove-red-eye";
import { purple800 } from "material-ui/styles/colors";
import MenuItem from "material-ui/MenuItem";
import IconMenu from "material-ui/IconMenu";
import { toastr } from "react-redux-toastr";

const styles = {
  list: {
    padding: '25px 16px 10px 80px'
  },
  item: {
    padding: '30px 10px 35px 110px'
  },
  link: {
    textDecoration: 'none'
  },
  icon: {
    margin: '0 10px -5px'
  }
};

const iconButtonElement = (

  <IconButton
    touch={true}
    tooltip="More"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={purple800} />
  </IconButton>
);

class FavoriteSingleStream extends Component {

  constructor(props) {
    super(props);
  }

  removeFavorite(_id) {
    this.props.actions.removeStreamToFavorite(_id);
    toastr.error('This stream have been remove from your favorite!');
  }

  render() {
    const { _id, display_name, logo, game } = this.props;
    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <Link to={`/streams/${display_name}`} style={styles.link}><MenuItem>See <Eye
          style={styles.icon} /></MenuItem></Link>
        <MenuItem onClick={this.removeFavorite.bind(this, _id)}>Delete <Cancel
          style={styles.icon} /></MenuItem>
      </IconMenu>
    );

    return (
      <div>
        <ListItem leftAvatar={<Avatar size={60} src={logo} />}
                  disabled={true}
                  rightIconButton={rightIconMenu}
                  primaryText={display_name}
                  secondaryText={`Play: ${game}`}
                  primaryTextStyle={{marginRight: '30px'}}
                  style={styles.item} />
      </div>
    );

  }

}

export default FavoriteSingleStream;
