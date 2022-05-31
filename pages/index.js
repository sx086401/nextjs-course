import Head from 'next/head'
import MeetupList from '../components/meetups/MeetupList'
import { connectClient } from './api/utils'

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>NextJS Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  )
}

// export function getServerSideProps(context) {
//   const req = context.req
//
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   }
// }

export async function getStaticProps() {
  const client = await connectClient()
  const db = client.db()
  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  }
}
