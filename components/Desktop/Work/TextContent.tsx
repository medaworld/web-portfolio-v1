import { Fragment, useCallback, useEffect, useState } from 'react';
import { ProjectProps } from '../../../helpers/organizers/types';
import {
  ProjectDesc,
  ProjectRoles,
  ProjectText,
  ProjectTitle,
  TextContentContainer,
} from '../../../styles/components/Desktop/Work';
function TextContent({ project }: { project: ProjectProps }) {
  const roles = project.roles.map((role: string, key) => {
    return (
      <Fragment key={key}>
        <ProjectRoles>{role}</ProjectRoles>
        <br />
      </Fragment>
    );
  });

  return (
    <TextContentContainer>
      <ProjectText>
        <ProjectTitle>{project.name}</ProjectTitle>
      </ProjectText>
      <ProjectText>
        <ProjectDesc>{project.description}</ProjectDesc>
      </ProjectText>
      <ProjectText>{roles}</ProjectText>
    </TextContentContainer>
  );
}
export default TextContent;
