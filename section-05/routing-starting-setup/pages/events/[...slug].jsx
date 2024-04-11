import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

export default function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const year = filterData[0];
  const month = filterData[1];

  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <div className="center">
        <p>Invalid filter. Please adjust your values!</p>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="center">
        <p>No events found for the chosen filter!</p>
      </div>
    );
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}
