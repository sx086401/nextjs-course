import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

export default function NewMeetupPage() {
  const router = useRouter()

  async function addMeetupHandler(newMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(newMeetupData),
      headers: { 'Content-Type': 'application/json' },
    })

    router.push('/')
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}
