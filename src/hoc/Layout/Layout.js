import React, { Component } from "react";
import Aux from "../Auxilliary/Auxilliary";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerHandler = () => {
    const showDrawer = this.state.showSideDrawer;
    this.setState({
      showSideDrawer: !showDrawer,
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar showDrawer={this.sideDrawerHandler} />

        <SideDrawer
          open={this.state.showSideDrawer}
          showDrawer={this.sideDrawerHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
