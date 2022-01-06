import { Pane, Heading } from 'evergreen-ui';
import { ProblemStatementCard } from '..';

export const SideBar = () => {
  return (
    <Pane width={400} background='white' padding={20} borderRadius={0.5}>
      <Heading size={400} marginBottom={20} textTransform='uppercase' color='GrayText'>
        Trending Problem Statements
      </Heading>
      <Pane marginBottom={'3.2rem'}>
        <ProblemStatementCard
          heading='PandaDoc for Developers'
          description='A seamless way to generate documents and collect eSignatures'
        />
      </Pane>
    </Pane>
  );
};
