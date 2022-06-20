import classes from  "./meetuplist.module.css"
import Meetupitem from "./Meetupitem.js"

export default function Meetuplist(props)
{
    return(
    <ul className={classes.list}>
        {props.meetups.map((meetup)=>(
        <Meetupitem key={meetup.id}
        id={meetup.id}
         date={meetup.date}
          title={meetup.title}
        description={meetup.description}/>))}
    </ul>)
}