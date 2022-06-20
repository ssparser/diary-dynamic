import Cards from "../ui/Cards"
import classes from "./newmeetupform.module.css"
import { useRef } from "react";
export default function Newmeetupform(props)
{
const titleInputRef=useRef();
const dateInputRef=useRef();
const descriptionInputRef=useRef();
function submithandler(event)
{
    event.preventDefault();
    const enteredtitle=titleInputRef.current.value;
    const entereddate=dateInputRef.current.value;
    const entereddescription=descriptionInputRef.current.value;

    const meetupdata={
        title:enteredtitle,
        date:entereddate,
        description:entereddescription,
    };
    props.onAddMeetup(meetupdata)
}

    return(
        <Cards>
            <form className={classes.form} onSubmit={submithandler}>
<div className={classes.control}>
<label htmlFor="title">Title</label>
<input type="text" required id="title" placeholder="Title" ref={titleInputRef}/>
</div>

<div className={classes.control}>
<label htmlFor="date">Date</label>
<input type="date" required id="date" placeholder="Date" ref={dateInputRef}/>
</div>

<div className={classes.control}>
<label htmlFor="description">Description</label>
<textarea id="description" required rows='5' ref={descriptionInputRef}></textarea>
</div>

<div className={classes.actions}>
<button>Add Note</button>
</div>
 </form>
</Cards>
    )
}