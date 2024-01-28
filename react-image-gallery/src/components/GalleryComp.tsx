import * as React from 'react';
import { Images } from '../types';

interface IGalleryCompProps {
    images: Images,
    handleRemoveImg?: (title: string) => void
}

const GalleryComp: React.FunctionComponent<IGalleryCompProps> = ({ images, handleRemoveImg } : IGalleryCompProps) => {
  return(
    <>
    <div className="row row-cols-1 row-cols-md-2">
        { images.map(image => (
            <div key={image.id} className="myCard card py-2">
                <img className="card-img-top" src={image.imgLink} alt={image.imgAlt} />
                <div className="card-body-bottom">
                  <h5 className="card-title">{image.title}</h5>
                  <button className="btn btn-danger" onClick={(e) => handleRemoveImg?.(image.id)}>Remove</button>
                </div>
            </div>
        )) }
    </div>

      {/* <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="...">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default GalleryComp;
