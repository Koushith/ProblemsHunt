import { useState } from 'react';
import { Heading, Pane, Text, Image } from 'evergreen-ui';
import UpvoteActive from '../../assets/icons/upvoteActive.svg';
import UpvoteDefault from '../../assets/icons/upvoteDefault.svg';
import { UpVoteContainer } from './upvote.component.styles';

export const UpVote = (props: any) => {
  const { voteCount } = props;

  const [count, setCount] = useState(false);
  console.log('switch', count);

  const handelCounter = () => {
    setCount(!count);
  };

  return (
    <UpVoteContainer count={count}>
      <Pane height={'72px'} width={'58px'}>
        <Pane
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          cursor='pointer'
          onClick={handelCounter}
        >
          <Image src={!count ? UpvoteActive : UpvoteDefault} />
        </Pane>
        <Pane display='flex' flexDirection='column' alignItems='center' justifyContent='center' marginTop={'1.61px'}>
          <Heading size={500} padding={'2px'}>
            {voteCount}
          </Heading>
          <Text size={300} marginTop={'1px'}>
            UPVOTES
          </Text>
        </Pane>
      </Pane>
    </UpVoteContainer>
  );
};
