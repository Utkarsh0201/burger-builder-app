import React from "react";
import Aux from "../../../hoc/Auxilliary/Auxilliary";
import Button from "../../UI/Button/Button";
// import classes from "./OrderSummary.css"
const orderSummary=(props)=>{;
    const ingredientSummary=Object.keys(props.ingredients).map(
        igKey=>{
            return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
        }
    );
    return(<Aux>
        <h3>Your Order</h3>
        <p>We have your delicious burger ready with us!!</p>
        <ul>{ingredientSummary}</ul>
        <p><span style={{fontWeight:"bold"}}>TotalPrice:</span> ${props.price.toFixed(2)}</p>
        <p>Countinue to Checkout? </p>
        <Button btnType="Danger" clicked={props.purchaceCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        
    </Aux>);
};
export default orderSummary; 