import EventItem from "./event-item";

function Eventlist(props: any) {
  const { items }: any = props;

  return (
    <ul className="w-[90%] max-w-[40rem] my-20 mx-auto">
      {items.map((event: any) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default Eventlist;
