import React from "react";

export default function UserId(props) {
  return (
    <div>
      <h1>user: {props.id}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { uid } = params;

  return {
    props: {
      id: uid,
    },
  };
}
