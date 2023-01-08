import { Fragment, useCallback, useEffect, useState } from 'react';
import { ProjectProps } from '../../../helpers/organizers/types';
import {
  ProjectText,
  TextContentContainer,
} from '../../../styles/components/Desktop/Work';
function TextContent({ project }: { project: ProjectProps }) {
  const roles = project.roles.map((role: string, key) => {
    return (
      <Fragment key={key}>
        <span>{role}</span>
        <br />
      </Fragment>
    );
  });

  return (
    <TextContentContainer>
      <ProjectText fontSize={50}>
        <span>{project.name}</span>
      </ProjectText>
      <ProjectText fontSize={30}>
        <span>{project.description}</span>
      </ProjectText>
      <ProjectText fontSize={25}>{roles}</ProjectText>
    </TextContentContainer>
  );
}
export default TextContent;
