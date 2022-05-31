import Head from 'next/head'
import { ObjectId } from 'mongodb'
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { connectClient } from '../api/utils'

export default function MeetupDetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  )
}

export async function getStaticPaths() {
  const client = await connectClient()
  const db = client.db()
  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

  client.close()

  return {
    fallback: false,
    paths: (await meetups).map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  }
}

export async function getStaticProps(context) {
  const client = await connectClient()
  const db = client.db()
  const meetupsCollection = db.collection('meetups')

  const meetupId = context.params.meetupId

  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })

  client.close()

  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        image: meetup.image,
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
      },
    },
    revalidate: 10,
  }
}
