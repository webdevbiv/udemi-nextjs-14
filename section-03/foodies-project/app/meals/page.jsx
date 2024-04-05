import Link from "next/link";

function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <Link href="/meals/1">Meal 1</Link>
      <Link href="/meals/2">Meal 2</Link>
    </main>
  );
}

export default MealsPage;
