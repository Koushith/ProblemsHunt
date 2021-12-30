import { Pane } from 'evergreen-ui';
import styled from 'styled-components';

export const UpVoteContainer = styled(Pane)`
  height: 88px;
  width: 88px;
  padding: 9px 14px;
  border: 2px solid ${(props) => (props.count ? '#474D66' : '#da552f')};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Triangle = styled.div`
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #da552f;
`;
