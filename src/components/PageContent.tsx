import React from 'react';

interface PageContentProps {}

export const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return <div className="PageContent">{children}</div>;
};

export default PageContent;
