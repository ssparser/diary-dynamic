import classes from "./cards.module.css";

export default function Cards(props)
{
    return(
        <div className={classes.card}>
            {props.children}
        </div>
    )
}