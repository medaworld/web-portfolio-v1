import {
  ProjectDescription,
  ProjectRoles,
  ProjectTitle,
} from '../../../styles/components/Desktop/Work';

function TextContent({
  project,
}: {
  project: { name: string; description: string; roles: string[] };
}) {
  const roles = project.roles.map((role: string, key) => {
    return <p key={key}>{role}</p>;
  });
  return (
    <>
      <ProjectTitle>{project.name}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectRoles>{roles}</ProjectRoles>
    </>
  );
}
export default TextContent;
