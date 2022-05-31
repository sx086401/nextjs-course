import NewMeetupForm from '../../components/meetups/NewMeetupForm'

export default function NewMeetupPage() {
  function addMeetupHandler(newMeetup) {}

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}
