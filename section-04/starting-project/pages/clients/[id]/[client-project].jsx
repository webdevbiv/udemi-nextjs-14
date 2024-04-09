import { useRouter } from "next/router";

export default function ClientProject() {
  const router = useRouter();
  return (
    <div>
      <h1>ClientProject</h1>
      <button>Load Project A</button>
    </div>
  );
}
