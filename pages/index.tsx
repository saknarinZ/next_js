import type { NextPage } from "next";
import { getFeaturedEvents } from "../dummy-data";
import Eventlist from "../components/events/event-list";

const HomePage: NextPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Eventlist items={featuredEvents} />
    </div>
  );
};

export default HomePage;
