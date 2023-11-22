import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";

type ICommitData = {
  name: string;
  email: string;
  date: string;
};

type ICommitUserData = {
  avatar_url: string;
  login: string;
};

interface ICommit {
  author: ICommitData;
  committer: ICommitData;
  message: string;
  comitterUserData: ICommitUserData;
}

const Commit: React.FC<{ commit: ICommit }> = (props) => {
  const { commit } = props;
  return (
    <Card>
      <CardHeader paddingBottom={0}>
        <Flex>
          <Avatar
            size="sm"
            src={commit.comitterUserData.avatar_url}
            name={commit.comitterUserData.login}
          />
          <Text marginLeft={2}>
            {commit.message?.charAt(0).toUpperCase() + commit.message?.slice(1)}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        Committer:
        {Object.keys(commit.author).map((key: string, i: number) => (
          <Text key={i} fontSize="sm">
            {key.charAt(0).toUpperCase() + key.slice(1)} -{" "}
            {key === "date"
              ? dayjs(commit.author[key]).format("DD/MMMM/YYYY HH:mm:ss")
              : commit.author[key]}
          </Text>
        ))}
      </CardBody>
    </Card>
  );
};

export default Commit;
