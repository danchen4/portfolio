import React from 'react';

interface Props {}

export const Logo = (props: Props) => {
  return (
    <div className="Logo">
      <div className="Logo__icon">
        <div className="Logo__icon-corner" />
        <div className="Logo__icon-text">
          Dan <br /> Chen
        </div>
      </div>
    </div>
  );
};
