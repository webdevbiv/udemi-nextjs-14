import Link from "next/link";

const CLIENTS = [
  { id: "igor", name: "Igor" },
  { id: "maximillian", name: "Maximillian" },
];
export default function Clients() {
  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {CLIENTS.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: `/clients/[id]`,
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
