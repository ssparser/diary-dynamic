import Meetuplist from "./meetups/Meetuplist.js";
import { useEffect, useState } from "react";


function Allmeet(){
  const[isloading,setisloading]=useState(true);
  const [loadedmeetups,setloaded]=useState([]);

  useEffect(()=>{

 setisloading(true);
  fetch('https://notes-c5e1f-default-rtdb.firebaseio.com/meetups.json').then(
    (response)=>{
     return response.json();
    }
  ).then((data)=>{
    const meetups=[];
    for(const key in data){
    const meetup=
    {
      id:key,
      ...data[key]
    };
  meetups.push(meetup);
  }
    setisloading(false);
    setloaded(meetups);
  });
},[])
  if(isloading)
  {
    return <section>
      <p>loading</p>
    </section>
  }
    return(
       <section>
        <h1>All notes</h1>
        <Meetuplist meetups={loadedmeetups}/>
       </section>
    )
}

export default Allmeet;