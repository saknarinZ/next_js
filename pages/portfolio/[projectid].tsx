import type { NextPage } from "next";
import { useRouter } from "next/router";

const PortfolioProjectPage: NextPage = () => {
  const router = useRouter();

  router.query;
  console.log("🚀 ~ PortfolioProjectPage ~ router.pathname", router.pathname);
  console.log("🚀 ~ PortfolioProjectPage ~ router.query", router.query);

  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1> The Portfolio Project Page</h1>
    </div>
  );
};

export default PortfolioProjectPage;
