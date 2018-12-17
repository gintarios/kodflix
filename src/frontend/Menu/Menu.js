import React, { Component } from "react";
import "./Menu.css";
import Icon1 from "../common/icons/icon-menu-closed";
import Icon2 from "../common/icons/icon-menu-open";
import Icon3 from "../common/icons/icon-menu-home";
import Icon4 from "../common/icons/icon-menu-tvshows";
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
          <Link to="/">
            <div className="icon-item">
              <div className="icon-box">
                <Icon3 />
              </div>
              <div className="text-box">
                {" "}
                <h3>Home</h3>{" "}
              </div>
            </div>
          </Link>
          <Link to="/manage/tv-shows">
            <div className="icon-item">
              <div className="icon-box">
                <Icon4 />
              </div>{" "}
              <div className="text-box">
                {" "}
                <h3>Manage TV shows</h3>{" "}
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Menu;
