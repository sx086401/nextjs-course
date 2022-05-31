import MeetupDetail from '../../components/meetups/MeetupDetail'

export default function MeetupDetailPage(props) {
  return (
    <MeetupDetail
      img={props.meetupData.img}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId

  return {
    props: {
      meetupData: {
        id: meetupId,
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        title: 'A First Meetup',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup',
      },
    },
    revalidate: 10,
  }
}
