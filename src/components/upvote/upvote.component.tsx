import { Heading, Pane, Text, Image } from 'evergreen-ui';
import styled from 'styled-components';
import UpvoteImage from '../../assets/icons/upvote.svg';
export const UpVoteContainer = styled(Pane)`
  height: 88px;
  width: 88px;
  padding: 9px 14px;
  border: 2px solid #da552f;
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

export const UpVote = () => {
  return (
    <UpVoteContainer>
      <Pane height={'72px'} width={'58px'}>
        <Pane display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
          <Image src={UpvoteImage} />
        </Pane>
        <Pane display='flex' flexDirection='column' alignItems='center' justifyContent='center' marginTop={'1.61px'}>
          <Heading size={500} padding={'2px'}>
            10
          </Heading>
          <Text size={300} marginTop={'1px'}>
            UPVOTES
          </Text>
        </Pane>
      </Pane>
    </UpVoteContainer>
  );
};
