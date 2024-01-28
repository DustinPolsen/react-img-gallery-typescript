import * as React from 'react';

interface IFooterCompProps {
}

const FooterComp: React.FunctionComponent<IFooterCompProps> = (props) => {
  return(
    <div className="container my-5">
      
      <footer className="text-center text-lg-start">
        <div className="container d-flex justify-content-center py-5">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/al.mustansir"
            className="btn btn-outline-info btn-lg mx-2"
          >
            Facebook
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.github.com/almustansir"
            className="btn btn-outline-info btn-lg mx-2"
          >
            Github
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="/"
            className="btn btn-outline-info btn-lg mx-2"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-center p-2">
          © 2020 Copyright : <a rel="noopener noreferrer" target="_blank" className="link-dark" href="https://www.gnu.org/licenses/gpl-3.0.en.html">License</a>
        </div>
      </footer>
      
    </div>
  );
};

export default FooterComp;
