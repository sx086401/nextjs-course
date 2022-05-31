import { useRouter } from 'next/router'
import Head from 'next/head'
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

  return (
    <>
      <Head>
        <title>Add New Meetup</title>
        <meta name="description" content="Add a new network opportunity!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  )
}
