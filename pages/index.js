import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import FavoriteWritings from "../components/FavoriteWritings";
import Hero from "../components/Hero";
import userData from "@constants/data";

export default function Home() {
  return (
    <ContainerBlock
      title="Shubh Patni"
      description="Shubh Patni's personal website"
    >
      <Hero />
      <FavoriteWritings />
      <FavouriteProjects />
    </ContainerBlock>
  );
}

// export const getServerSideProps = async () => {
//   let token = process.env.GITHUB_AUTH_TOKEN;
//   const repositories = await getLatestRepos(userData, token);

//   return {
//     props: {
//       repositories,
//     },
//   };
// };
