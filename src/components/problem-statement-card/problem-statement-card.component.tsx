import { Heading, Pane, Paragraph, Badge } from 'evergreen-ui';
import { ProblemStatementCardProps } from './problem-statement-card.props';

export const ProblemStatementCard: React.FC<ProblemStatementCardProps> = (props) => {
  const { heading, description, tags } = props;
  return (
    <Pane width={294} backgroundColor={'white'}>
      <Heading size={400} marginBottom={10}>
        {heading}
      </Heading>
      <Paragraph marginBottom={10}>{description}</Paragraph>
      <Pane>
        <Badge color='green' marginRight={8}>
          Looking FOR CO-FOUNDER
        </Badge>
        <Badge color='blue' marginRight={8}>
          Productivity
        </Badge>
      </Pane>
    </Pane>
  );
};
