import type { NextPage } from "next";
import Link from "next/link";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => {
  return (
    <div>
      <h1> The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
