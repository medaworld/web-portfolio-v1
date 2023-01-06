import { WorkData } from '../../../helpers/organizers/types';
import {
  Description,
  Roles,
  SummaryTextContainer,
  Title,
} from '../../../styles/components/Desktop/Work';

function SummaryText({ workData }: { workData: WorkData }) {
  const roles = workData.roles?.map((role: string, key) => {
    return <p key={key}>{role}</p>;
  });
  return (
    <SummaryTextContainer>
      <Title>{workData.name}</Title>
      <Description>{workData.description}</Description>
      <Roles>{roles}</Roles>
    </SummaryTextContainer>
  );
}
export default SummaryText;
