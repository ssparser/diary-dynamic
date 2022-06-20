import classes from "./layout.module.css";
import Links from "./Links";

export default function Layout(props)
{
    return(
        <div>
            <Links/>
            <main className={classes.main}>
            {props.children}
            </main>
        </div>
    );
}