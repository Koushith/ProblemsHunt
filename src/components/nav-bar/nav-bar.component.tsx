import { Button, Heading, Pane, Strong, Image, SearchInput } from 'evergreen-ui';
import styled from 'styled-components';
import Logo from '../../assets/logos/logo.svg';

export const NavbarContainer = styled(Pane)`
  padding: 21px 70px;
  background: white;
  box-shadow: 0px 0px 1px 1px rgba(33, 41, 63, 0.1);
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Pane)``;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  li {
    padding: 10px;
  }
`;

export const ButtonContainer = styled(Pane)`
  display: flex;
`;

export const NavBar = () => {
  return (
    <NavbarContainer>
      <Pane alignItems='center' display='flex' gap={70}>
        <Image src={Logo} />
        <SearchInput placeholder='Search...' />
      </Pane>

      {/* Links */}
      <Nav>
        <ul>
          <li>
            {' '}
            <Strong size={300}>Home</Strong>
          </li>
          <li>
            {' '}
            <Strong size={300}>Discover Problems</Strong>
          </li>
          <li>
            {' '}
            <Strong size={300}>Solutions</Strong>
          </li>
          <li>
            {' '}
            <Strong size={300}>About</Strong>
          </li>
        </ul>
      </Nav>
      {/* button */}
      <ButtonContainer gap={18}>
        <Button color='orange'>Submit</Button>
        <Button appearance='primary'>Sign In</Button>
      </ButtonContainer>
    </NavbarContainer>
  );
};
