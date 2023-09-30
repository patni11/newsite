import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import FavoriteWritings from "../components/FavoriteWritings";
import Hero from "../components/Hero";

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
