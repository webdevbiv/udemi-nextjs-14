import React from "react";
import EventItem from "./event-item";

export default function EventList({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
