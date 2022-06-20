import classes from './links.module.css'

export default function Links()
{
    return(
        
        <header className={classes.header}>
        <div className={classes.logo}>notes</div>
        <nav>
        <ul>
            
        <li><a href="./pages/Meet.js">New notes</a></li>
        <li><a href="./pages/Allmeet.js">All notes</a></li>
        </ul>
        </nav>
        </header>
    )
}