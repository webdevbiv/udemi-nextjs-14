import React from "react";
import Link from "next/link";

export default function EventItem({ event: { id, title } }) {
  return (
    <li key={id}>
      <Link href={`/events/${id}`}>{title}</Link>
    </li>
  );
}
