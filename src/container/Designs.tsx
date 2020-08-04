import React from 'react';
import PageContent from '../components/PageContent';
import { DESIGN_PROJECTS, Design } from '../constants';

interface Props {}

export const Designs = () => {
  let designs = DESIGN_PROJECTS.map(
    (project: Design): JSX.Element => {
      return (
        <div className="Designs__card u-mbot-md" key={project.id}>
          <div className="Designs__shape-border  u-mbot-sm">
            <div className="Designs__shape-inside">
              <img className="Designs__img" src={project.imageId} alt={`${project.name} project`} />
            </div>
          </div>
          <p className="Designs__name u-mbot-sm">{project.name}</p>
          <a
            className="Designs__preview btn btn--primary u-mbot-sm"
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
          </a>
          <p className="Designs__desc u-mbot-sm">{project.description}</p>
        </div>
      );
    }
  );

  return (
    <PageContent>
      <div className="Designs">
        <h1 className="Designs__header mobile">Design Portfolio</h1>
        {designs}
      </div>
    </PageContent>
  );
};
