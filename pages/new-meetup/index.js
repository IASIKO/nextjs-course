import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    async function addMeetupHandler(meetup) {
      const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(meetup),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = response.json()
      console.log(data);
    }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
}

export default NewMeetupPage;
