import React from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

export default function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function searchHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={searchHandler} />
      <EventList items={events} />
    </>
  );
}
