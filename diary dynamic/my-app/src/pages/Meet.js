import Newmeetupform from "./meetups/Newmeetupform";
import { useHistory } from "react-router-dom";


function Meet(){
const history=useHistory();

function addmeetuphandler(meetupData)
{
fetch('https://notes-c5e1f-default-rtdb.firebaseio.com/meetups.json',
    {
        method:'POST',
        body:JSON.stringify(meetupData),
        headers:{
            'Content-Type':'application/json'
        }
    }
).then(()=>{
    history.replace('/');
})
}

return(
    <section>
            <h1>
                Add new note
            </h1>
            <Newmeetupform onAddMeetup={addmeetuphandler}/>

        </section>
)
}

export default Meet;