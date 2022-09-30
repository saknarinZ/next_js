import { useRouter } from "next/router";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query;

  return (
    <div>
      <h1>Filtered Events page</h1>
    </div>
  );
}

export default FilteredEventsPage;
