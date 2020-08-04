import React from 'react';
import PageContent from '../components/PageContent';
import { PORTFOLIO_PROJECTS, Project } from '../constants/portfolio';

interface Props {}

export const PortfolioList = () => {
  let portfolioList = PORTFOLIO_PROJECTS.map(
    (project: Project): JSX.Element => {
      return (
        <div className="PortfolioList__card u-mbot-md" key={project.id}>
          <div className="PortfolioList__shape-border  u-mbot-sm">
            <div className="PortfolioList__shape-inside">
              <img
                className="PortfolioList__img"
                src={project.imageId}
                alt={`${project.name} project`}
              />
            </div>
          </div>
          <p className="PortfolioList__name u-mbot-sm">{project.name}</p>
          <a
            className="PortfolioList__preview btn btn--primary u-mbot-sm"
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
          </a>
          <p className="PortfolioList__desc u-mbot-sm">{project.description}</p>
          <p className="PortfolioList__github u-mbot-md">
            <span className="PortfolioList__github-label">GITHUB</span>
            <a
              className="PortfolioList__github-link"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.githubLink.replace('https://github.com/', '')}
            </a>
          </p>
          <div className="PortfolioList__tags">
            {project.tags.map((tag: string) => {
              return (
                <div className="PortfolioList__tag-item" key={tag}>
                  #{tag}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  );

  return (
    <PageContent>
      <div className="PortfolioList">
        <h1 className="PortfolioList__header mobile">Dev Portfolio</h1>
        {portfolioList}
      </div>
    </PageContent>
  );
};
