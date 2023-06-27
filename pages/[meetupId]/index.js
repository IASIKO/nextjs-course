import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://www.lookandlearn.com/history-images/preview/A/A400/A400007.jpg",
        title: "satauri",
        address: "misamarti",
        description: "aghwera",
      },
    },
  };
}

export default MeetupDetails;
