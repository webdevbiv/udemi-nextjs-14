import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname, router.query);
  return (
    <div>
      <h1>PortfolioProjectPage</h1>
    </div>
  );
}
