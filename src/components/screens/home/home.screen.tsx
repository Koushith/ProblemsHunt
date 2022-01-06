import { Pane } from 'evergreen-ui';
import { NavBar } from '../../../components';
import { UpVote } from '../../upvote/upvote.component';
export const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <Pane display='flex' alignItems='center' justifyContent='center'>
        <UpVote />
      </Pane>
    </>
  );
};
