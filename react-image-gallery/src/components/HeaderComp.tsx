import * as React from 'react';

interface IHeaderCompProps {
}

const HeaderComp: React.FunctionComponent<IHeaderCompProps> = (props) => {
  return(
    <div>
        <h1 className="display-4 mb-5 mt-3">React Image Gallery</h1>
    </div>
  );
};

export default HeaderComp;
