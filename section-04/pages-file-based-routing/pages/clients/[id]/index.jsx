import { useRouter } from "next/router";

export default function ClientProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  function loadProjectHandler() {
    router.push(`/clients/${id}/project1`);
  }

  return (
    <div>
      <h1>Client {router.query.id}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
