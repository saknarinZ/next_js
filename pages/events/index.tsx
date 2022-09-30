import { useRouter } from "next/router";
import Eventlist from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year: any, month: any) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <Eventlist items={events} />
    </div>
  );
}

export default AllEventsPage;
