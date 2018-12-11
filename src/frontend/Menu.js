import React, { Component } from "react";
import Icon1 from "./icons/icon-menu-closed";
import Icon2 from "./icons/icon-menu-open";
import Icon3 from "./icons/icon-menu-home";
import Icon4 from "./icons/icon-menu-tvshows";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: true
    };
  }

  toggleMenu = () => {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible
    });
  };

  render() {
    let isMenuVisible = this.state.isMenuVisible;
    return isMenuVisible ? (
      <div className="menu-closed">
        <button onClick={this.toggleMenu} className="icon-menu">
          <Icon1 />
        </button>
      </div>
    ) : (
      <div className="menu-open">
        <button onClick={this.toggleMenu} className="icon-menu">
          <Icon2 />
        </button>

        <div className="icon-container">
          <div className="icon-item">
            <Link to="/">
              <Icon3 /> Home
            </Link>
          </div>
          <div className="icon-item">
            <Link to="/manage/tv-shows">
              <Icon4 /> Manage TV Shows
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
