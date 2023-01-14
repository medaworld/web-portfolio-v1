import { Fragment, useState } from 'react';
import { WorkData } from '../../../helpers/organizers/types';
import {
  ContentContainer,
  DesktopImage,
  ImageContentContainer,
  ImageNavWindow,
  MobileImage,
  ProjectDesc,
  ProjectRoles,
  ProjectText,
  ProjectTitle,
  TextContentContainer,
  VisitButton,
} from '../../../styles/components/Mobile/Work';

function Content({ project }: { project: WorkData }) {
  const [showLinks, setShowLinks] = useState(false);
  const roles = project.roles.map((role: string, key) => {
    return (
      <Fragment key={key}>
        <ProjectRoles>{role}</ProjectRoles>
        <br />
      </Fragment>
    );
  });

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const clickHandler = () => {
    setShowLinks((show) => {
      return !show;
    });
  };

  return (
    <ContentContainer>
      <ImageContentContainer onClick={clickHandler}>
        <ImageNavWindow show={showLinks}>
          {project.links.site && (
            <VisitButton onClick={() => openInNewTab(project.links.site!)}>
              Visit Site
            </VisitButton>
          )}
          {project.links.github && (
            <VisitButton onClick={() => openInNewTab(project.links.github!)}>
              Github
            </VisitButton>
          )}
        </ImageNavWindow>
        <DesktopImage src={project.images.desktop} />
        <MobileImage src={project.images.mobile} />
      </ImageContentContainer>
      <TextContentContainer>
        <ProjectText>
          <ProjectTitle>{project.name}</ProjectTitle>
        </ProjectText>
        <ProjectText>
          <ProjectDesc>{project.description}</ProjectDesc>
        </ProjectText>
        <ProjectText>{roles}</ProjectText>
      </TextContentContainer>
    </ContentContainer>
  );
}

export default Content;
