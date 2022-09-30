import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import Button from "../ui/button";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem(props: IEventItem) {
  const { title, image, date, location, id } = props;
  const humanReadableData: any = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const ExploreLink = `/events/${id}`;

  return (
    <li className="shadow rounded-lg overflow-hidden bg-white m-4 flex flex-col md:flex-row gap-4">
      <div className="w-full flex-initial h-40 md:h-auto md:w-[75%]">
        <img className="w-full  h-40 md:h-56" src={"/" + image} alt={title} />
      </div>

      <div className="w-full px-0 text-center md:text-left">
        <div className="">
          <h2 className="my-2 text-2xl font-bold text-black">{title}</h2>
        </div>
        <div className="flex gap-2 items-center font-bold text-[#666]">
          <DateIcon />
          <time>{humanReadableData}</time>
        </div>
        <div className="flex gap-2 items-center text-[#666]">
          <AddressIcon />
          <address className="whitespace-pre my-2 mx-0">
            {formattedAddress}
          </address>
        </div>
        <div className="text-black  p-4 flex md:justify-end">
          <Button link={ExploreLink}>
            <span className="align-middle">Explore Event</span>
            <span className="ml-2 inline-flex justify-center items-center align-middle">
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;

type IEventItem = {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
};
