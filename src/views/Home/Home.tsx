import React, { useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Frontend from "../Frontend/Frontend";
import githubAPI from "../../API/github";

const Home = () => {

  const tabsData = [
    {
      label: 'Frontend',
      content: <TabPanel><Frontend /></TabPanel>
    },
    {
      label: 'Backend',
      content: <TabPanel>two</TabPanel>
    }
  ]

  const getCommits = async () => {
    const commits = await githubAPI.getCommits()
  }

  useEffect(() => {
    getCommits()
  }, [])
  

  return (
    <Tabs>
      <TabList>
        {tabsData.map((tab, i) => (<Tab key={i}>{tab.label}</Tab>))}
      </TabList>

      <TabPanels>
        {tabsData.map((tab) => (<>{tab.content}</>))}
      </TabPanels>
    </Tabs>
  );
};

export default Home;
