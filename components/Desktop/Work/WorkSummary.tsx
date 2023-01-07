import { WorkData } from '../../../helpers/organizers/types';
import { WorkSummaryContainer } from '../../../styles/components/Desktop/Work';
import SummaryImages from './SummaryImages';
import SummaryText from './SummaryText';

function WorkSummary({
  workData,
  scrollPercent,
}: {
  workData: WorkData;
  scrollPercent: number;
}) {
  return (
    <WorkSummaryContainer>
      {/* <SummaryText workData={workData} />
      <SummaryImages images={workData.images} /> */}
    </WorkSummaryContainer>
  );
}
export default WorkSummary;
