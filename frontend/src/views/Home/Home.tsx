import { useEffect, useState } from "react";
import { Container, Code, Text, VStack, Link } from "@chakra-ui/react";
import githubAPI from "../../API/github";
import Commit from "../../components/Commit/Commit";

const Home = () => {
  const [commits, setCommits] = useState([]);

  const getCommits = async () => {
    const commitsData = await githubAPI.getCommits();
    if (commitsData && commitsData.length > 0) {
      setCommits(commitsData);
    }
  };

  useEffect(() => {
    getCommits();
  }, []);

  return (
    <>
      <Container>
        <br />
        <Text fontSize="xl">Fulltime force - Technical Test</Text>
        <br />
        <Text fontSize="sm">
          The goal of this test will be to create an app that shows git commit history on the same public repository you are working on.
        </Text>
      </Container>
      <Container maxWidth="80%" maxHeight={700} overflow="auto">
        <Text>Repository - {' '}
          <Link href='https://github.com/oljudi/commit-history' isExternal>
            commit-history  
          </Link>
           </Text>
        <VStack spacing={4} align="stretch">
          {commits.map((commit, i) => (
            <Commit key={i} commit={commit} />
          ))}
        </VStack>
      </Container>
      <Container justifyContent='center'>
        <Code><Link href="https://github.com/oljudi" isExternal>🐙 @Oljudi</Link></Code>
      </Container>
    </>
  );
};

export default Home;
