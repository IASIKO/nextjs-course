import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    function addMeetupHandler(meetup) {
        console.log(meetup);
    }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
}

export default NewMeetupPage;
