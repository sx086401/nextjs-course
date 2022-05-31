import MeetupList from '../components/meetups/MeetupList'
import { useState, useEffect } from 'react'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'The second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 6, 14545 Some City',
    description: 'This is a second meetup',
  },
]

export default function HomePage(props) {
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS)
  }, [])

  return <MeetupList meetups={props.meetups} />
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

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  }
}
