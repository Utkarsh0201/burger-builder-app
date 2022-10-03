import React from "react";
import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigaionItems";
const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div onClick={props.showDrawer} className={[classes.Menu,classes.MobileOnly].join(' ')}>MENU</div>
      <div className={classes.Logo}><Logo ></Logo></div>
      
      <nav className={classes.DesktopOnly}>
          <NavigationItems/>
      </nav>
    </header>
  );
};
export default toolbar;
