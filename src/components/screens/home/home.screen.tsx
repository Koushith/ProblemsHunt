import { Pane } from 'evergreen-ui';
import { NavBar } from '../../../components';
import { SideBar } from '../../side-bar/sidebar-component';

export const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <Pane display='flex' alignItems='center' justifyContent='center' flexDirection={'column'} marginTop={20}>
        <SideBar />
      </Pane>
    </>
  );
};
