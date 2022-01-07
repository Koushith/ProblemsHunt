import { Pane } from 'evergreen-ui';
import { NavBar } from '../../../components';
import { GenericAvatar } from '../../avatar/generic-avatar.component';
import { SideBar } from '../../side-bar/sidebar-component';

export const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <Pane display='flex' alignItems='center' justifyContent='center' flexDirection={'column'} marginTop={20}>
        <GenericAvatar name='kou' date={10} />
      </Pane>
    </>
  );
};
