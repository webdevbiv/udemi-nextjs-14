export default function UserProfilePage(props) {
  return <div> {props.username}</div>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      username: "MAX",
    },
  };
}
