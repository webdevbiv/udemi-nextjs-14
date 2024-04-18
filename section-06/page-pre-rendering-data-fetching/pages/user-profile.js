export default function UserProfilePage(props) {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: "MAX",
    },
  };
}
