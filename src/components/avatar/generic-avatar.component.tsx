import { Avatar, Pane, Heading, Text } from 'evergreen-ui';
import { GenericAvatarComponentProps } from './generic-avatar-component.props';

export const GenericAvatar: React.FC<GenericAvatarComponentProps> = (props) => {
  const { name, date } = props;
  return (
    <Pane display='flex' alignItems='center' justifyContent='center' gap={8}>
      <Avatar name='Jeroen Ransijn' hashValue='id_124' size={40} />
      <Pane paddingTop={8} paddingBottom={8}>
        <Heading size={500}>{name}</Heading>
        <Text color='muted'>{date} Days ago</Text>
      </Pane>
    </Pane>
  );
};
