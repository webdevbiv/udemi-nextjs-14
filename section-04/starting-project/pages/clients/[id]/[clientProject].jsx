import { useRouter } from "next/router";
export default function ClientProject() {
  const router = useRouter();
  const { clientProject } = router.query;
  return (
    <div>
      <h1>{clientProject}</h1>
      <button onClick={() => router.push("/clients")}>Back to Clients</button>
      <button onClick={() => router.push("/")}>Back to Home</button>
    </div>
  );
}
