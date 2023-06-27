import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "The first meetup",
    image:
      "https://www.lookandlearn.com/history-images/preview/A/A400/A400007.jpg",
    address: "First meetup street 5, 12345 Somde City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "The second meetup",
    image:
      "https://www.lookandlearn.com/history-images/preview/A/A400/A400007.jpg",
    address: "Second meetup street 10, 12345 Somde City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export function getStaticProps () {

  // fetch data from API

  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage;
