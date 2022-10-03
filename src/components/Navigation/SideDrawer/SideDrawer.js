import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigaionItems";
import Backdrop from "../../UI/Backdrop/Backdop";
import Aux from "../../../hoc/Auxilliary/Auxilliary";
import classes from "./SideDrawer.css";
const sideDrawer = (props) => {
    let attachedClasses=[classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses=[classes.SideDrawer,classes.Open];
    }
  return ( 
    <Aux>
        <Backdrop show={props.open} clicked={props.showDrawer}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo></Logo>
        </div>

        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
  );
};
export default sideDrawer;
