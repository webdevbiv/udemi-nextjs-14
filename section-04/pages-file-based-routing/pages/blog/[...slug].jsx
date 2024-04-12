import { useRouter } from "next/router";

export default function BlogSlug() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>BlogSlug</h1>
    </div>
  );
}
