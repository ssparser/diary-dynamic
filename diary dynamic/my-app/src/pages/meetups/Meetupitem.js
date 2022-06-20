import classes from "./meetupitem.module.css";
import Cards from "../ui/Cards";


export default function Meetupitem(props){
    return <li className={classes.item}>
        <Cards>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.date}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button>to favorite</button>
        </div>
        </Cards>
    </li>
}